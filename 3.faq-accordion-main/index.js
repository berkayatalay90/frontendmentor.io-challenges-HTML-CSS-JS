document.addEventListener('DOMContentLoaded', function () {

    const question = document.querySelectorAll("button");
    const plusIcon = document.getElementsByClassName("plus-icon");
    const minusIcon = document.getElementsByClassName("minus-icon");

    for (let i = 0; i < question.length; i++) {
        question[i].addEventListener("click", function () {
            var answerBox = this.nextElementSibling;
            if (answerBox.style.maxHeight) {
                answerBox.style.maxHeight = null;
            } else {
                answerBox.style.maxHeight = answerBox.scrollHeight + "px";
            }
            plusIcon[i].classList.toggle("hide");
            minusIcon[i].classList.toggle("hide");
            answerBox.classList.toggle("animation")
        })
    }
});
