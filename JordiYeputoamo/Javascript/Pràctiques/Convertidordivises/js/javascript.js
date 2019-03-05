$(document).ready(function() {
    $.getJSON("http://jsonip.com", function(data) {
        console.log(data);
    });
});