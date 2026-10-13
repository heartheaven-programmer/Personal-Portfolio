/* =========================================================
   HEART HEAVEN PORTFOLIO JAVASCRIPT
========================================================= */

/* =========================================================
   MOBILE MENU
========================================================= */
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menuToggle?.addEventListener("click", () => {
    const isOpen = nav?.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    const icon = menuToggle.querySelector("i");
    if (isOpen) {
        icon?.classList.remove("fa-bars");
        icon?.classList.add("fa-xmark");
    } else {
        icon?.classList.remove("fa-xmark");
        icon?.classList.add("fa-bars");
    }
});

/* =========================================================
   CLOSE MOBILE MENU WHEN NAV LINK IS CLICKED
========================================================= */
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        nav?.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
        const icon = menuToggle?.querySelector("i");
        icon?.classList.remove("fa-xmark");
        icon?.classList.add("fa-bars");
    });
});

/* =========================================================
   DARK MODE
========================================================= */
const themeToggle = document.querySelector("#themeToggle");
themeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    themeToggle.textContent = isDark ? "☀" : "☾";
    localStorage.setItem("heartHeavenTheme", isDark ? "dark" : "light");
});

// Load saved theme
const savedTheme = localStorage.getItem("heartHeavenTheme");
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    if (themeToggle) themeToggle.textContent = "☀";
}

/* =========================================================
   SOFT COLOR MODE
========================================================= */
const colorToggle = document.querySelector("#colorToggle");
colorToggle?.addEventListener("click", () => {
    document.body.classList.toggle("soft-mode");
    const isSoft = document.body.classList.contains("soft-mode");
    localStorage.setItem("heartHeavenColor", isSoft ? "soft" : "normal");
});

// Load saved color mode
const savedColor = localStorage.getItem("heartHeavenColor");
if (savedColor === "soft") {
    document.body.classList.add("soft-mode");
}

/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [...document.querySelectorAll(".nav-links a")];

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(link => {
                    const target = link.getAttribute("href");
                    link.classList.toggle("active", target === `#${entry.target.id}`);
                });
            }
        });
    },
    { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
);

sections.forEach(section => observer.observe(section));

/* =========================================================
   CURRENT YEAR
========================================================= */
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

/* =========================================================
   SMOOTH SCROLLING
========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", event => {
        const targetID = link.getAttribute("href");
        if (!targetID || targetID === "#") return;
        const target = document.querySelector(targetID);
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

/* =========================================================
   PROFILE IMAGE ERROR HANDLING
========================================================= */
const profileImage = document.querySelector(".cat-frame img");
profileImage?.addEventListener("error", () => {
    console.warn("cat.webp could not be loaded. Make sure it is inside the images folder.");
});

/* =========================================================
   PROJECT LINK HANDLING
========================================================= */
document.querySelectorAll(".project-button").forEach(link => {
    link.addEventListener("click", event => {
        const href = link.getAttribute("href");
        if (!href || href === "#") event.preventDefault();
    });
});

/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (!navbar) return;
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/* =========================================================
   LOCAL PROJECT / ACTIVITY COUNT
========================================================= */
const projectCount = document.querySelector("#projectCount");
if (projectCount) projectCount.textContent = "3 Activities";

/* =========================================================
   HIDE BIOGRAPHY TOGGLE
========================================================= */
const toggleBioBtn = document.getElementById('toggleBio');
const bioText = document.querySelector('.bio-text');

if (toggleBioBtn && bioText) {
    toggleBioBtn.addEventListener('click', () => {
        const paragraphs = bioText.querySelectorAll('p');
        if (toggleBioBtn.textContent === 'Hide Biography') {
            paragraphs.forEach(p => p.style.display = 'none');
            toggleBioBtn.textContent = 'Show Biography';
        } else {
            paragraphs.forEach(p => p.style.display = 'block');
            toggleBioBtn.textContent = 'Hide Biography';
        }
    });
}

/* =========================================================
   READ MORE TOGGLE
========================================================= */
const readMoreBtn = document.getElementById('readMoreBtn');
const reflectionText = document.querySelector('.reflection-text');

if (readMoreBtn && reflectionText) {
    const reflectionParagraphs = reflectionText.querySelectorAll('p');
    
    // Hide the last two paragraphs initially
    if (reflectionParagraphs.length > 2) {
        reflectionParagraphs[1].style.display = 'none';
        reflectionParagraphs[2].style.display = 'none';
    }

    readMoreBtn.addEventListener('click', () => {
        if (readMoreBtn.textContent === 'Read More') {
            reflectionParagraphs.forEach(p => p.style.display = 'block');
            readMoreBtn.textContent = 'Read Less';
        } else {
            if (reflectionParagraphs.length > 2) {
                reflectionParagraphs[1].style.display = 'none';
                reflectionParagraphs[2].style.display = 'none';
            }
            readMoreBtn.textContent = 'Read More';
        }
    });
}

/* =========================================================
   SAY HI BUTTON FUNCTION
========================================================= */
const sayHiBtn = document.getElementById('sayHiBtn');
const hiModal = document.getElementById('hiModal');
const closeModal = document.getElementById('closeModal');
const closeModalBtn = document.getElementById('closeModalBtn');
const hiMessage = document.getElementById('hiMessage');

// A list of cute, randomized greetings
const greetings = [
    "Hiii! 🐾 Thanks for visiting!",
    "Meow! 🐱 You're pawsome!",
    "Hello there! ✨",
    "Sending you good vibes! 💗",
    "Hi! 👋 Feel free to look around!",
    "Welcome to my little corner! 🌸"
];

if (sayHiBtn && hiModal) {
    // Open modal and pick a random greeting
    sayHiBtn.addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * greetings.length);
        hiMessage.textContent = greetings[randomIndex];
        hiModal.classList.add('show');
    });

    // Close modal functions
    const closeModalFunc = () => {
        hiModal.classList.remove('show');
    };

    closeModal.addEventListener('click', closeModalFunc);
    closeModalBtn.addEventListener('click', closeModalFunc);

    // Close when clicking outside the card
    hiModal.addEventListener('click', (e) => {
        if (e.target === hiModal) {
            closeModalFunc();
        }
    });
}

/* =========================================================
   FINAL CONSOLE MESSAGE
========================================================= */
console.log("Heart Heaven Portfolio loaded successfully 💗");
