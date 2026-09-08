// Плавное появление элементов при прокрутке

const elements = document.querySelectorAll(
    '.object-card, .service, .about, .contact'
);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    },
    {
        threshold: 0.15
    }
);

elements.forEach((element) => {
    observer.observe(element);
});


// Автоматический год в футере

const year = new Date().getFullYear();
const footer = document.querySelector('footer');

if (footer) {
    const paragraphs = footer.querySelectorAll('p');

    paragraphs.forEach((p) => {
        if (p.textContent.includes('2026')) {
            p.textContent = `© ${year}`;
        }
    });
}
