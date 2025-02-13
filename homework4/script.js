import{ academy } from'./academy.js'
import { Student } from './Student.js';
import { Subject } from './Subject.js';

const newSubject = new Subject("Very Advanced JS", 5);
console.log(newSubject);
const studen= new Student("Jon","Doe",19,academy,"Very Advanced JS")
console.log(studen)