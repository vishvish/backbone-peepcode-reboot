define([
    'jquery',
    'underscore',
    'backbone',
    'views/library_album',
    'tpl!templates/library-template.ejs'
], function ($, _, Backbone, LibraryAlbumView, tpl)
{
    var LibraryView = Backbone.View.extend({
        tagName   : 'section',
        className : 'library',
        template  : tpl,

        initialize : function ()
        {
            _.bindAll(this, 'render');
            this.collection.bind('reset', this.render);
        },

        render : function ()
        {
            var $albums, collection = this.collection;

            $(this.el).html(this.template({}));
            $albums = this.$('.albums');
            this.collection.each(function (album)
            {
                var view = new LibraryAlbumView({
                    model      : album,
                    collection : collection
                });
                $albums.append(view.render().el);
            });
            return this;
        }
    });
    return LibraryView;
});
