define([
    'jquery',
    'underscore',
    'backbone',
    'views/album'
], function ($, _, Backbone, AlbumView)
{
    var LibraryAlbumView = AlbumView.extend({
        // bind events in view
        events : {
            'click .queue.add' : 'select'
        },

        select : function ()
        {
            this.collection.trigger('select', this.model);
        }
    });
    return LibraryAlbumView;
});


