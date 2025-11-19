const format = new Intl.NumberFormat("de-DE");

function formatNumbers() {
  const elements = document.getElementsByClassName("data");

  for (let i = 0; i < elements.length; i++) {
    const text = elements[i].textContent;

    if (text.includes("ms")) {
      const parts = text.split(" ");

      if (parts.length === 2) {
        const time = format.format(parseInt(parts[0]));

        elements[i].textContent = time + " " + "ms";
      }
    }
  }
}

window.addEventListener("load", formatNumbers);
