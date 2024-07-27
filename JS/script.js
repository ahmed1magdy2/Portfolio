const dropdownBtn = document.getElementById("btn");
const dropdownMenu = document.getElementById("dropdown");
const toggleArrow = document.getElementById("arrow");

const toggleDropdown = () => {
    dropdownMenu.classList.toggle("show");
    toggleArrow.classList.toggle("arrow");
};

dropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleDropdown();
});

document.documentElement.addEventListener("click", () => {
    if (dropdownMenu.classList.contains("show")) {
        toggleDropdown();
    }
});
document.querySelectorAll('a').forEach(link => {
    link.setAttribute('target', '_blank');
});
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && (e.key === 's' || e.key === 'u' || e.key === 'p')) {
        e.preventDefault();
    }
});

