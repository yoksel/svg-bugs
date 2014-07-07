function loadUser() {
    var doc = document;
    var template = doc.querySelector("#template--list");
    // // var template = $('#template--list').html();
    // Mustache.parse(template); // optional, speeds up future uses
    // var rendered = Mustache.render(template, {
    //     "name": "Luke"
    // });

    var listElem = doc.querySelector(".props-list");
    // listElem.innerHTML = rendered;
    // //$('#target').html(rendered);

    var view = {
        "prop-name": "Joe"
    };

    // var output = Mustache.render("{{title}} spends {{calc}}", view);
    var output = Mustache.render(template.innerHTML, view);

    out(output);
    listElem.innerHTML = output;
}

loadUser();


function list() {
    var doc = document;
    var listElem = doc.querySelector(".props-list");
    var templateClassName = "template--list-item";

    this.getTemplate = function(className) {
        var template = doc.querySelector("." + className);
        out("template");
        out(template);

        var elem = doc.createElement("dt");
        //out(listElem);
        listElem.appendChild(elem);
        listElem.appendChild(template);
        // listElem.innerHTML = elem;
        if (template.length > 0) {
            out("1");
            return template;
        }
    }

    this.print = function() {
        var output = "";

        out("template-2");
        out(this.getTemplate(templateClassName));

        for (var i in props) {
            out(i);
            out(" - ");
            out(props[i]);
        }
    }

}




//  Common
// ----------------------------------

function out(str) {
    console.log(str);
    console.log("----------");
}

var list = new list();

//list.print();

// ----------------------------------