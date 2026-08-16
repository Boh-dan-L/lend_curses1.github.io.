/*
  УСІ ПОСИЛАННЯ МІНЯЮТЬСЯ ТУТ.
  Після того як визначиш точні URL для курсів — просто заміни значення нижче.
*/
const LINKS = {
  consultation: 'https://bogdancourse.pro/consultation/',
  knee: 'https://bogdan-rehab.wayforpay.link/',
  foot: 'https://bogdan-rehab.wayforpay.link/',
  neck: 'https://bogdan-rehab.wayforpay.link/',
  back: 'https://bogdan-rehab.wayforpay.link/',
  telegram: 'https://t.me/Bogdanrehab',
  instagram: 'https://www.instagram.com/bogdan.rehab',
  facebook: 'https://www.facebook.com/Bogdan.rehab'
};

document.querySelectorAll('[data-link]').forEach((el) => {
  const key = el.dataset.link;
  if (LINKS[key]) el.href = LINKS[key];
});

document.getElementById('year').textContent = new Date().getFullYear();

// Простий dataLayer event для GTM, якщо dataLayer буде підключено на домені.
document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-link]');
  if (!link) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'bio_link_click',
    link_name: link.dataset.link,
    link_url: link.href
  });
});
