define([
    'jquery',
    'underscore',
    'backbone',
    'models/album'
], function ($, _, Backbone, Album)
{
    var Albums = Backbone.Collection.extend({
        model : Album,
        url   : '/albums.json'
    });
    return Albums;
});


