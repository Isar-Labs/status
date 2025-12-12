const format = new Intl.NumberFormat("de-DE");

function formatText(element) {
  const text = element.textContent;

  if (text.includes("ms") && !text.includes(".")) {
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

function replaceIncidentTexts() {
  const elements = document.querySelectorAll("section article h4");

  elements.forEach((element) => {
    if (element.textContent.indexOf("is down") !== -1) {
      element.textContent = element.textContent.replace(
        "is down",
        "ist ausgefallen"
      );
    } else if (element.textContent.indexOf("has degraded performance") !== -1) {
      element.textContent = element.textContent.replace(
        "has degraded performance",
        "hat eine verminderte Leistung"
      );
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", formatNumbers);
  document.addEventListener("DOMContentLoaded", replaceIncidentTexts);
} else {
  formatNumbers();
  replaceIncidentTexts();
}
setTimeout(formatNumbers, 500);
setTimeout(replaceIncidentTexts, 500);
