const header = document.querySelector("#header");
const navigation = header.querySelector("#header-inner");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry.intersectionRatio);
        navigation.classList.toggle("flyover", !entry.isIntersecting);
    });
}, { threshold: 0.8 });

observer.observe(header);