
/* Finds the navigation buttons and page sections */
const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll(".content");

// makes sure it switches sections when a tab is clicked
tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
        const sectionId = tab.dataset.section;

        // Hide all the other sections
        sections.forEach(function (section) {
            section.hidden = true;
        });

        // Removes the active style from all tabs
        tabs.forEach(function (button) {
            button.classList.remove("active");
        });

        // Shows the selected section we want
        document.getElementById(sectionId).hidden = false;
        tab.classList.add("active");
    });
});
