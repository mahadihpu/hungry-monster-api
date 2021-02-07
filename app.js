       fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data=> displayCountries(data));

        const displayCountries = countries => {
            const countriesDiv = document.getElementById("countries");

            countries.forEach(country => {
                const countryDiv = document.createElement("div");
                countryDiv.className = "country";
                const countryInfo = `
                <h3 class="country-name">${country.name}</h3>
                <p>${country.capital}</p>
                <button onclick="displayCountryDetail('${country.name}')">More Details</button>
                `
                countryDiv.innerHTML = countryInfo;
                countriesDiv.appendChild(countryDiv);

            });
        }
            const displayCountryDetail = name => {
                const url = `https://restcountries.eu/rest/v2/name/${name};`
                fetch(url)
                .then(res => res.json())
                .then(data => render)
            }


            // for(let i=0 ; i<countries.length; i++){
            //     const country = countries[i];
                
            //     console.log(country.name);
                
                /*
                const h3 = document.createElement("h3");
                h3.innerText = country.name;
                const p = document.createElement("p");
                p.innerText = country.capital;
                countryDiv.appendChild(h3);
                countryDiv.appendChild(p); */
            