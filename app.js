// Create an array of student objects
const students = [
    {
        name: "Sarah Johnson",
        major: "Digital Media",
        gpa: 3.8
    },
    {
        name: "Michael Smith",
        major: "Computer Science",
        gpa: 3.5
    },
    {
        name: "Emily Davis",
        major: "Graphic Design",
        gpa: 3.9
    },
    {
        name: "James Wilson",
        major: "Business",
        gpa: 3.6
    },
    {
        name: "Ashley Brown",
        major: "Digital Media",
        gpa: 4.0
    }
];

// Select the HTML element
const studentList = document.getElementById("studentList");

// Use map() to create HTML for each student
const studentHTML = students.map(function(student, index) {

    return `
        <div class="student-card">
            <h3>${index + 1}. ${student.name}</h3>
            <p>Major: ${student.major}</p>
            <p>GPA: ${student.gpa}</p>
        </div>
    `;

});

// Display the mapped array on the webpage
studentList.innerHTML = studentHTML.join("");