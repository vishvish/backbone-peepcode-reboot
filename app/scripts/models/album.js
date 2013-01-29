define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone)
{
    var Album = Backbone.Model.extend({
        isFirstTrack : function (index)
        {
            return index == 0;
        },

        isLastTrack : function (index)
        {
            return index >= this.get('tracks').length - 1;
        },

        trackUrlAtIndex : function (index)
        {
            if (this.get('tracks').length >= index) {
                return this.get('tracks')[index].url;
            }
            return null;
        }
    });
    return Album;
});




