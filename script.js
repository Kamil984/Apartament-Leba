document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

window.addEventListener("load", () => {
  const hero = document.querySelector(".hero-text");
  if (hero) {
    setTimeout(() => {
      hero.classList.add("animate-side");
    }, 1125);
  }
});

window.addEventListener("load", () => {
  const intro = document.getElementById("intro");
  const heroText = document.querySelector(".hero-text");

  setTimeout(() => {
    intro.classList.add("hide");
    heroText.classList.add("animate-side");
  }, 1100);
});
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imgElement.src;
  lightbox.style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

const images = [
  "img/1.png",
  "img/2.png",
  "img/3.png",
  "img/4.png",
  "img/5.png",
  "img/6.png",
  "img/7.png",
  "img/8.png",
  "img/9.png",
  "img/10.png",
  "img/11.png",
  "img/12.png",
  "img/13.png",
  "img/14.png",
  "img/15.png",
  "img/16.png",
  "img/17.png",
  "img/18.png",
  "img/19.png",
  "img/20.png",
  "img/21.png",
  "img/22.png",
  "img/23.png",
  "img/24.png"

  
];
let currentIndex = 0;

function openLightbox(index) {
  currentIndex = index;
  document.getElementById("lightbox-img").src = images[index];
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeSlide(step) {
  currentIndex += step;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex];
}

document.addEventListener("DOMContentLoaded", () => {
  const calendarBtn = document.querySelector('a[href="#calendar-section"]');
  const calendarBox = document.getElementById("calendar-box");

  if (calendarBtn && calendarBox) {
    calendarBtn.addEventListener("click", (e) => {
      e.preventDefault();
      calendarBox.style.display = calendarBox.style.display === "none" ? "block" : "none";
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("calendar-box");
  const thankYouMsg = document.getElementById("thank-you-msg");

  // Obsługa formularza (lokalnie – nie działa przy _next)
  if (form && thankYouMsg) {
    form.addEventListener("submit", () => {
      setTimeout(() => {
        thankYouMsg.style.display = "block";
        form.reset();
        setTimeout(() => {
          thankYouMsg.style.display = "none";
        }, 5000); // Zniknie po 5 sekundach
      }, 1000); // Pokaż po 1 sekundzie
    });
  }

  // Obsługa po przekierowaniu z formsubmit (_next)
  if (window.location.href.includes("#home") && thankYouMsg) {
    thankYouMsg.style.display = "block";
    setTimeout(() => {
      thankYouMsg.style.display = "none";
    }, 5000); // Zniknie po 5 sekundach
  }
});
