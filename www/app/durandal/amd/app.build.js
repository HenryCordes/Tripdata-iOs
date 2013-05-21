{
  "name": "durandal/amd/almond-custom",
  "inlineText": true,
  "stubModules": [
    "durandal/amd/text"
  ],
  "paths": {
    "text": "durandal/amd/text"
  },
  "baseUrl": "C:\\Projects\\HC\\TripData\\HC.TripData.Web\\App",
  "mainConfigFile": "C:\\Projects\\HC\\TripData\\HC.TripData.Web\\App\\main.js",
  "include": [
    "config",
    "main-built",
    "main",
    "durandal/app",
    "durandal/composition",
    "durandal/events",
    "durandal/http",
    "text!durandal/messageBox.html",
    "durandal/messageBox",
    "durandal/modalDialog",
    "durandal/system",
    "durandal/viewEngine",
    "durandal/viewLocator",
    "durandal/viewModel",
    "durandal/viewModelBinder",
    "durandal/widget",
    "durandal/plugins/router",
    "durandal/transitions/entrance",
    "services/authentication",
    "services/breeze.partial-entities",
    "services/cookie",
    "services/datacontext",
    "services/logger",
    "services/model",
    "viewmodels/ajaxlogin",
    "viewmodels/details",
    "viewmodels/home",
    "viewmodels/settings",
    "viewmodels/shell",
    "viewmodels/trip",
    "viewmodels/account/login",
    "viewmodels/account/register",
    "text!views/details.html",
    "text!views/footer.html",
    "text!views/home.html",
    "text!views/nav.html",
    "text!views/settings.html",
    "text!views/shell.html",
    "text!views/trip.html",
    "text!views/account/login.html",
    "text!views/account/register.html"
  ],
  "exclude": [],
  "keepBuildDir": true,
  "optimize": "uglify2",
  "out": "C:\\Projects\\HC\\TripData\\HC.TripData.Web\\App\\main-built.js",
  "pragmas": {
    "build": true
  },
  "wrap": true,
  "insertRequire": [
    "main"
  ]
}