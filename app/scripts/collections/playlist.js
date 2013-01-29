define([
    'jquery',
    'underscore',
    'backbone',
    'collections/albums'
], function ($, _, Backbone, Albums)
{
    var Playlist = Albums.extend({
        isFirstAlbum : function (index)
        {
            return (index == 0);
        },

        isLastAlbum : function (index)
        {
            return (index == (this.models.length - 1));
        }
    });
    return Playlist;
});


