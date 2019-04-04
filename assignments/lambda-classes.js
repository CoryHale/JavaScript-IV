// Class Declarations

class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }

    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}.`)
    }
}

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.specialty = instructorAttr.specialty;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`)
    }

    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }

    // STRETCH
    giveGrade(result, student) {
        if (result === "pass" || result === "Pass" || result === "PASS") {
            student.grade = student.grade + (Math.floor(Math.random() * 10));
            console.log(`${student.name}'s grade is now ${student.grade}`);
        } else if (result === "fail" || result === "Fail" || result === "FAIL") {
            student.grade = student.grade - (Math.floor(Math.random() * 10));
            console.log(`${student.name}'s grade is now ${student.grade}`);
        }
    }
}

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBackground = studentAttr.previousBackground;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects;
        // STRETCH
        this.grade = studentAttr.grade;
    }

    listsSubjects() {
        this.favSubjects.forEach(element => console.log(element))
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }

    // STRETCH
    graduate() {
        if (this.grade > 70) {
            console.log(`Congratulations ${this.name}, you have now graduated from Lambda School!!!`)
        } else {
            console.log("Oops, looks like you're not quite there yet, keep on learning!")
        }
    }
}

class ProjectManager extends Instructor {
    constructor(PMAttr) {
        super(PMAttr);
        this.gradClassName = PMAttr.gradClassName;
        this.favInstructor = PMAttr.favInstructor;
    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`)
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`)
    }
}

// Object Instantiations

const cam = new Instructor({
    name: "Cam Pope",
    age: 34,
    location: "Utah",
    gender: "Male",
    specialty: "Full-stack",
    favLanguage: "JavaScript",
    catchPhrase: "In the wild.",
})

let cory = new Student({
    name: "Cory Hale",
    age: 24,
    location: "Utah",
    gender: "Male",
    previousBackground: "Sales",
    className: "WEBPT5",
    favSubjects: ["HTML", "CSS", "JavaScript"],
    grade: 70,
})

let lizzy = new Student({
    name: "Lizzy Hale",
    age: 26,
    location: "Utah",
    gender: "Female",
    previousBackground: "Cashier",
    className: "WEBPT5",
    favSubjects: ["React", "Redux", "C++"],
    grade: 70,
})

const joe = new ProjectManager({
    name: "Joe Stanfield",
    age: 28,
    location: "South Carolina",
    gender: "Male",
    specialty: "Back-end",
    favLanguage: "React",
    catchPhrase: "Hey y'all!",
    gradClassName: "CS3",
    favInstructor: "Cam",
})

// Test Code

console.log(cam);
console.log(cory);
console.log(lizzy);
console.log(joe);

console.log(cam.catchPhrase);
console.log(lizzy.age);
console.log(cory.gender);
console.log(joe.gradClassName);

cam.speak();
cory.speak();
lizzy.speak();
joe.speak();
cam.demo("JavaScript IV");
cam.grade(cory, "JavaScript III");
joe.grade(lizzy, "React I");
cory.listsSubjects();
lizzy.listsSubjects();
cory.PRAssignment("JavaScript IV");
lizzy.PRAssignment("React I");
cory.sprintChallenge("JavaScript Fundamentals");
lizzy.sprintChallenge("React");
joe.standUp("webpt5_joe");
joe.debugsCode(cory, "JavaScript IV");
joe.debugsCode(lizzy, "React I");

// STRETCH

cam.giveGrade("Pass", cory);
cam.giveGrade("Fail", cory);
joe.giveGrade("Pass", cory);
joe.giveGrade("Fail", cory);
cory.graduate();

cam.giveGrade("Pass", lizzy);
cam.giveGrade("Fail", lizzy);
joe.giveGrade("Pass", lizzy);
joe.giveGrade("Fail", lizzy);
lizzy.graduate();