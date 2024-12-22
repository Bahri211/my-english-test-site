// زر الهامبرغر والقائمة
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', function() {
    // إظهار/إخفاء القائمة في الشاشات الصغيرة
    if (mainNav.style.display === 'block') {
      mainNav.style.display = 'none';
    } else {
      mainNav.style.display = 'block';
    }
  });
}

// نموذج التواصل
const contactForm = document.getElementById("contactForm");

if(contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // التحقق المبسط من المدخلات
    if(!name || !email || !message) {
      alert("يرجى تعبئة جميع الحقول قبل الإرسال.");
      return;
    }

    // في مشروع فعلي يمكنك استخدام fetch أو AJAX لإرسال البيانات للسيرفر
    // هنا سنكتفي برسالة تنبيه:
    alert("تم إرسال رسالتك بنجاح! سنعاود التواصل معك قريبًا.");

    // تفريغ الحقول
    contactForm.reset();
  });
}
