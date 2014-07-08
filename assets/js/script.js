function list() {
    var doc = document;
    var listElem = doc.querySelector(".props-list");
    var templateClassName = "template--list-item";

    this.print = function() {
        var template = doc.querySelector("#template--list");
        var output = Mustache.render(template.innerHTML, items);

        listElem.innerHTML = output;
    }
}

//  Common
// ----------------------------------

function out(str) {
    console.log(str);
    console.log("----------");
}

var list = new list();
list.print();

// ----------------------------------