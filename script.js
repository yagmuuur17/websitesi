document.addEventListener("DOMContentLoaded", function () {
    const modeToggle = document.getElementById("modeToggle");
    const body = document.body;

    // LocalStorage'dan tema kontrolü
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
        modeToggle.textContent = "☀️ Light Mode";
    } else {
        modeToggle.textContent = "🌙 Dark Mode";
    }

    // Butona tıklanınca mod değiştir
    modeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("theme", "dark");
            modeToggle.textContent = "☀️ Light Mode";
        } else {
            localStorage.setItem("theme", "light");
            modeToggle.textContent = "🌙 Dark Mode";
        }
    });
});