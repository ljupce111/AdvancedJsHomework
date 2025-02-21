const searchValue = document.getElementById('search');
const btn = document.getElementById('btn');
const container = document.getElementById('container');
const refresh = document.getElementById('refresh');
    
function print(result){
    let found = false;
    for(let i=0;i<result.length;i++){

        let { searchBarToLowercase, name, altSpellings, cca2, cca3 } = callElements(result, i);
      
        if (searchBarToLowercase === name || 
            altSpellings.some(alt => alt.toLowerCase() === searchBarToLowercase)||
            searchBarToLowercase === cca2||searchBarToLowercase===cca3
        ) {
            found = true;
            container.innerHTML='';
            printCardFun(result, i);
            return;
        }
    }
    if(!found){
        alert('country does not exist')
    }
    
}

function callElements(result, i) {
    let searchBarValue = searchValue.value;
    let searchBarToLowercase = searchBarValue.toLowerCase();

    let nameTL = result[i].name.common;
    let name = nameTL.toLowerCase();

    let cca2ToLow = result[i].cca2;
    let cca2 = cca2ToLow.toLowerCase();

    let cca3ToLow = result[i].cca3;
    let cca3 = cca3ToLow.toLowerCase();

    let altSpellings = result[i].altSpellings;

    let population = result[i].population;
    let capital = result[i].capital;
    let flag = result[i].flags.png;
    let alt = result[i].flags.alt;

    return { searchBarToLowercase, name, altSpellings, cca2, cca3, population,
         capital, flag, alt};
}

function printCards(result){
    for(let i=0;i<result.length;i++){
        printCardFun(result, i);
    }
}

function printCardFun(result, i) {
    let {name, population, capital, flag, alt}=callElements(result, i);
    
    const card = document.createElement('div');
    const imgSet = document.createElement('div');
    const img = document.createElement('img');
    const listOrder = document.createElement('div');
    const buttonsDiv = document.createElement('div');
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
   
    card.classList.add('card');
    imgSet.classList.add('imgSet');
    img.src = flag;
    img.alt = alt;
    imgSet.appendChild(img);
    
    listOrder.classList.add('listOrder');
    listOrder.innerHTML = `
        <li><b>Name:</b> ${name}</li>
        <li><b>Population:</b> ${population}</li>
        <li><b>Capital:</b> ${capital}</li>
    `;
    buttonsDiv.id = 'buttons'; 
    
    button1.textContent = `Display countries in Europe`;
    button1.classList.add('btn1'); 
    
    button2.textContent = `Display neigbours of Macedonia`;
    button2.classList.add('btn2');
    
    button3.textContent = `Display Macedonia`;
    button3.classList.add('btn3');

    buttonsDiv.appendChild(button1);
    buttonsDiv.appendChild(button2);
    buttonsDiv.appendChild(button3);
    
    card.appendChild(imgSet);
    card.appendChild(listOrder);
    card.appendChild(buttonsDiv);
    container.appendChild(card);
}

function printEurope(result){
    container.innerHTML='';
    for(let i=0;i<result.length;i++){
        if(result[i].continents.includes('Europe')){
            printCardFun(result,i)
        }
    }   
}

function printNeighboursMacedonia(result){
    container.innerHTML='';
        const neigbours=["Serbia", "Kosovo", "Albania", "Greece", "Bulgaria"];
        result.forEach((country, i) => {
            if(neigbours.includes(country.name.common)){
                printCardFun(result, i);
            }
        });
}

function printMKD(result){
    container.innerHTML='';
    for(let i=0;i<result.length;i++){    
        if (result[i].name.common === "North Macedonia") {
            printCardFun(result, i);     
    }
    }
}

function buttons123(result){
    container.addEventListener('click', function (event) {
        if (event.target.classList.contains('btn1')) {
            printEurope(result);
        } else if (event.target.classList.contains('btn2')) {
            printNeighboursMacedonia(result);
        } else if (event.target.classList.contains('btn3')) {
            printMKD(result);
        }
    });
}

function click(print,result){
    btn.addEventListener('click', function(){   
        print(result);
});
    refresh.addEventListener('click', function(){
        container.innerHTML=''
        printCards(result);
    });
}

function enter(print,result) {
    searchValue.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            print(result);
        }
    });
}

const fetchAPI = async () =>{
    try{
    const response = await fetch('https://restcountries.com/v3.1/all');
    const result = await response.json();
    console.log('https://restcountries.com/v3.1/all');
    console.log(result[27])

    printCards(result);
    click(print,result);
    enter(print,result);
    buttons123(result)
    
    }
    catch(error){
        console.error('Error happened', error);
    };
    
}
fetchAPI();

