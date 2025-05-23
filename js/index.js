document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const sections = document.querySelectorAll(".section-title");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  ); // Thêm threshold để kiểm soát khi nào phần tử được coi là đã xuất hiện

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Header scroll effect
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".modern-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
//hieu ung xuat hien
document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  const sections = document.querySelectorAll(".section-title");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1 }
  ); // Thêm threshold để kiểm soát khi nào phần tử được coi là đã xuất hiện

  sections.forEach((section) => {
    observer.observe(section);
  });
});

// Header scroll effect
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".modern-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// ===== KHỞI TẠO ANIMATE ON SCROLL (AOS) =====
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo thư viện AOS với các tùy chọn
  AOS.init({
    duration: 800, // Thời gian diễn ra hiệu ứng (ms)
    easing: "ease", // Kiểu chuyển động
    once: false, // Hiệu ứng xuất hiện mỗi khi cuộn qua
    offset: 120, // Khoảng cách kích hoạt hiệu ứng
  });
});

