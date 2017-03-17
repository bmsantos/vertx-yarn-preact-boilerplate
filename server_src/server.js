var Router = require("vertx-web-js/router");
var StaticHandler = require("vertx-web-js/static_handler");

var server = vertx.createHttpServer();

var router = Router.router(vertx);

router.get('/hello').handler( ctx => {
	let response = ctx.response();
	response.putHeader("content-type", "text/plain");

	response.end("Hello ES6  World!");
});

router.route().handler(StaticHandler.create().handle);

server.requestHandler(router.accept).listen(3000);
