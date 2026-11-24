const themeToggle = document.getElementById('theme-toggle');
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const dark = document.body.classList.contains('dark-mode');
  themeToggle.textContent = dark ? '☀' : '☾';
  themeToggle.setAttribute('aria-label', dark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
});

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    projectCards.forEach((card) => {
      card.hidden = filter !== 'semua' && card.dataset.category !== filter;
    });
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  formStatus.textContent = `Terima kasih, ${nama}! Formulir contoh berhasil dicoba, tetapi pesan belum dikirim ke email.`;
  contactForm.reset();
});
