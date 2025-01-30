function printData() {
    fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
        .then(function (response) {return response.text()})
        .then(function (result) {
            let parsedResult = JSON.parse(result)
            console.log(parsedResult);
            
            const fullName = parsedResult => `${parsedResult.firstName} ${parsedResult.lastName}`;
            
            function gradeAbove(parsedResult) {
               let filteredStudents = parsedResult.filter(student => student.averageGrade >= 3);
                filteredStudents.forEach(student => {
                    const grade = document.getElementById('grade');
                grade.innerHTML += `<hr><li>${fullName(student)} : <b>${student.averageGrade} </b></li>`;
                });
            }
            function femaleNamesAndGrades(parsedResult){
                let filteredStudents = parsedResult.filter(student => student.averageGrade === 5 && student.gender === "Female");
                filteredStudents.forEach(student => {
                    const femaleNames = document.getElementById('femaleNames');
                femaleNames.innerHTML += `<hr><li>${fullName(student)} : <b>${student.averageGrade} </b></li>`;
                });
            }
            function skopjeMale(parsedResult){
                let filteredStudents = parsedResult.filter(student => student.city === "Skopje" && student.gender === "Male");
                filteredStudents.forEach(student => {
                const skopjeMale = document.getElementById('skopjeMale');
                skopjeMale.innerHTML += `<hr><li>${fullName(student)}</li>`;
                });
            }
            function femalesGrades(parsedResult){
                function calculateAverage(arr) {
                    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
                    const average = sum / arr.length;
                    return Math.round(average);
                }

                const filtered = parsedResult.filter((element) => element.age >= 24 && element.gender === "Female")
                const grades = filtered.map(student => student.averageGrade);
                const femaleGrades = document.getElementById('femaleGrades');
                femaleGrades.innerHTML += `<hr><h1><center>${calculateAverage(grades)}</center></h1>`;
            }
            function maleNamesWithB(parsedResult){
                    parsedResult.forEach(student => {
                    student.firstLetter = student.firstName.charAt(0);
                });
                    let filteredStudents = parsedResult.filter(student => student.firstLetter === "B" && student.gender === "Male" && student.averageGrade >= 2);
                    filteredStudents.forEach(student => {
                        const maleNamesWithB = document.getElementById('maleNamesWithB')
                        maleNamesWithB.innerHTML += `<hr><li>${fullName(student)} : ${student.averageGrade}</li>`;
                    });
                

            }

            gradeAbove(parsedResult);
            femaleNamesAndGrades(parsedResult)
            skopjeMale(parsedResult);
            femalesGrades(parsedResult);
            maleNamesWithB(parsedResult);
        })
        .catch(error => console.error(error));
        
}
printData();

