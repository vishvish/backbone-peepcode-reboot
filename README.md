# README

This is a refactoring of Peepcode's Backbone application that goes with their screencast. There is no server API required, a static JSON file is used to provide the data. The code structure has been Yeomanized and re-factored for Require.js.


You can run the client easily with [Yeoman](http://yeoman.io):

    yeoman server

## Peepcode's original screencast and code

Thanks to Peepcode for allowing me to release this code. If you want to learn Backbone, I suggest you head their direction and watch their excellent Screencast:

[https://peepcode.com/products/backbone-js](https://peepcode.com/products/backbone-js)

## Use Require.js!

While it might look like Require.js means a chunk of irritating boilerplate code at the top of every file, look at it this way: It's the metadata that resolves the dependencies for the code in the file at runtime. In a static language, you'd have imports and classes.

**Javascript**

    define([
        'jquery',
        'underscore',
        'backbone',
        'models/album'
    ], function ($, _, Backbone, Album)
    {
        var Albums = Backbone.Collection.extend({
            model : Album,
            url   : '/albums.json'
        });
        return Albums;
    });

**Generic Static Language Format**

    package com.peepcode.backbone {
    
        import com.backbonejs.Backbone.Model
        import com.jquery.Jquery
        import com.underscorejs.Underscore
        import com.peepcode.backbone.models.Album
        
        class Albums extends Backbone.Collection {
        
            public var model:Album;
            public var url:String = "/albums.json";
            
            function Albums():void {
            } 
        }
    }

---
You get the idea.
