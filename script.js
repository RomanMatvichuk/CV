fetch('https://api.github.com/users/RomanMatvichuk/repos')
    .then(response => response.json())
    .catch(error => document.write(error))
    .then(function(myJson){

        console.log(myJson);

        var htmlLines = "";

        for (let i = 0; i < myJson.length; i++) {
            htmlLines += "<li><a class=w3-hover-text-blue href='" + myJson[i].html_url + "'>" + myJson[i].name + "</a></li>";
        }

        document.getElementById("repos").innerHTML = htmlLines;
    })