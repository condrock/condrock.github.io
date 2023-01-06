function redirectCU(e) {
    if (e.ctrlKey && e.which == 85) {
        window.location.replace("/");
        return false;
    }
}
document.onkeydown = redirectCU;