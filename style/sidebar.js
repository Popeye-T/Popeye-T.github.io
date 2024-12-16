document.addEventListener("DOMContentLoaded", function () {
    const categoryTitles = document.querySelectorAll(".category-title");
    categoryTitles.forEach(title => {
        title.addEventListener("click", function () {
            const links = this.nextElementSibling;
            if (links) {
                links.classList.toggle("hidden");
            }
        });
    });
});
