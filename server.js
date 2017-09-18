(function () {
  'use strict';

  var cluster = require('cluster'),
    http = require('http'),
    os = require('os'),

    ClusterServer = {
      name: 'ClusterServer',

      cpus: os.cpus().length,

      autoRestart: false, // Restart threads on death?

      start: function (server, port) {
        var me = this,
          i;

        if (cluster.isMaster) { // fork worker threads
          for (i = 0; i < me.cpus; i += 1) {
            console.log(me.name + ': starting worker thread #' + i);
            cluster.fork();
          }

          cluster.on('death', function (worker) {
            // Log deaths!
            console.log(me.name + ': worker ' + worker.pid + ' died.');
            // If autoRestart is true, spin up another to replace it
            if (me.autoRestart) {
              console.log(me.name + ': Restarting worker thread...');
              cluster.fork();
            }
          });

        } else {
          // Worker threads run the server
          server.listen(port);
          process.on('uncaughtException', onUncaughtException);
        }
      }
    },

    helloWorldServer = http.createServer(function (req, res) {

      // routing
      switch(req.url) {
        case '/login': loginHandler(req, res); break;
        case '/favicon.ico': handleFavicon(req, res); break;
        default : handleDefault(req, res);
      }

    });

  function onUncaughtException(err) {
    console.log('ANY ERROR HANDLER', err);
  }

  function loginHandler (req, res) {
    res.writeHead(200, {
      'Content-type': 'application/json'
    });

    var payload = { user: 'Maks', email: 'example@email.com' };
    res.end(JSON.stringify(payload));
  }

  function handleFavicon (req, res) {
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });

    res.end('favicon.ico');
  }

  function handleDefault (req, res) {
    res.writeHead(200, {
      'Content-type': 'text/plain'
    });

    res.end('Not declared URL');
    console.log('helloWorldServer: Served no declared URL!');
  }

  ClusterServer.name = 'helloWorldServer'; // rename ClusterServer instance
  ClusterServer.start(helloWorldServer, 8081); // Start it up!
}());
