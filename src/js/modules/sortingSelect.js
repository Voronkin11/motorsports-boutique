export const sortingSelect = () => {
    const filterOffers = document.forms.filterOffers;
    const selectBtns = filterOffers.querySelectorAll(".sorting-select-btn");
    const selectInputs = filterOffers.querySelectorAll(".sorting-select-input");

    const hideSelectList = () => {
        const selectListShow = filterOffers.querySelector(".sorting-select-list-show");

        if(selectListShow) {
            selectListShow.classList.remove("sorting-select-list-show");
        }

        window.removeEventListener("click", hideSelectList);
    }

    for (let btn of selectBtns) {
        btn.addEventListener("click", (evt) => {
            evt.preventDefault();
            
            btn.nextElementSibling.classList.add("sorting-select-list-show");
            setTimeout(() => {
                window.addEventListener("click", hideSelectList);
            }, 100);
        })
    }

    for (let input of selectInputs) {
        input.addEventListener("change", (evt) => {
            const thisInput = evt.target;
            const thisValue = thisInput.nextElementSibling.innerText;
            const thisSelect = thisInput.closest(".sorting-select");
            const thisSelectBtn = thisSelect.querySelector(".sorting-select-btn");
            
            if (thisInput.dataset.direction === "-") {
                thisInput.closest(".sorting-select").classList.add("sorting-select-down")
            } else {
                thisInput.closest(".sorting-select").classList.remove("sorting-select-down")
            }

            thisSelectBtn.innerText = thisValue;
        });
    }
}