unction reqlistener() {
    const countryArr = JSON.parse(this.responseText);
    console.log(countryArr);
    for(let country of countryArr){
        console.log(country.region.common)
    }
    for(let country of countryArr){
        console.log(country.subregion.common)
    }
}

const req = new XMLHttpRequest();
req.addEventListener("load", reqlistener);
req.open("GET", "https://restcountries.com/v3.1/all");
req.send();