function goDashboard(event){
  event.preventDefault();
  window.location.href = "dashboard.html";
}

async function bubbleSortVisual() {
  const barsContainer = document.getElementById("bars");
  const bars = barsContainer.children;

  let values = [];
  for (let i = 0; i < bars.length; i++) {
    values.push(parseInt(bars[i].textContent));
  }

  for (let i = 0; i < values.length - 1; i++) {
    for (let j = 0; j < values.length - i - 1; j++) {
      bars[j].style.opacity = "0.6";
      bars[j + 1].style.opacity = "0.6";

      await sleep(500);

      if (values[j] > values[j + 1]) {
        let temp = values[j];
        values[j] = values[j + 1];
        values[j + 1] = temp;

        bars[j].style.height = values[j] * 10 + "px";
        bars[j].textContent = values[j];

        bars[j + 1].style.height = values[j + 1] * 10 + "px";
        bars[j + 1].textContent = values[j + 1];
      }

      bars[j].style.opacity = "1";
      bars[j + 1].style.opacity = "1";
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}