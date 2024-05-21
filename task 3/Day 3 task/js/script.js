function reqlistener() {
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr);
    for(let country of countryArr){
        console.log(country.flag.common)
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqlistener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();
