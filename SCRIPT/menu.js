const checkbox = document.getElementById('touch');

function changeSymbol() {
    const arrow = document.getElementById("arrow");
    if (checkbox.checked) {
        arrow.setAttribute("data-after", "↑");
    } else {
        arrow.setAttribute("data-after", "↓");
    }
}