// create and array of objects
let students = [
    {
     name: "maxxxx",
     here: true   // are they here right now 
    },
    {
     name: "pam",
     here: true
    }
 ]

 // returns an array with string of names only fron the students name.
 // function getStudentsNames(studentsArray) {}
 function getStudentsNames(studentsArray) {
    let studentName = []
     for (let i=0;i<studentsArray.length;i++) {
     studentName.push(studentsArray[i].name)
     }
     return studentName;
 }
 
// print out what the getStudentsName returns
 console.log(getStudentsNames(studentName))
 console.table(studentsNames)
 console.table(students)