const addTocartbutton = document.querySelectorAll(".our-services-section .our-services-containers .button");

console.log(addTocartbutton);

addTocartbutton.forEach(function (item) {
    item.addEventListener("click", function (event) {
        const targetElem = event.target;

        const elemTitle = document.querySelectorAll(".our-services-section .our-services-containers .button");
        if (targetElem.classList.contains("is-active")){
            targetElem.classList.remove("is-active");
            elemTitle.innerHTML = "add to cart";
        }   else {
            targetElem.classList.contains("is-active");
            elemTitle.innerHTML = "alredy in cart";
        }
    });
});
