document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const navToggle = document.getElementById("nav-toggle");
  
  // Xử lý khi click vào các liên kết trong menu
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Đánh dấu liên kết đang active
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      
      // Đóng menu khi click vào liên kết (trên mobile)
      if (window.innerWidth <= 768) {
        navToggle.checked = false;
      }
    });
  });
  
  // Đóng menu khi click ra ngoài
  document.addEventListener("click", function(event) {
    const navContainer = document.querySelector(".nav-container");
    const isClickInside = navContainer.contains(event.target);
    
    if (!isClickInside && navToggle.checked && window.innerWidth <= 768) {
      navToggle.checked = false;
    }
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
  // Kiểm tra đăng nhập khi trang web được tải
  // Kiểm tra xem người dùng đã đăng nhập chưa
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const username = localStorage.getItem("username");
  const fullname = localStorage.getItem("fullname");
  const loginBtn = document.querySelector(".login-btn");

  if (isLoggedIn === "true" && loginBtn) {
    // Thay đổi nút đăng nhập thành hiển thị thông tin người dùng
    loginBtn.innerHTML = `
      <div class="user-info">
        <div class="user-avatar">
          <img src="images/trangchu/logo.png" alt="Avatar" class="avatar-img">
        </div>
        <span>${username || fullname}</span>
        <i class="fas fa-caret-down"></i>
      </div>
    `;
    loginBtn.href = "#";
    loginBtn.classList.add("logged-in");

    // Thêm sự kiện click để hiển thị dropdown
    loginBtn.addEventListener("click", function (e) {
      e.preventDefault();
      // Hiển thị menu đăng xuất khi click vào tên người dùng
      if (document.querySelector(".user-dropdown")) {
        document.querySelector(".user-dropdown").remove();
      } else {
        const dropdown = document.createElement("div");
        dropdown.className = "user-dropdown";
        dropdown.innerHTML = `
          <a href="#" class="dropdown-item"><i class="fas fa-user-circle"></i> Tài khoản</a>
          <a href="#" id="logout-btn" class="dropdown-item"><i class="fas fa-sign-out-alt"></i> Đăng xuất</a>
        `;
        loginBtn.parentNode.appendChild(dropdown);

        // Xử lý đăng xuất
        document
          .getElementById("logout-btn")
          .addEventListener("click", function (e) {
            e.preventDefault();
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("username");
            localStorage.removeItem("fullname");
            localStorage.removeItem("registeredUsername");
            localStorage.removeItem("registeredEmail");
            localStorage.removeItem("registeredPassword");
            localStorage.removeItem("registeredFullname");
            window.location.href = "login.html";
          });
      }
    });
  } else if (!isLoggedIn && window.location.pathname !== "/login.html") {
    // Nếu chưa đăng nhập và không ở trang login, thêm sự kiện cho nút đăng nhập
    if (loginBtn) {
      loginBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "login.html";
      });
    }
  }

  // Phần code hiện tại của bạn
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // Phần code còn lại của bạn...
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
