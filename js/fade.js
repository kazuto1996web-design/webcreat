const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("is-show");
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1
});

document.querySelectorAll("[data-scroll]").forEach((el) => {
  observer.observe(el);
});