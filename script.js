fetch('https://api.github.com/users/RomanMatvichuk/repos')
    .then(response => response.json())
    .catch(error => document.write(error))
    .then(function(myJson){

        console.log(myJson);

        var htmlLines = "";

        for (let i = 0; i < myJson.length; i++) {
            htmlLines += "<li><a href='" + myJson[i].html_url + "'>" + myJson[i].name + "</a></li>";
            //htmlLines += "<p><strong>Ålder:</strong> " + myJson[i].age + "<br/>";
            //htmlLines += "<strong>e-post:</strong> " + myJson[i].email + "<br/><br/></p></li>";
        }

        document.getElementById("repos").innerHTML = htmlLines;
    })