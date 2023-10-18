const header = document.querySelector("#header");
const navigation = header.querySelector("#header-top");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        navigation.classList.toggle("overlay", !entry.isIntersecting);
    });
}, { threshold: 0.4 });

observer.observe(header);

window.addEventListener("click", event => {
    /** @type {?HTMLInputElement} */
    const checkbox = document.querySelector("input#trigger-input");
    if (!event.target.closest("#header-top") && checkbox.checked) {
        checkbox.checked = !checkbox.checked;
    }
});