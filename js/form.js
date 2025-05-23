// Form Validation và Animation cho phần liên hệ
document.addEventListener("DOMContentLoaded", function () {
  // Lấy các phần tử form
  const contactForm = document.getElementById("contactForm");
  const submitBtn = document.getElementById("submitBtn");

  // Xử lý sự kiện submit form
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Thêm hiệu ứng loading
      submitBtn.classList.add("btn-loading");
      submitBtn.innerHTML = "";

      // Giả lập gửi form (thay thế bằng AJAX thực tế)
      setTimeout(function () {
        submitBtn.classList.remove("btn-loading");
        submitBtn.innerHTML =
          '<i class="fas fa-check-circle"></i> Đã Gửi Thành Công!';
        submitBtn.classList.add("success");

        // Hiển thị thông báo thành công với icon
        showNotification("Tin nhắn của bạn đã được gửi thành công!", "success");

        // Reset form
        contactForm.reset();

        // Trở lại trạng thái ban đầu sau 3 giây
        setTimeout(function () {
          submitBtn.innerHTML =
            '<i class="fas fa-paper-plane"></i> Gửi Tin Nhắn';
          submitBtn.classList.remove("success");
        }, 3000);
      }, 2000);
    });
  }

  // Hàm hiển thị thông báo
  function showNotification(message, type) {
    // Tạo phần tử thông báo
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;

    // Tạo icon
    const icon = document.createElement("div");
    icon.className = "notification-icon";
    if (type === "success") {
      icon.innerHTML = '<i class="fas fa-check-circle"></i>';
    } else if (type === "error") {
      icon.innerHTML = '<i class="fas fa-exclamation-circle"></i>';
    } else if (type === "info") {
      icon.innerHTML = '<i class="fas fa-info-circle"></i>';
    } else if (type === "warning") {
      icon.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
    }

    // Tạo nội dung
    const content = document.createElement("div");
    content.className = "notification-content";
    content.textContent = message;

    // Tạo nút đóng
    const closeBtn = document.createElement("button");
    closeBtn.className = "notification-close";
    closeBtn.innerHTML = "&times;";
    closeBtn.addEventListener("click", function () {
      document.body.removeChild(notification);
    });

    // Thêm các phần tử vào thông báo
    notification.appendChild(icon);
    notification.appendChild(content);
    notification.appendChild(closeBtn);

    // Thêm thông báo vào body
    document.body.appendChild(notification);

    // Hiệu ứng hiển thị
    setTimeout(() => {
      notification.classList.add("show");
    }, 10);

    // Tự động đóng sau 5 giây
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          document.body.removeChild(notification);
        }
      }, 300);
    }, 5000);
  }
});
