BOGDAN LINK HUB
================

Файли:
- index.html — сторінка
- styles.css — дизайн і палітра
- script.js — усі посилання в одному місці
- assets/ — фото і зображення програм

ЩО ЗМІНИТИ ПЕРЕД ПУБЛІКАЦІЄЮ
1. Відкрий script.js.
2. У блоці LINKS заміни knee / foot / neck / back на точні URL відповідних лендінгів або checkout-сторінок.
3. consultation вже веде на https://bogdancourse.pro/consultation/
4. Telegram / Instagram / Facebook підставлені з поточної WayForPay-сторінки.

ПАЛІТРА
Усі основні кольори сторінки знаходяться на самому початку styles.css у :root.

РЕКОМЕНДОВАНИЙ URL
Наприклад:
- https://bohdan.pro/
- https://bohdan.pro/start/
- https://bohdan.pro/link/

АНАЛІТИКА
Кожен клік по продукту кидає подію dataLayer:
  event: bio_link_click
  link_name: consultation / knee / foot / neck / back / telegram / instagram / facebook
Якщо на сторінці підключиш GTM — можна легко створити GA4/Meta events на цю подію.
