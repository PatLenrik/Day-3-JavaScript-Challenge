let nameOfUser =  prompt("Type your name:");
let   nameOfUser1 =nameOfUser.toLowerCase();
let Students = ["john", "jane", "marie"]
let MathGrades = [70, 85, 30]

// if (nameOfUser == Students[0]) {
//     document.write(`${Students[0]} has reached ${MathGrades[0]} points in Math this season.`);

// }

// if (nameOfUser == Students[1]) {
//     document.write(`${Students[1]} has reached ${MathGrades[1]} points in Math this season.`);
// }

console.log(Students.indexOf(nameOfUser));
let studentIndex= Students.indexOf(nameOfUser);

function Note(par1) {
    if (par1 < 60) {
        document.getElementById("Message").style.background = "red";
    } else if (par1 < 70) {
        document.getElementById("Message").style.background = "yellow";
    } else if (par1 < 100) {
        document.getElementById("Message").style.background = "green";
    } else if (par == 100){
         document.getElementById("Message").style.background = "blue";
     } else {
        document.getElementById("Message").style.background = "white";
    }
}

Note(MathGrades[studentIndex]);
document.getElementById("Message").innerHTML = `${Students[studentIndex]} has reached ${MathGrades[studentIndex]} points in Math this season.`