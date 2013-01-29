define([
    'jquery',
    'underscore',
    'backbone',
    'tpl!templates/album-template.ejs'
], function ($, _, Backbone, tpl)
{
    var AlbumView = Backbone.View.extend({
        template  : tpl,
        tagName   : 'li',
        className : 'album',

        initialize : function ()
        {
            _.bindAll(this, 'render');
        },

        render : function ()
        {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return AlbumView;
});



