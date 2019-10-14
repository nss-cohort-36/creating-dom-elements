console.log("WHAT A BEAUTIFUL DAY!")

const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

let studentClass;
// console.log(studentClass)
const createStudentComponent = function (name, subject, info, score) {
    if (score >= 70) {
        studentClass = "passing"
    }
    else {
        studentClass = "failing"
    }
    return `
        <div class="student">
            <h1 class="${studentClass}">${name}</h1>
            <section class="cohort-section">${subject}</section>
            <aside>
                ${info}
            </aside>
        </div>
    `
}

let studentHTML = "";

for (let i = 0; i < students.length; i++) {
    // console.log(students[i])
    const singleStudentHTML = createStudentComponent(students[i].name, students[i].subject, students[i].info, students[i].score);
    studentHTML += singleStudentHTML;
    console.log(studentHTML);
}

const studentContainer = document.querySelector("#container");
studentContainer.innerHTML = studentHTML;


// console.log(createStudentComponent());
// debugger
// const studentContainer = document.querySelector("#container");
// const cohortSection = document.querySelector(".cohort-section");
// console.log(cohortSection);
// studentContainer.innerHTML = createStudentComponent("Rose", "being cool", "excellent!!!");

