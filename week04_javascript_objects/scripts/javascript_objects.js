// Course object
let aCourse = {
    code: "WDD131",
    title: "Dynamic Web Fundamentals",
    credits: 2,
    sections: [
        { section: "001", enrolled: 95, instructor: "Roberto Diaz Rodriguez" },
        { section: "002", enrolled: 80, instructor: "Sarah Gobble" }
    ]
};

// Set course header
function setCourseInformation(course) {
    document.querySelector("#courseName").textContent =
        `${course.code} – ${course.title}`;
}

// Render course sections table
function renderSections(course) {
    const tbody = document.querySelector("#sections tbody");
    let html = "";

    for (const section of course.sections) {
        html += `
      <tr>
        <td>${section.section}</td>
        <td>${section.enrolled}</td>
        <td>${section.instructor}</td>
      </tr>
    `;
    }

    tbody.innerHTML = html;
}

// Call functions
setCourseInformation(aCourse);
renderSections(aCourse);


// Display last modified date in footer
document.getElementById('lastModified').textContent =
    `Last Modified: ${document.lastModified}`;
