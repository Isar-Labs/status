const format = new Intl.NumberFormat("de-DE");

function formatText(element) {
  const text = element.textContent;

  if (text.includes("ms") || !text.includes(".")) {
    const responseTime = text.replace("ms", "").trim();

    const time = parseInt(responseTime, 10);

    if (!isNaN(time)) {
      element.textContent = format.format(time) + " " + "ms";
    }
  }
}

function formatNumbers() {
  const dataElements = document.getElementsByClassName("data");

  for (let i = 0; i < dataElements.length; i++) {
    formatText(dataElements[i]);
  }

  const elements = document.getElementsByTagName("dd");

  for (let i = 0; i < elements.length; i++) {
    formatText(elements[i]);
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", formatNumbers);
} else {
  formatNumbers();
}
setTimeout(formatNumbers, 500);
setTimeout(formatNumbers, 1500);
