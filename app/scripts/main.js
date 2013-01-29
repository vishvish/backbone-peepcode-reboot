//Filename: main.js

requirejs.config({
    baseUrl : 'scripts',
    paths   : {
        jquery     : 'vendor/jquery',
        underscore : 'vendor/underscore',
        backbone   : 'vendor/backbone',
        tpl        : 'vendor/tpl'
    },
    shim    : {
        underscore : {
            exports : '_'
        },
        backbone   : {
            deps    : ["underscore", "jquery"],
            exports : "Backbone"
        }
    }
});

requirejs(['jquery', 'underscore', 'backbone', 'routes/router'],
    function ($, _, Backbone, Router)
    {
        $(document).ready(function ()
        {
            console.log('Initializing Application.');
            window.App = new Router();
            Backbone.history.start({
                pushState : true
            });
        });
    }
);
