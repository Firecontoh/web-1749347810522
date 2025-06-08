document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.getElementById("preloader");

    setTimeout(() => {
        preloader.style.opacity = "0";
        preloader.addEventListener("transitionend", () => {
            preloader.style.display = "none";
            document.body.style.overflow = "visible";
        }, { once: true });
    }, 1000);
    
    document.body.style.overflow = "hidden";
});