const navBar = document.querySelector('nav');
const btnScrollToTop = document.querySelector('.scrollToTop ');

window.addEventListener("scroll", () => {
    const getValueScrollX = this.scrollY;
    if (getValueScrollX > 68) {
        navBar.style.position = "fixed"
    }
    else {
        navBar.style.position = "";
    }

    if (getValueScrollX >= 400) {
        btnScrollToTop.style.display = "block"
    }
    else {
        btnScrollToTop.style.display = "none";
    }
});

btnScrollToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
