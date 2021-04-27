const ExpressWebServer = require('./infrastructure/express-server');
const VersionInteractor = require('./usecase/version');
const SearchInteractor = require('./usecase/search');
const WebServerInterface = require('./interface/webserver');
const SearchInterface = require('./interface/search');

const versionInteractor = new VersionInteractor();
const webserverInterface = new WebServerInterface({
    VersionInteractor: versionInteractor,
});


const searchInteractor = new SearchInteractor();
const searchInterface = new SearchInterface({
    SearchInteractor: searchInteractor,
});


const expressWebServer = new ExpressWebServer({
    WebServerInterface: webserverInterface,
    SearchInterface: searchInterface,
});

expressWebServer.start();