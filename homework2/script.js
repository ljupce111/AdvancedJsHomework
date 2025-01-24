function printData() {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
        .then(function (response) {
            return response.text()
        })
        .then(function (result) {
            let parsedResult = JSON.parse(result)
            console.log(parsedResult);
            gradeAboive(parsedResult);
            femaleNamesAndGrades(parsedResult);
            skopjeMale(parsedResult);
            femalesGrades(parsedResult);
            maleNamesWithB(parsedResult)
        })
        .catch(error => console.error(error));

    function maleNamesWithB(parsedResult) {
        for (let i = 0; i < parsedResult.length; i++) {
            let firstLetter = parsedResult[i].firstName.charAt(0);
            if (parsedResult[i].gender === "Male" &&
                parsedResult[i].averageGrade >= 2 &&
                firstLetter === "B"
            ) {
                const MaleNamesWithB = document.getElementById('MaleNamesWithB');
                MaleNamesWithB.innerHTML += `<li>${parsedResult[i].firstName}
                     ${parsedResult[i].lastName} : ${ parsedResult[i].averageGrade}</li>`;
            }
        }
    }

    function femalesGrades(parsedResult) {
        for (let i = 0; i < parsedResult.length; i++) {
            if (parsedResult[i].gender === "Female" && parsedResult[i].age >= 24) {
                const femaleGrades = document.getElementById('femaleGrades');
                femaleGrades.innerHTML += `<li>${parsedResult[i].firstName + " " +
                    parsedResult[i].lastName}  : ${parsedResult[i].averageGrade}</li>`;
            }
        }
    }

    function skopjeMale(parsedResult) {
        for (let i = 0; i < parsedResult.length; i++) {
            if (parsedResult[i].gender === "Male" &&
                parsedResult[i].city === "Skopje" &&
                parsedResult[i].age >= 18) {
                const skopjeMale = document.getElementById('skopjeMale');
                skopjeMale.innerHTML += `<li>${parsedResult[i].firstName + " " + parsedResult[i].lastName}</li>`;
            }
        }
    }

    function femaleNamesAndGrades(parsedResult) {
        for (let i = 0; i < parsedResult.length; i++) {
            if (parsedResult[i].gender === "Female" && parsedResult[i].averageGrade === 5) {
                const femaleNames = document.getElementById('femaleNames');
                femaleNames.innerHTML += `<li>${parsedResult[i].firstName + " " + parsedResult[i].lastName}</li>`;
            }
        }
    }

    function gradeAboive(parsedResult) {
        for (let i = 0; i < parsedResult.length; i++) {
            if (parsedResult[i].averageGrade >= 3) {
                const grade = document.getElementById('grade');
                grade.innerHTML += `<li>${parsedResult[i].firstName}
                ${parsedResult[i].lastName} : ${parsedResult[i].averageGrade} </li>`;
            }
        }
    }
}
printData();