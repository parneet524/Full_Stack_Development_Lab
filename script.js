document.addEventListener("DOMContentLoaded", () => {

    const departments = [
        {
            name: "Management",
            employees: [
                { firstName: "Grace", lastName: "Allen" },
                { firstName: "Robert", lastName: "Hill" }
            ]
        },
        {
            name: "Technology",
            employees: [
                { firstName: "Emily", lastName: "Chen" },
                { firstName: "David", lastName: "Singh" }
            ]
        }
    ];

    const main = document.getElementById("employee-directory");

    departments.forEach(department => {
        const section = document.createElement("section");

        const heading = document.createElement("h2");
        heading.textContent = department.name;

        const list = document.createElement("ul");

        department.employees.forEach(employee => {
            const listItem = document.createElement("li");
            listItem.textContent = `${employee.firstName} ${employee.lastName}`;
            list.appendChild(listItem);
        });

        section.appendChild(heading);
        section.appendChild(list);
        main.appendChild(section);
    });

    const year = new Date().getFullYear();
    document.getElementById("copyright").textContent =
        `Copyright Pixell River Financial ${year}`;
});
