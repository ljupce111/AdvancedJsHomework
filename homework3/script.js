function printData(){
    fetch('https://restcountries.com/v3.1/alpha/MKD')
    .then(response => response.text())
    .then(result => {
        let parsedResult = JSON.parse(result);
        console.log(parsedResult);
    })
    .catch(error => console.error(error));

}
printData();