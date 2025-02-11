const btn = document.getElementById('btn');
const countries = document.getElementById('countries');
const borders = document.getElementById('borders');
const searchBar = document.getElementById('searchBar');
const capital = document.getElementById('capital')

function printBorders(parsedResult) {
    let found = false;
    for (let i = 0; i < parsedResult.length; i++) {

        let { searchBarToLowercase, name, altSpellings, cca2, cca3, nameTL, flagURL, flagALT } = newFunction(i);

        if (searchBarToLowercase === name || 
            altSpellings.some(alt => alt.toLowerCase() === searchBarToLowercase)||
            searchBarToLowercase === cca2||searchBarToLowercase===cca3
        ) {
            found = true;
            countries.innerHTML = `${nameTL}
                <img src="${flagURL}" alt="${flagALT}" style="width:100px" height:50px">`;
            capital.innerHTML = parsedResult[i].capital
                borders.innerHTML = '';
            if (parsedResult[i].borders) {
                parsedResult[i].borders.forEach(border => {
                    borders.innerHTML += `<li>${border}</li>`;
                });
            }
            break;
        }
    }
    if (!found) {
        alert('Country not found, please check for typos');
    }

    function newFunction(i) {
        let searchBarValue = searchBar.value;
        let searchBarToLowercase = searchBarValue.toLowerCase();

        let nameTL = parsedResult[i].name.common;
        let name = nameTL.toLowerCase();

        let cca2ToLow = parsedResult[i].cca2;
        let cca2 = cca2ToLow.toLowerCase();

        let cca3ToLow = parsedResult[i].cca3;
        let cca3 = cca3ToLow.toLowerCase();

        let altSpellings = parsedResult[i].altSpellings;

        let flagURL = parsedResult[i].flags.png;
        let flagALT = parsedResult[i].flags.svg;
        return { searchBarToLowercase, name, altSpellings, cca2, cca3, nameTL, flagURL, flagALT };
    }
}

const printData = async () => {
    try{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();   
        console.log('https://restcountries.com/v3.1/all')
        console.log(result[27])
        click(printBorders, result);
        enter(printBorders, result);
    
    }
    catch(error){
        console.log('Error happened', error)
    }
}

function click(printBorders, parsedResult) {
    btn.addEventListener('click', function () { 
        printBorders(parsedResult); 
    });
}

function enter(printBorders, parsedResult) {
    searchBar.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            printBorders(parsedResult);  
        }
    });
}

printData();
