const searchValue = document.getElementById('search');
const btn = document.getElementById('btn');
const card = document.getElementById('card');
const imgSet = document.getElementById('imgSet');
const listOrder = document.getElementById('listOrder');
const container = document.getElementById('container');
let isListernerAdded=false;
function print(result){
    let found = false;
    for(let i=0;i<result.length;i++){
        let searchBarValue = searchValue.value;
        let searchBarToLowercase = searchBarValue.toLowerCase();

        let nameTL = result[i].name.common;
        let name = nameTL.toLowerCase();

        let cca2ToLow = result[i].cca2;
        let cca2 = cca2ToLow.toLowerCase();

        let cca3ToLow = result[i].cca3;
        let cca3 = cca3ToLow.toLowerCase();

        let altSpellings = result[i].altSpellings;
      
        if (searchBarToLowercase === name || 
            altSpellings.some(alt => alt.toLowerCase() === searchBarToLowercase)||
            searchBarToLowercase === cca2||searchBarToLowercase===cca3
        ) {
            found = true;
            container.innerHTML='';
            printCardFun(result, i);
        }
    }
    if(!found){
        alert('country does not exist')
    }
    
}
function printCards(result){
    for(let i=0;i<result.length;i++){
        printCardFun(result, i);
        
    }
}

function printCardFun(result, i) {
    let name = result[i].name.common;
    let population = result[i].population;
    let capital = result[i].capital;
    let flag = result[i].flags.png;
    let alt = result[i].flags.alt;

    const card = document.createElement('div');
    card.classList.add('card');

    const imgSet = document.createElement('div');
    imgSet.classList.add('imgSet');
    const img = document.createElement('img');
    img.src = flag;
    img.alt = alt;
    imgSet.appendChild(img);

    const listOrder = document.createElement('div');
    listOrder.classList.add('listOrder');
    listOrder.innerHTML = `
        <li><b>Name:</b> ${name}</li>
        <li><b>Population:</b> ${population}</li>
        <li><b>Capital:</b> ${capital}</li>
    `;
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons'; 

    
    const button1 = document.createElement('button');
    button1.textContent = `Display countries in Europe`;
    button1.classList.add('btn1'); 

    const button2 = document.createElement('button');
    button2.textContent = `Display neigbours of Macedonia`;
    button2.classList.add('btn2');

    const button3 = document.createElement('button');
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
        for (let i = 0; i < result.length; i++) {
            if (result[i].name.common === "Kosovo") {
                printCardFun(result, i); 
            }
            if (result[i].name.common === "Serbia") {
                printCardFun(result, i); 
            }
            if (result[i].name.common === "Albania") {
                printCardFun(result, i); 
            }
            if (result[i].name.common === "Greece") {
                printCardFun(result, i); 
            }
            if (result[i].name.common === "Bulgaria") {
                printCardFun(result, i);     
        }
    }
}
function printMKD(result){
    container.innerHTML='';
    for(let i=0;i<result.length;i++){    
        let mkd=result[i].name.common
        if (result[i].name.common === "North Macedonia") {
            printCardFun(result, i);     
    }
    }
}
function buttons123(result){
    if(isListernerAdded)return;
    const btn1 = document.getElementsByClassName('btn1')[0];
    btn1.addEventListener('click', function(){
        printEurope(result);
    });

    const btn2 = document.getElementsByClassName('btn2')[0];
    btn2.addEventListener('click', function () {
        printNeighboursMacedonia(result);
    });

    const btn3 = document.getElementsByClassName('btn3')[0];
    btn3.addEventListener('click', function () {
        printMKD(result);
    });

    isListernerAdded=true;
}

function click(print,result){
    btn.addEventListener('click', function(){   
        print(result);
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
    buttons123(result);
    }
    catch(error){
        console.error('Error happened', error);
    };
    
}
fetchAPI();

