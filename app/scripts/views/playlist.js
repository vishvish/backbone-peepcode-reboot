define([
    'jquery',
    'underscore',
    'backbone',
    'views/playlist_album',
    'tpl!templates/playlist-template.ejs'
], function ($, _, Backbone, PlaylistAlbumView, tpl)
{
    var PlaylistView = Backbone.View.extend({
        tagName   : 'section',
        className : 'playlist',
        template  : tpl,

        events : {
            'click .play'  : 'play',
            'click .pause' : 'pause',
            'click .next'  : 'nextTrack',
            'click .prev'  : 'prevTrack'
        },

        initialize : function ()
        {
            _.bindAll(this, 'render', 'renderAlbum', 'updateTrack', 'updateState', 'queueAlbum');

            this.collection.bind('reset', this.render);
            this.collection.bind('add', this.renderAlbum);

            this.player = this.options.player;
            this.player.bind('change:state', this.updateState);
            this.player.bind('change:currentTrackIndex', this.updateTrack);
            this.createAudio();

            this.library = this.options.library;
            this.library.bind('select', this.queueAlbum);
        },

        createAudio : function ()
        {
            this.audio = new Audio();
        },

        updateState : function ()
        {
            this.updateTrack();
            this.$('button.play').toggle(this.player.isStopped());
            this.$('button.pause').toggle(this.player.isPlaying());
        },

        updateTrack : function ()
        {
            this.audio.src = this.player.currentTrackUrl();
            if (this.player.get('state') == 'play') {
                this.audio.play();
            } else {
                this.audio.pause();
            }
        },

        play : function ()
        {
            this.player.play();
        },

        pause : function ()
        {
            this.player.pause();
        },

        nextTrack : function ()
        {
            this.player.nextTrack();
        },

        prevTrack : function ()
        {
            this.player.prevTrack();
        },

        renderAlbum : function (album)
        {
            var view = new PlaylistAlbumView({
                model    : album,
                player   : this.player,
                playlist : this.collection
            });
            this.$('ul').append(view.render().el);
        },

        queueAlbum : function (album)
        {
            this.collection.add(album);
        },

        render : function ()
        {
            $(this.el).html(this.template(this.player.toJSON()));
            this.collection.each(this.renderAlbum);

            this.updateState();
            return this;
        }
    });
    return PlaylistView;
});





