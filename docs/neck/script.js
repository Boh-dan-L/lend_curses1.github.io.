const stickyCta = document.getElementById('stickyCta');
const pricingButtons = document.querySelectorAll('.scroll-to-pricing');
const pricingSection = document.getElementById('pricing');
const faqItems = document.querySelectorAll('.faq-item');
const revealItems = document.querySelectorAll('.reveal');

const timerHours = document.getElementById('timerHours');
const timerMinutes = document.getElementById('timerMinutes');
const timerSeconds = document.getElementById('timerSeconds');
const COUNTDOWN_STORAGE_KEY = 'neckCourseOfferCountdownEnd';
const COUNTDOWN_DURATION_MS = ((2 * 60) + 15) * 60 * 1000;

pricingButtons.forEach((button) => {
  button.addEventListener('click', () => {
    pricingSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

window.addEventListener('scroll', () => {
  if (!stickyCta) return;
  stickyCta.classList.toggle('visible', window.scrollY > 800);
});

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  button?.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach((faq) => faq.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

function getCountdownEndTime() {
  const now = Date.now();
  const savedEndTime = Number(window.localStorage.getItem(COUNTDOWN_STORAGE_KEY));

  if (!savedEndTime || Number.isNaN(savedEndTime) || savedEndTime <= now) {
    const nextEndTime = now + COUNTDOWN_DURATION_MS;
    window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(nextEndTime));
    return nextEndTime;
  }

  return savedEndTime;
}

let countdownEndTime = getCountdownEndTime();

function updateCountdown() {
  if (!timerHours || !timerMinutes || !timerSeconds) return;

  const now = Date.now();
  let diff = countdownEndTime - now;

  if (diff <= 0) {
    countdownEndTime = now + COUNTDOWN_DURATION_MS;
    window.localStorage.setItem(COUNTDOWN_STORAGE_KEY, String(countdownEndTime));
    diff = countdownEndTime - now;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timerHours.textContent = String(hours).padStart(2, '0');
  timerMinutes.textContent = String(minutes).padStart(2, '0');
  timerSeconds.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
window.setInterval(updateCountdown, 1000);
