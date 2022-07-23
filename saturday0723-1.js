let students = [
    {
     name: "maxxxx",
     here: true
    },
    {
     name: "pam",
     here: true
    }
 ]
 
 function getStudentsNames(studentsArray) {
 
     for (let i=0;i<studentsArray.length;i++) {
      return students[i].name
     }
 }
 
 
 console.log(getStudentsNames(students))