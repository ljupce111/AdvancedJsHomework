import{ academy } from'./academy.js'
import { Student } from './Student.js';
import { Subject } from './Subject.js';

const newSubject = new Subject("Very Advanced JS", 5, 'asdasd' ,100);
console.log(newSubject);

const studen= new Student("Jon","Doe",19,academy,"Very Advanced JS","asdsd@123","123213")
console.log(studen);

console.log(new academy.Institution("New York", 1000))