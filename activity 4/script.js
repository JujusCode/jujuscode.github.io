const jsonURL = "https://jujuscode.github.io/activity%204/courses.json";

fetch(jsonURL)
  .then((response) => response.json())
  .then((data) => {
    const coursesList = document.getElementById("course-list");
    let courses = data.courses;

    const displayCourses = (courses) => {
      coursesList.innerHTML = "";
      courses.forEach((course) => {
        const courseItem = document.createElement("li");
        courseItem.innerHTML = `
          <li><strong>Course Code:</strong> ${course.code}</li>
          <li><strong>Year Level:</strong> ${course.year_level}</li>
          <li><strong>Semester:</strong> ${course.sem}</li>
          <li><strong>Description:</strong> ${course.description}</li>
          <li><strong>Credit Hours:</strong> ${course.credit}</li>
          <hr>
        `;
        coursesList.appendChild(courseItem);
      });
    };

    displayCourses(courses);

    document.getElementById("searchBtn").addEventListener("click", () => {
      const searchTerm = document
        .getElementById("search-course")
        .value.toLowerCase();
      const filteredCourses = courses.filter((course) => {
        return (
          course.code.toLowerCase().includes(searchTerm) ||
          course.description.toLowerCase().includes(searchTerm) ||
          course.year_level.toString().includes(searchTerm) ||
          course.sem.toLowerCase().includes(searchTerm) ||
          course.credit.toString().includes(searchTerm)
        );
      });
      displayCourses(filteredCourses);
    });
  })

  .catch((error) => console.error("Error loading courses data:", error));
