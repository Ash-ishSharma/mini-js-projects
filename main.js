console.log(
  `%c Changing CSS Variables with JS 👋`,
  "font-weight: 900; font-size: 14px; color: #999;"
);

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
  input.addEventListener("mousemove", handleUpdate);
});

function handleUpdate() {
    const suffix = this.dataset.unit || ``;
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}` + suffix);
}
