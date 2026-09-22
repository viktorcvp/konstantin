// Мобильное меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger && nav) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav--open');
    });

    nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--open');
        });
    });
}

// Форма: собираем данные и открываем WhatsApp с текстом
const form = document.querySelector('.form');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = new FormData(form);
        const name = data.get('name') || '';
        const phone = data.get('phone') || '';
        const message = data.get('message') || '';
        const when = data.get('when') || '';
        const address = data.get('address') || '';

        const text =
`Заявка с сайта:

Имя: ${name}
Телефон: ${phone}
Что нужно: ${message}
Когда: ${when}
Адрес: ${address || '—'}`;

        // Замени номер на реальный WhatsApp Константина
        const whatsapp = '375000000000';
        const url = `https://wa.me/${whatsapp}?text=${encodeURIComponent(text)}`;

        window.open(url, '_blank');
    });
}