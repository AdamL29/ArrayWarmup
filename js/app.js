let studentName = `Timothy`;
let studentGpa = 3.2;
let honorRole = true;

if (honorRole) {
    console.log(`You are a passer.`);
} else{
    console.log(`Time to pick up your game.`);
}

if (studentGpa <= 1.9) {
    console.log(`F`);
} else if (studentGpa <= 2.4) {
    console.log(`D`);
} else if (studentGpa <= 2.9) {
    console.log(`C`);
} else if (studentGpa <= 3.4) {
    console.log(`B`);
} else if (studentGpa >=3.5) {
    console.log(`A`);
}

let sNames = [`Aaron`, `Jacqueline`, `Blake`];
let sGpas = [2.9, 3.8, 1.78];
let hRoles = [false, true, false];

if (hRoles[0, 1 , 2] === true) {
    console.log(`Congragulations to our Honor students`);
} else if ((hRoles[0] === true && hRoles[1] === true) ||
    (hRoles[0] === true && hRoles[2] === true) ||
    (hRoles[2] === true && hRoles[1] === true)) {
    console.log(`We are happy to hear some are getting it.`);
} else{
    console.log(`Maybe your classmates can help you`);
}

sNames.push(`Denice`);
sGpas.push(3.5);
hRoles.push(true);

let lastStudent = sNames.pop();
let lastStGpa = sGpas.pop();
let lastStHonor = hRoles.pop();

if (lastStGpa > sGpas[0, 1 ,2]) {
    console.log(`Last student best student`);
}
