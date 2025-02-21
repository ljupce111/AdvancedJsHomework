let academy = {
    name: "QinShift",
    students: ["John", "Bou", "Sean"],
    subjects: ["HTML/CSS", "JavaScript Basics", "JavaScript Advanced"],
    start: '10.4.24',
    end: '10.4.25',
    
    Institution: function(location, capacity){
        this.id = Date.now();
        this.location = location;
        this.capacity = capacity;
        this.validateCapacity= function(capacity){
            if(capacity < 1){
            throw new Error('capacity cant be below 1');
            }
        };
        this.validateCapacity(capacity)
    },

    createAcademy: function(location, capacity){
        return new this.Institution(location, capacity);
    },

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


export{academy}