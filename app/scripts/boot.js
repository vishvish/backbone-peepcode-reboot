// Filename: boot.js

require.config({
    baseUrl: 'scripts',
    paths : {
        jquery     : 'vendor/jquery',
        underscore : 'vendor/underscore',
        backbone   : 'vendor/backbone'
    }
});

require(['main'], function ()
{
    console.log("Bootstrapping Application");
});
