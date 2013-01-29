define([
    'jquery',
    'underscore',
    'backbone',
    'collections/albums',
    'models/player',
    'views/playlist',
    'views/library'
], function ($, _, Backbone, Albums, Player, PlaylistView, LibraryView)
{
    var Router = Backbone.Router.extend({
        routes : {
            ''      : 'home', // root route - empty string
            'blank' : 'blank'
        },

        initialize : function ()
        {
            console.log('Initializing Router.');
            var library = new Albums();
            var player = new Player();
            // create the root-level views here
            this.playlistView = new PlaylistView({
                collection : player.playlist,
                player     : player,
                library    : library
            });

            this.libraryView = new LibraryView({
                collection : library
            });
            library.fetch(); // trigger REST request
        },

        home : function ()
        {
            var $container = $('#container');
            $container.empty();
            // clear out container when going here
            $container.append(this.playlistView.render().el);
            $container.append(this.libraryView.render().el);
        },

        blank : function ()
        {
            $('#container').empty().text('blank');
        }
    });
    return Router;
});





