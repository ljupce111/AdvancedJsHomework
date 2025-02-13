import { academy } from './academy.js';

export function Student(firstName, lastName, age, startAcademy, startSubject) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completeSubjects = [];
    this.academy = null;
    this.currentSubject = null;
    
    this.startAcademy = function (academy) {
        this.academy = academy;
    };
    if (startAcademy === academy) {
        this.startAcademy(startAcademy);
    } else { console.error('academy is not started'); };
    
    this.startSubject = function (currentSubject) {
        this.currentSubject = currentSubject;
    };
    if (this.academy.subjects.includes(startSubject)) {
        this.startSubject(startSubject);

    } else {
        console.error('Subject does not exist in the academy');
    }
    const fullName = `${this.firstName} ${this.lastName}`;
    academy.students.push(fullName);
}
