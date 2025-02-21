import { academy } from './academy.js';

export function Student(firstName, lastName, age, startAcademy, startSubject, email, phone) {
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.completeSubjects = [];
    this.academy = null;
    this.currentSubject = null;

    this.Person = function(email, phone){
        this.id = Date.now();
        this.email = email;
        this.phone = phone;
        this.validateEmail = function(email){
            if(!email.includes("@")){
                throw new Error("email must contain @")
            }
        }
        this.validateEmail(email)
    }
    this.person = new this.Person(email,phone)
    
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
