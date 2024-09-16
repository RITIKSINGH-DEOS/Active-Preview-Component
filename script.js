const share = document.querySelector(".share");
const sharesection = document.querySelector(".share-section");
const endshare = document.querySelector(".endshare");

share.addEventListener("click", function () {
    sharesection.classList.toggle("hidden");
    this.classList.toggle("click");
})

endshare.addEventListener("click", function () {
    sharesection.classList.toggle("hidden");
})