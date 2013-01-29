define([
    'jquery',
    'underscore',
    'backbone',
    'collections/playlist'
], function ($, _, Backbone, Playlist)
{
    var Player = Backbone.Model.extend({
        defaults : {
            'currentAlbumIndex' : 0,
            'currentTrackIndex' : 0,
            'state'             : 'stop'
        },

        initialize : function ()
        {
            this.playlist = new Playlist();
        },

        reset : function ()
        {
            this.set({
                'currentAlbumIndex' : 0,
                'currentTrackIndex' : 0,
                'state'             : 'stop'
            });
        },

        play : function ()
        {
            this.set({
                'state' : 'play'
            });
            this.trigger('change:currentTrackIndex');
        },

        pause : function ()
        {
            this.set({
                'state' : 'pause'
            });
        },

        isPlaying : function ()
        {
            return (this.get('state') == 'play');
        },

        isStopped : function ()
        {
            return (!this.isPlaying());
        },

        currentAlbum : function ()
        {
            return this.playlist.at(this.get('currentAlbumIndex'));
        },

        currentTrackUrl : function ()
        {
            var album = this.currentAlbum();
            if (album) {
                return album.trackUrlAtIndex(this.get('currentTrackIndex'));
            } else {
                return null;
            }
        },

        nextTrack : function ()
        {
            var currentTrackIndex = this.get('currentTrackIndex'), currentAlbumIndex = this.get('currentAlbumIndex');
            if (this.currentAlbum().isLastTrack(currentTrackIndex)) {
                if (this.playlist.isLastAlbum(currentAlbumIndex)) {
                    this.set({
                        'currentAlbumIndex' : 0
                    });
                    this.set({
                        'currentTrackIndex' : 0
                    });
                } else {
                    this.set({
                        'currentAlbumIndex' : currentAlbumIndex + 1
                    });
                    this.set({
                        'currentTrackIndex' : 0
                    });
                }
            } else {
                this.set({
                    'currentTrackIndex' : currentTrackIndex + 1
                });
            }
            this.logCurrentAlbumAndTrack();
        },

        prevTrack : function ()
        {
            var currentTrackIndex = this.get('currentTrackIndex'), currentAlbumIndex = this.get('currentAlbumIndex'), lastModelIndex = 0;
            if (this.currentAlbum().isFirstTrack(currentTrackIndex)) {
                if (this.playlist.isFirstAlbum(currentAlbumIndex)) {
                    lastModelIndex = this.playlist.models.length - 1;
                    this.set({
                        'currentAlbumIndex' : lastModelIndex
                    });
                } else {
                    this.set({
                        'currentAlbumIndex' : currentAlbumIndex - 1
                    });
                }
                // In either case, go to last track on album
                var lastTrackIndex = this.currentAlbum().get('tracks').length - 1;
                this.set({
                    'currentTrackIndex' : lastTrackIndex
                });
            } else {
                this.set({
                    'currentTrackIndex' : currentTrackIndex - 1
                });
            }
            this.logCurrentAlbumAndTrack();
        },

        logCurrentAlbumAndTrack : function ()
        {
            console.log("Player " + this.get('currentAlbumIndex') + ':' + this.get('currentTrackIndex'), this);
        }
    });
    return Player;
});
