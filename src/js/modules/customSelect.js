export const customSelect = () => {
    const filterOffers = document.forms.filterOffers;
    const selectBtns = filterOffers.querySelectorAll(".custom-select-btn");
    const selectInputs = filterOffers.querySelectorAll(".custom-select-input");

    const hideSelectList = () => {
        const selectListShow = filterOffers.querySelector(".custom-select-list-show");

        if(selectListShow) {
            selectListShow.classList.remove("custom-select-list-show");
        }

        window.removeEventListener("click", hideSelectList);
    }

    for (let btn of selectBtns) {
        btn.addEventListener("click", (evt) => {
            evt.preventDefault();
            const selectListShow = filterOffers.querySelector(".custom-select-list-show");
            hideSelectList(selectListShow);
            btn.nextElementSibling.classList.add("custom-select-list-show");
            
            setTimeout(() => {
                window.addEventListener("click", hideSelectList);
            }, 100);
        })
    }

    for (let input of selectInputs) {
        input.addEventListener("change", (evt) => {
            const thisInput = evt.target;
            const thisValue = thisInput.value;
            const thisSelect = thisInput.closest(".custom-select");
            const thisSelectBtn = thisSelect.querySelector(".custom-select-btn");
            
            if (thisValue !== "0") {
                thisSelectBtn.innerText = thisValue;
                thisSelectBtn.classList.add("custom-select-btn-selected");
            } else {
                thisSelectBtn.innerText = thisSelectBtn.dataset.defaultText;
                thisSelectBtn.classList.remove("custom-select-btn-selected");
            }
        });
    }
}