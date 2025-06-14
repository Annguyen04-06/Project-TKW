// JavaScript cho trang đăng nhập/đăng ký
document.addEventListener("DOMContentLoaded", function () {
  // Chuyển đổi giữa tab đăng nhập và đăng ký
  const tabBtns = document.querySelectorAll(".tab-btn");
  const authForms = document.querySelectorAll(".auth-form");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      // Xóa class active từ tất cả các tab và form
      tabBtns.forEach((btn) => btn.classList.remove("active"));
      authForms.forEach((form) => form.classList.remove("active"));

      // Thêm class active cho tab được chọn
      this.classList.add("active");

      // Hiển thị form tương ứng
      const formId = this.getAttribute("data-tab") + "-form";
      document.getElementById(formId).classList.add("active");
    });
  });

  // Xử lý hiển thị/ẩn mật khẩu
  const passwordToggles = document.querySelectorAll(".password-toggle");
  passwordToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      const passwordInput = this.previousElementSibling;
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.classList.remove("fa-eye");
        this.classList.add("fa-eye-slash");
      } else {
        passwordInput.type = "password";
        this.classList.remove("fa-eye-slash");
        this.classList.add("fa-eye");
      }
    });
  });

  // Xử lý đăng nhập
  const loginBtn = document.getElementById("login-btn");
  if (loginBtn) {
    loginBtn.addEventListener("click", function () {
      const username = document.getElementById("login-username").value;
      const password = document.getElementById("login-password").value;

      // Kiểm tra đăng nhập
      if (!username || !password) {
        showNotification("Vui lòng nhập đầy đủ thông tin đăng nhập");
        return;
      }

      // Kiểm tra thông tin đăng nhập với thông tin đã đăng ký
      const registeredUsername = localStorage.getItem("registeredUsername");
      const registeredEmail = localStorage.getItem("registeredEmail");
      const registeredPassword = localStorage.getItem("registeredPassword");
      const registeredFullname = localStorage.getItem("registeredFullname");

      // Kiểm tra xem người dùng đã đăng ký chưa
      if (!registeredUsername || !registeredPassword) {
        showNotification("Tài khoản không tồn tại. Vui lòng đăng ký!");
        return;
      }

      // Kiểm tra tên đăng nhập/email và mật khẩu
      if (
        (username === registeredUsername || username === registeredEmail) &&
        password === registeredPassword
      ) {
        // Đăng nhập thành công
        loginBtn.innerHTML =
          '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

        setTimeout(function () {
          // Lưu thông tin đăng nhập vào localStorage
          localStorage.setItem("isLoggedIn", "true");
          localStorage.setItem("username", registeredUsername);
          localStorage.setItem("fullname", registeredFullname);

          // Hiển thị thông báo đăng nhập thành công
          showNotification(
            "Đăng nhập thành công! Chào mừng " + registeredFullname
          );

          // Chuyển hướng đến trang chính sau 1.5 giây
          setTimeout(function () {
            window.location.href = "index.html";
          }, 1500);
        }, 1500);
      } else {
        showNotification("Tên đăng nhập hoặc mật khẩu không chính xác");
      }
    });
  }

  // Xử lý đăng ký
  const registerBtn = document.getElementById("register-btn");
  if (registerBtn) {
    registerBtn.addEventListener("click", function () {
      const fullname = document.getElementById("register-fullname").value;
      const email = document.getElementById("register-email").value;
      const username = document.getElementById("register-username").value;
      const password = document.getElementById("register-password").value;
      const confirmPassword = document.getElementById(
        "register-confirm-password"
      ).value;
      const termsChecked = document.getElementById("terms").checked;

      // Reset tất cả lỗi
      const errorFields = [
        "fullname",
        "email",
        "username",
        "password",
        "confirm-password",
      ];
      errorFields.forEach((field) => {
        document
          .getElementById(
            `register-${
              field === "confirm-password" ? "confirm-password" : field
            }`
          )
          .classList.remove("input-error");
        document.getElementById(`error-${field}`).style.display = "none";
      });

      // Kiểm tra từng trường
      let hasError = false;

      if (!fullname) {
        document
          .getElementById("register-fullname")
          .classList.add("input-error");
        document.getElementById("error-fullname").style.display = "block";
        hasError = true;
      }

      if (!email || !email.includes("@")) {
        document.getElementById("register-email").classList.add("input-error");
        document.getElementById("error-email").style.display = "block";
        hasError = true;
      }

      if (!username) {
        document
          .getElementById("register-username")
          .classList.add("input-error");
        document.getElementById("error-username").style.display = "block";
        hasError = true;
      }

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
      if (!password || !passwordRegex.test(password)) {
        document
          .getElementById("register-password")
          .classList.add("input-error");
        document.getElementById("error-password").style.display = "block";
        hasError = true;
      }

      if (!confirmPassword || password !== confirmPassword) {
        document
          .getElementById("register-confirm-password")
          .classList.add("input-error");
        document.getElementById("error-confirm-password").style.display =
          "block";
        hasError = true;
      }

      if (!termsChecked) {
        showNotification("Vui lòng đồng ý với điều khoản sử dụng");
        hasError = true;
      }

      if (hasError) {
        return;
      }

      // Tiếp tục xử lý đăng ký nếu không có lỗi
      // Giả lập đăng ký thành công
      registerBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Đang xử lý...';

      setTimeout(function () {
        // Lưu thông tin đăng ký vào localStorage
        localStorage.setItem("registeredUsername", username);
        localStorage.setItem("registeredEmail", email);
        localStorage.setItem("registeredPassword", password);
        localStorage.setItem("registeredFullname", fullname);

        // Hiển thị thông báo đăng ký thành công
        showNotification("Đăng ký thành công! Vui lòng đăng nhập để tiếp tục");

        // Chuyển về tab đăng nhập sau 1.5 giây
        setTimeout(function () {
          // Chuyển về tab đăng nhập
          const loginTab = document.querySelector('.tab-btn[data-tab="login"]');
          loginTab.click();

          // Điền sẵn thông tin đăng nhập
          document.getElementById("login-username").value = username;
          document.getElementById("login-password").value = "";

          // Reset form đăng ký
          [
            "register-fullname",
            "register-email",
            "register-username",
            "register-password",
            "register-confirm-password",
          ].forEach(function (id) {
            document.getElementById(id).classList.remove("input-error");
            var icon = document.getElementById(
              "error-" + id.split("register-")[1]
            );
            if (icon) icon.style.display = "none";
          });
          document.getElementById("register-form").reset();
          registerBtn.innerHTML = "Đăng Ký";
        }, 1500);
      }, 1500);
    });
  }

  // Hàm hiển thị thông báo
  function showNotification(message) {
    const notification = document.getElementById("notification");
    const notificationMessage = document.getElementById("notification-message");

    notificationMessage.textContent = message;
    notification.classList.add("show");

    setTimeout(function () {
      notification.classList.remove("show");
    }, 3000);
  }
});
