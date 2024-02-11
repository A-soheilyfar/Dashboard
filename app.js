const pickr = Pickr.create({
  el: ".color-picker",
  theme: "classic", // or 'monolith', or 'nano'

  // swatches: [
  //   "rgba(244, 67, 54, 1)",
  //   "rgba(233, 30, 99, 0.95)",
  //   "rgba(156, 39, 176, 0.9)",
  //   "rgba(103, 58, 183, 0.85)",
  //   "rgba(63, 81, 181, 0.8)",
  //   "rgba(33, 150, 243, 0.75)",
  //   "rgba(3, 169, 244, 0.7)",
  //   "rgba(0, 188, 212, 0.7)",
  //   "rgba(0, 150, 136, 0.75)",
  //   "rgba(76, 175, 80, 0.8)",
  //   "rgba(139, 195, 74, 0.85)",
  //   "rgba(205, 220, 57, 0.9)",
  //   "rgba(255, 235, 59, 0.95)",
  //   "rgba(255, 193, 7, 1)",
  // ],

  components: {
    // Main components
    preview: true,
    opacity: false,
    hue: true,

    // Input / output Options
    interaction: {
      hex: true,
      rgba: false,
      hsla: false,
      hsva: false,
      cmyk: false,
      input: true,
      clear: false,
      save: true,
    },
  },
});

// Btns

const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => doTheTrick(e.target))
);

function doTheTrick(theClickedOne) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === theClickedOne) {
      fast.checked = false;
    }
    if (cheap === theClickedOne) {
      good.checked = false;
    }
    if (fast === theClickedOne) {
      cheap.checked = false;
    }
  }
}
