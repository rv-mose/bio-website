document.querySelectorAll('.link').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
      btn.style.transform = 'scale(1)';
    }, 150);
  });
});
document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! We will contact you on WhatsApp.");
});
document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let phone = document.getElementById("phone").value;
  let theme = document.getElementById("theme").value;
  let links = document.getElementById("links").value;

  let message = `Hi Arav,%0A
I want an Instagram Bio Website 🚀%0A
%0A
Name: ${name}%0A
Theme: ${theme}%0A
Links: ${links}`;

  let whatsappNumber = "918072646780"; // ← your number (no +)

  let url = `https://wa.me/${whatsappNumber}?text=${message}`;

  window.open(url, "_blank");
});
