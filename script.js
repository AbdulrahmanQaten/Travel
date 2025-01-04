document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: false,
  });

  const elements = document.querySelectorAll(".animate-on-scroll");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });

  // تحميل الوضع المفضل من localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    document.getElementById("moon").style.display = "none";
    document.getElementById("sun").style.display = "block";
  } else {
    document.body.classList.remove("dark-mode");
    document.getElementById("moon").style.display = "block";
    document.getElementById("sun").style.display = "none";
  }

  // Highlight العنصر النشط في Navbar
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });

  // التركيز التلقائي على الصفحة الرئيسية عند التحميل
  const homeLink = document.querySelector('a[href="#hero"]');
  if (homeLink) {
    homeLink.classList.add("active");
  }
});

function toggleColorOptions() {
  const colorOptions = document.getElementById("colorOptions");
  colorOptions.style.display =
    colorOptions.style.display === "block" ? "none" : "block";
}

function changeColor(color) {
  document.querySelectorAll("a, h1, h2, h3, .container").forEach((element) => {
    element.style.color = color;
  });
  document.querySelectorAll("button, a.bg-blue-600").forEach((element) => {
    element.style.backgroundColor = color;
    element.style.color = "#ffffff";
  });
  document.getElementById("brand").style.color = color;
  document.getElementById("colorOptions").style.display = "none";
}

function toggleTheme() {
  const body = document.body;
  const moon = document.getElementById("moon");
  const sun = document.getElementById("sun");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    moon.style.display = "block";
    sun.style.display = "none";
    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark-mode");
    moon.style.display = "none";
    sun.style.display = "block";
    localStorage.setItem("theme", "dark");
  }
}

// فتح وإغلاق الـ sidebar
function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
}
const currentYear = new Date().getFullYear();
// ضع السنة في العنصر المناسب
document.getElementById("year").textContent = currentYear;

document.addEventListener('DOMContentLoaded', function () {
    // ... (الكود الحالي)

    // إخفاء أداة اختيار الألوان عند النقر خارجها
    document.addEventListener('click', function (event) {
        const colorPickerIcon = document.querySelector('.color-picker-icon');
        const colorOptions = document.getElementById('colorOptions');

        // التحقق مما إذا كان النقر خارج الأيقونة وخارج أداة اختيار الألوان
        if (!colorPickerIcon.contains(event.target) && !colorOptions.contains(event.target)) {
            colorOptions.style.display = 'none';
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
      var typed = new Typed('#typed-text', {
        strings: [
          "أهلاً بك في موقعنا!",
          "نقدم لكم أفضل الحلول التقنية.",
          "تصميم حديث واحترافي.",
          "تواصل معنا لمعرفة المزيد."
        ],
        typeSpeed: 50, // سرعة الكتابة
        backSpeed: 30, // سرعة المسح
        loop: true, // التكرار
        showCursor: true, // إظهار المؤشر
        cursorChar: "|", // شكل المؤشر
      });
    });
