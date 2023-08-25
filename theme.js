document.addEventListener("DOMContentLoaded", function () {
    const body = document.body;
    const themeToggle = document.querySelector("#theme-toggle");

    const currentTheme = localStorage.getItem("theme") || "light";
    body.classList.add(`bg-${currentTheme}`);

    themeToggle.addEventListener("click", function () {
        const newTheme = body.classList.contains("bg-light") ? "dark" : "light";
        body.classList.replace(`bg-${currentTheme}`, `bg-${newTheme}`);
        localStorage.setItem("theme", newTheme);
    });
});
