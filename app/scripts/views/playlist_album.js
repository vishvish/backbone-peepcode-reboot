define([
    'jquery',
    'underscore',
    'backbone',
    'views/album'
], function ($, _, Backbone, AlbumView)
{
    var PlaylistAlbumView = AlbumView.extend({
        events : {
            'click .queue.remove' : 'removeFromPlaylist'
        },

        initialize : function ()
        {
            _.bindAll(this, 'render', 'updateState', 'updateTrack', 'remove');
            this.player = this.options.player;
            this.player.bind('change:state', this.updateState);
            this.player.bind('change:currentTrackIndex', this.updateTrack);

            this.model.bind('remove', this.remove);
        },

        render : function ()
        {
            $(this.el).html(this.template(this.model.toJSON()));
            this.updateTrack();
            return this;
        },

        updateState : function ()
        {
            var isAlbumCurrent = (this.player.currentAlbum() == this.model);
            $(this.el).toggleClass('current', isAlbumCurrent);
        },

        updateTrack : function ()
        {
            var isAlbumCurrent = (this.player.currentAlbum() == this.model);
            if (isAlbumCurrent) {
                var currentTrackIndex = this.player.get('currentTrackIndex');
                this.$('li').each(function (index, el)
                {
                    $(el).toggleClass('current', index == currentTrackIndex);
                });
            }
            this.updateState();
        },

        removeFromPlaylist : function ()
        {
            this.options.playlist.remove(this.model);
            this.player.reset();
        }
    });
    return PlaylistAlbumView;
});


