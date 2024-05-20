search = async() =>{
    let CountryName = country.value
    // console.log(CountryName);

    if (CountryName) {
        const response = await fetch(`https://restcountries.com/v3.1/name/${CountryName}?fullText=true`)
        response.json().then((data)=>{
            // console.log(data[0]);

            // common name
            cName=data[0].name.common
            // console.log(`${data[0].name.common}`);

            // official name
            offName=data[0].name.official
            // console.log(`${data[0].name.official}`);

            // Currenicies
            let currency=Object.values(data[0].currencies)
            currname=currency[0].name
            csymbol = currency[0].symbol
            // console.log(`${currency[0].name} ${currency[0].symbol}`);

            // capital
            cap =""
            data[0].capital.forEach(item=>{ cap+=item+","})
            cap=cap.slice(0,-1)

            // Languages
            lang=Object.values(data[0].languages)
            langstr=""
            lang.forEach(item=>{langstr+=item+","})
            langstr=langstr.slice(0,-1)
            // console.log(langstr);

            // borders
            brdrs=""
            data[0].borders.forEach(item=>{brdrs+=item+","})
            brdrs=brdrs.slice(0,-1)
            // console.log(data[0].borders);

            // Area
            arr=data[0].area
            // console.log(data[0].area);

            // Google Maps
            map=data[0].maps.googleMaps
            // console.log(data[0].maps.googleMaps);

            // population
            popltn=data[0].population
            // console.log(data[0].population);

            // timezone
            tZone=""
            data[0].timezones.forEach(item=>{tZone+=item+","})
            tZone=tZone.slice(0,-1)
            // console.log(data[0].timezones);

            // continents
            contint=data[0].continents
            // console.log(data[0].continents);

            // flag-png
            flagpng=data[0].flags.png
            // console.log(data[0].flags.png);

            result.innerHTML =`                <div class="card" style="width: 100%;">
            <img src=${flagpng} class="card-img-top" alt="...">
            <div class="card-body">
              <h4 class="card-title text-light">${offName}</h4>
              <hr>
              <ul>
                <li class="list-group-item text-light"><b>Common Name</b> : ${cName}</li>
                <li class="list-group-item text-light"><b>Capital</b> : ${cap} </li>
                <li class="list-group-item text-light"><b>Currencies</b> : ${currname} (${csymbol})</li>
                <li class="list-group-item text-light"><b>Languages</b> : ${langstr}</li>
                <li class="list-group-item text-light"><b>Boarders</b> : ${brdrs}</li>
                <li class="list-group-item text-light"><b>Continent</b> : ${contint}</li>
                <li class="list-group-item text-light"><b>population</b> : ${popltn}</li>
                <li class="list-group-item text-light"><b>Area</b> : ${arr}</li>
                <li class="list-group-item text-light"><b>Timezones</b> : ${tZone}<li>
              </ul>
              <hr>
              <div class="d-flex justify-content-center align-items-center"><a href="${map}" class="btn btn-outline-light text-center">Click here to view map</a></div>
            </div>
            
        </div>`
        })
    }
    else{
        alert('Enter A valid Input')
    }
}

