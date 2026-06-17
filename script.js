const text = "Abdullah Khan";
const speed = 100; // typing speed in ms
const delayBetweenLoops = 1500; // wait time before restart in ms
let index = 0;

function typeEffect() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  el.textContent = ""; // Instantly clear before starting

  function typeChar() {
    if (index < text.length) {
      el.textContent += text.charAt(index);
      index++;
      setTimeout(typeChar, speed);
    } else {
      // After full text is typed, wait, then restart
      setTimeout(() => {
        index = 0;
        typeEffect(); // Start over
      }, delayBetweenLoops);
    }
  }

  typeChar();
}

window.addEventListener("load", typeEffect);document.getElementById("contactForm")?.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

  const subject = encodeURIComponent("Portfolio Contact Form");

  const body = encodeURIComponent(
    "Name: " + name + "\n\n" +
    "Email: " + email + "\n\n" +
    "Phone: " + phone + "\n\n" +
    "Message:\n" + message
  );

  window.location.href =
    "mailto:hafizkhan8606@gmail.com?subject=" +
    subject +
    "&body=" +
    body;
});

