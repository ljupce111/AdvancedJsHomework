function printData(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response){
        return response.text()
    })
    .then(function(result){
        let parsedResult = JSON.parse(result)
        console.log(parsedResult); 
          function columns() {
            const table = document.getElementById('myTable'); 

            for (let i = 0; i < table.rows.length; i++) {
                const row = table.rows[i];
                if(i===0){
                    for (let j = 0; j < 10; j++) {
                        const cell = row.insertCell();
                        cell.textContent = `${parsedResult[j].name}`
                    }
                }
                if(i===1){
                    for (let j = 0; j < 10; j++) {
                        const cell = row.insertCell();
                        cell.textContent = `${parsedResult[j].username}`
                    }
                }
                if(i===2){
                    for (let j = 0; j < 10; j++) {
                        const cell = row.insertCell();
                        cell.textContent = `${parsedResult[j].address.street}`
                    }
                }
                if(i===3){
                    for (let j = 0; j < 10; j++) {
                        const cell = row.insertCell();
                        cell.style.fontSize="11px"
                        cell.textContent = `${parsedResult[j].email}`
                    }
                }
            }
        }

        columns();
    })
    .catch(error => console.error(error));
}
printData();
