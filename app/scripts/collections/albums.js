define([
    'jquery',
    'underscore',
    'backbone',
    'models/album'
], function ($, _, Backbone, Album)
{
    var Albums = Backbone.Collection.extend({
        model : Album,
        url   : 'http://localhost:9292/albums'
    });
    return Albums;
});


