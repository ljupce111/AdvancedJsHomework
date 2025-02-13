export const academy = {
    name: "QinShift",
    students: ["John", "Bou", "Sean"],
    subjects: ["HTML/CSS", "JavaScript Basics", "JavaScript Advanced"],
    start: '10.4.24',
    end: '10.4.25',
   
    numberOfClasses: function () { return this.subjects.length * 10; },
    printStudents: function () {
        this.students.forEach(element => {
            console.log(element);
        });
    },
    printSubjects: function () {
        this.subjects.forEach(element => {
            console.log(element);
        });
    }
};
