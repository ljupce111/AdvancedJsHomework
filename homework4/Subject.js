import { academy } from './academy.js';

export function Subject(title, overrideClasses, description, price) {
   
    this.title = title;
    this.numberOfClasses = 10;
    this.isElective = true;
    this.academy = academy;
    this.students = academy.students;

    this.Course = function(description, price){
        this.id = Date.now();
        this.description = description;
        this.price = price;
        this.validatePrice = function(price){
            if(price<0){
                throw new Error('price cant be negative');
            }
        };
        this.validatePrice(price);
    };
    
    this.Course  = new this.Course(description, price);

    this.overrideClasses = function (numberOfClasses) {
        this.numberOfClasses = numberOfClasses;
    };
    if (overrideClasses > 3) {
        this.overrideClasses(overrideClasses);
    } else {
        console.error("number of classes is too small");

    }
    academy.subjects.push(this.title);
};
