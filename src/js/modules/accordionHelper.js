export const accordionHelper = () => {
    const accordion = document.getElementById("accordionQuestions");

    accordion.addEventListener("click", (evt) => {
        const targetElement = evt.target;
        const itemShow = document.querySelector(".show");

        itemShow ? itemShow.classList.remove("show") : false;
        
        if (!targetElement.classList.contains("collapsed")) {
            targetElement.closest(".accordion-item").classList.add("show");
        }
    })
}