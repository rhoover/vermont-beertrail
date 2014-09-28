//Original inspiration for a simple solution: http://www.intridea.com/blog/2014/9/18/seo-for-single-page-applications

var casper = require('casper').create();
var fs = require('fs');

var url = 'http://vtbeertrail';

var jsonData = require('data/vtbrewers.json');
var input = JSON.stringify(jsonData);
var output = JSON.parse(input);
var links = [];
var selectors =[];

for (var i = 0; i < output.length; i++) {
    links.push(url + '/#!/' + output[i].selector + '/');
    selectors.push(output[i].selector);
};
links.push(url + '/#!/', url + '/#!/' + 'brewerlist' + '/');

casper.start()
    .eachThen(links, function (response) {
        var pageLinks = response.data;
        // this.echo(pageLinks);
        // this.thenOpen(pageLinks, function (response) {
        //     this.wait(2000, function () {
        //         this.echo(this.getHTML());
        //     });
        // });
    });

casper.run();