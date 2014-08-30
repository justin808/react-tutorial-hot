var bodyParser = require('body-parser');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.hot.config');

var comments = [{author: 'Pete Hunt', text: 'Hey there!'},
  {author: 'Justin Gordon', text: 'Aloha from @railsonmaui'}
];

var server = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true
})

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended: true}));

server.app.get('/comments.json', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

server.app.post('/comments.json', function(req, res) {
  comments.push(req.body);
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(comments));
});

server.listen(3000, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
