const btn = document.getElementById('btn');
const countries = document.getElementById('countries');
const borders = document.getElementById('borders');
const searchBar = document.getElementById('searchBar');

function printData(){
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.text())
    .then(result => {
        let parsedResult = JSON.parse(result);
        console.log("https://restcountries.com/v3.1/all")
        console.log(parsedResult);
        
        function printBorders(parsedResult){
            let found=false;
            for(let i=0;i<parsedResult.length;i++){
                
                let searchBarValue = searchBar.value;
                let searchBarToLowercase=searchBarValue.toLowerCase();

                let nameTL=parsedResult[i].name.common;
                let name=nameTL.toLowerCase();

                let altSpellingsTL=parsedResult[i].altSpellings;

                let flagURL=parsedResult[i].flags.png;
                let flagALT=parsedResult[i].flags.svg;
                if(searchBarToLowercase===name ||
                    altSpellingsTL.some(alt => alt.toLowerCase() === searchBarToLowercase)
                ){
                    found = true;
                    countries.innerHTML = `${nameTL}
                        <img src="${flagURL}" alt="${flagALT}" style="width:100px" height:50px">`
                    borders.innerHTML = ''; 
                    if (parsedResult[i].borders) {
                        parsedResult[i].borders.forEach(border => {
                            borders.innerHTML += `<li>${border}</li>`; 
                        })
                    }
                    break;
                }
                
            }
           if(!found){
                alert('Country not found, please check for typos');
           }
        }

        click(printBorders, parsedResult);
        enter(printBorders, parsedResult)
    })
    .catch(error => console.error(error));

}
printData();

function click(printBorders, parsedResult) {
    btn.addEventListener('click', function () { printBorders(parsedResult); });
}
function enter(printBorders, parsedResult){
searchBar.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        printBorders(parsedResult);  
    }
});
}
