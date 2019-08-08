let endOfCounter = 0;


function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(response => {

            let beginOfData = document.createElement('p');
            let endOfData = document.createElement('p');

            beginOfData.innerHTML = "<br>---------- BEGIN OF DATA ----------<br><br>";
            endOfData.innerHTML = "<br>----- END OF DATA ------<br><br><br><br><br><br><br><br><br><br><br><br>";
            document.body.appendChild(beginOfData);

            for (let i in response) {
                let pUserId = document.createElement('p');
                let pUserName = document.createElement('p');
                let pUserURL = document.createElement('p');

                pUserId.innerHTML = "User ID: " + response[i].id;
                pUserName.innerHTML = "User Name: " + response[i].name;
                pUserURL.innerHTML = "User URL: http://" + response[i].website + "<br>--------";

                document.body.appendChild(pUserId);
                document.body.appendChild(pUserName);
                document.body.appendChild(pUserURL);
                console.log(response[i])
                // console.log(jsonObjArray[i]);
            }
            document.body.appendChild(endOfData);
        });
}




window.onscroll = function () {

    let d = document.documentElement;
    let offset = d.scrollTop + window.innerHeight;
    let height = d.offsetHeight;

    //    console.log('offset = ' + offset);
    //    console.log('height = ' + height);

    if (offset === height) {

        getData("https://jsonplaceholder.typicode.com/users");

        endOfCounter += 1;

        console.log('Koniec strony = ' + endOfCounter);
    }

};