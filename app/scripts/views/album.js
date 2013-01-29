define([
    'jquery',
    'underscore',
    'backbone',
    'tpl!templates/album-template.ejs'
], function ($, _, tpl)
{
    var AlbumView = Backbone.View.extend({
        template  : tpl,
        tagName   : 'li',
        className : 'album',

        initialize : function ()
        {
            _.bindAll(this, 'render');
            // this.model.bind('change', this.render);

        },

        render : function ()
        {
            $(this.el).html(this.template(this.model.toJSON()));
            return this;
        }
    });
    return AlbumView;
});



