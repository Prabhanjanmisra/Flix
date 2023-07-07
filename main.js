const tabs = document.querySelectorAll(".nav-item");
const tabItems = document.querySelectorAll(".item-content")

function removeBorder() {
    tabs.forEach(element => {
        element.classList.remove("nav-border");
    });
}

function hideTabs() {
    tabItems.forEach(element => {
        element.classList.remove("show");
    });
}

function switchTab() {
    const id = this.id;
    hideTabs();
    removeBorder();
    document.querySelector("#" + id).classList.add("nav-border");
    document.querySelector("#" + id + "-content").classList.add("show");
}

tabs.forEach(element => {
    element.addEventListener("click", switchTab);
});