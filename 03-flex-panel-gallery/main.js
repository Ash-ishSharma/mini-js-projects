console.log(
  `%c Flex Panels 💪`,
  "font-weight: 900; font-size: 14px; color: #999;"
);

function toggleOpen() {
  this.classList.toggle("open");
}
function toggleActive(e) {
  // Some browsers says it's flex and some says it's flex-grow 
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}
const panels = document.querySelectorAll(".panel");
panels.forEach((panel) => {
  panel.addEventListener("click", toggleOpen);
  panel.addEventListener("transitionend", toggleActive);
});
