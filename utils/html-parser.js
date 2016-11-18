/* globals module require Promise */
"use strict";

const jsdom = require("jsdom").jsdom,
    doc = jsdom(),
    window = doc.defaultView,
    $ = require("jquery")(window);

module.exports.parseSimpleMovie = (selector, html) => {
    $("body").html(html);
    let items = [];
    $(selector).each((index, item) => {
        const $item = $(item);

        items.push({
            title: $item.html(),
            url: $item.attr("href")
        });
    });

    return Promise.resolve()
        .then(() => {
            return items;
        });
};

module.exports.parseFullMovie = (selector, html) =>{
     $("body").html(html);
     
const title = '.title_wrapper h1';
const description = '.plot_summary_wrapper .summary_text';
const cover = '.poster img';
const categories = '.subtext .itemprop';
const cast = '#titleCast tr';
const trailer='.slate_wrapper .slate a';
 
const castArray=[];
$(cast).each((index,item)=>{
    let name = $(cast +' img').attr('alt');
    let img=$(cast +' img').attr('src');
    let role = $(cast +' .character a').html();
    let id = $(cast +' .itemprop a').attr('href');

    castArray.push({
        name, 
        img,
        role,
        id
    });
});

const categoriesArray=[];
$(categories).each((index,item)=>{
       categoriesArray.push( $(item).html());
            });

        let movie={
            coverImageLink: $(cover).attr('src') ,
            trailer:$(trailer).attr('href'),
            title: $(title).text().trim(),
            description: $(description).html().trim(),
            categories:categoriesArray,
            //releaseDate:,
            actors:castArray
        };
console.log(movie);

    return Promise.resolve()
        .then(() => {
        });
}