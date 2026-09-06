const faqItems = document.querySelectorAll('.faq-wrap__con__list__item');

faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
        if (item.open) {
            faqItems.forEach((otherItem) => {
                if (otherItem !== item) {
                    otherItem.open = false;
                }
            });
        }
    });
});