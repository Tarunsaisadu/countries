
let countries = document.getElementById('countries');

//  event listener


function getCountries() {
    
    let url = `https://restcountries.com/v3.1/all`
     
     fetch(url).then(response => response.json())
    .then(data => 
            
        {
            let options = "";
                for(let i=0; i<data.length; i++){
                   
                    options+= `<option id="countryValue" value="${data[i].name.common}">${data[i].name.common}</option>`
                    // console.log(data[i].name.common)
                }
                    countries.innerHTML=options;
              
                    function diplayCountries(countryName) {

                        const  countryInfo = data.find(c => c.name.common === countryName);
                        console.log(Object.values(countryInfo.currencies));
                        console.log(countryInfo)
                        document.getElementById("capital").innerHTML = countryInfo.capital;
                        // document.getElementById("currency").innerHTML = Object.values(countryInfo.currencies[0]);
                        document.getElementById("continent").innerHTML = countryInfo.continents[0];
                        document.getElementById("flag").src = countryInfo.flags.png;
                    }  
                    diplayCountries("China")
                    countries.addEventListener("change", function(event){
                        console.log(event.target.value)
                        diplayCountries(event.target.value)
                    })
                    
        }

        
        );
        
        
}

getCountries();


//  display countryinfo





