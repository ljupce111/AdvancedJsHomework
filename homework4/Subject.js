import { academy } from './academy.js';

export function Subject(title, overrideClasses) {
   
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = true;
    this.academy = academy;
    this.students = academy.students;
    
    this.overrideClasses = function (numberOfClasses) {
        this.numberOfClasses = numberOfClasses;
    };
    if (overrideClasses > 3) {
        this.overrideClasses(overrideClasses);
    } else {
        return console.error("number of classes is too small");

    }
    academy.subjects.push(this.title);
}
;
