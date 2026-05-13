const samples = [
  {
    name: "Cinematic Warm Shift",
    before: "./Auto/before/alexander-aguero-EnppVuXbcCE-unsplash.jpg",
    after: "./Auto/after/alexander-aguero-EnppVuXbcCE-unsplash.jpg",
  },
  {
    name: "Atmospheric Landscape",
    before: "./Auto/before/callum-mullin-xhf2SrtKiOA-unsplash.jpg",
    after: "./Auto/after/callum-mullin-xhf2SrtKiOA-unsplash.jpg",
  },
  {
    name: "High-Contrast Street",
    before: "./Auto/before/julien-4rayaXKwLgg-unsplash.jpg",
    after: "./Auto/after/julien-4rayaXKwLgg-unsplash.jpg",
  },
  {
    name: "Natural Portrait Lift",
    before: "./Auto/before/kellen-riggin-2SEER_RNB7w-unsplash.jpg",
    after: "./Auto/after/kellen-riggin-2SEER_RNB7w-unsplash.jpg",
  },
  {
    name: "Sunlit Color Sculpt",
    before: "./Auto/before/mehdi-sepehri-hHRXqnXZxlY-unsplash.jpg",
    after: "./Auto/after/mehdi-sepehri-hHRXqnXZxlY-unsplash.jpg",
  },
  {
    name: "Soft Editorial Tone",
    before: "./Auto/before/natalie-kinnear-xi5c1fPA8MA-unsplash.jpg",
    after: "./Auto/after/natalie-kinnear-xi5c1fPA8MA-unsplash.jpg",
  },
  {
    name: "Mountain Light Recovery",
    before: "./Auto/before/peter-steiner-1973--Fr4DhM0ge8-unsplash.jpg",
    after: "./Auto/after/peter-steiner-1973--Fr4DhM0ge8-unsplash.jpg",
  },
  {
    name: "Outdoor Color Separation",
    before: "./Auto/before/puscas-adryan-CM-Iyi1lIgE-unsplash.jpg",
    after: "./Auto/after/puscas-adryan-CM-Iyi1lIgE-unsplash.jpg",
  },
  {
    name: "Painterly Palette Control",
    before: "./Auto/before/redd-francisco-FgrKAg5jC1w-unsplash.jpg",
    after: "./Auto/after/redd-francisco-FgrKAg5jC1w-unsplash.jpg",
  },
];

const styleSamples = [
  {
    name: "Autumn",
    before: "./Style/before/Autumn.jpg",
    after: "./Style/after/Autumn.jpg",
  },
  {
    name: "Black&White",
    before: "./Style/before/Black&White.jpg",
    after: "./Style/after/Black&White.jpg",
  },
  {
    name: "Cool Black",
    before: "./Style/before/Cool Black.jpg",
    after: "./Style/after/Cool Black.jpg",
  },
  {
    name: "Cyberpunk Night Scene",
    before: "./Style/before/Cyberpunk Night Scene.jpg",
    after: "./Style/after/Cyberpunk Night Scene.jpg",
  },
  {
    name: "Dark-Tone Ink Blue",
    before: "./Style/before/Dark-Tone Ink Blue.jpg",
    after: "./Style/after/Dark-Tone Ink Blue.jpg",
  },
  {
    name: "Dreamy Pink",
    before: "./Style/before/Dreamy Pink.jpg",
    after: "./Style/after/Dreamy Pink.jpg",
  },
  {
    name: "Dreamy Pure White",
    before: "./Style/before/Dreamy Pure White.jpg",
    after: "./Style/after/Dreamy Pure White.jpg",
  },
  {
    name: "Orange Blue Cinema",
    before: "./Style/before/Orange Blue Cinema.jpg",
    after: "./Style/after/Orange Blue Cinema.jpg",
  },
  {
    name: "Vibrant HDR",
    before: "./Style/before/Vibrant HDR.jpg",
    after: "./Style/after/Vibrant HDR.jpg",
  },
  {
    name: "Vintage Film",
    before: "./Style/before/Vintage Film.jpg",
    after: "./Style/after/Vintage Film.jpg",
  },
  {
    name: "Warm Morandi Portrait",
    before: "./Style/before/Warm Morandi Portrait.jpg",
    after: "./Style/after/Warm Morandi Portrait.jpg",
  },
  {
    name: "Warm Yellow",
    before: "./Style/before/Warm Yellow.jpg",
    after: "./Style/after/Warm Yellow.jpg",
  },
];

const paramSamples = [
  {
    name: "amir-esrafili-X8Cao0DbiDg-unsplash",
    displayName: "'Warm Portrait Accent' Scene",
    before: "./Param/before/amir-esrafili-X8Cao0DbiDg-unsplash.jpg",
    after: "./Param/after/amir-esrafili-X8Cao0DbiDg-unsplash.jpg",
    params:
      "SaturationRed: +25\nSaturationOrange: +25\nSaturationYellow: -100\nSaturationGreen: -100\nSaturationAqua: -100\nSaturationBlue: -100\nSaturationPurple: -100\nSaturationMagenta: +20\nLuminanceRed: +20\nLuminanceOrange: +30\nLuminanceMagenta: +20",
  },
  {
    name: "brooke-balentine-yixZx5uXVBM-unsplash",
    displayName: "'Monochrome Lifestyle' Scene",
    before: "./Param/before/brooke-balentine-yixZx5uXVBM-unsplash.jpg",
    after: "./Param/after/brooke-balentine-yixZx5uXVBM-unsplash.jpg",
    params: "Saturation: -100",
  },
  {
    name: "denis-IJ0T1oYAD48-unsplash",
    displayName: "'Low-Key Interior' Scene",
    before: "./Param/before/denis-IJ0T1oYAD48-unsplash.jpg",
    after: "./Param/after/denis-IJ0T1oYAD48-unsplash.jpg",
    params: "Exposure: -20\nContrast: +43\nHighlights: -36\nshadows: -18",
  },
  {
    name: "gaman-alice-kyH41wi8KAM-unsplash",
    displayName: "'Cool Nature Glow' Scene",
    before: "./Param/before/gaman-alice-kyH41wi8KAM-unsplash.jpg",
    after: "./Param/after/gaman-alice-kyH41wi8KAM-unsplash.jpg",
    params: "Temperature: -5\nVibrance: +60\nSaturation: +40",
  },
  {
    name: "jonathan-ikemura-JfA3hmavQjk-unsplash",
    displayName: "'Golden Outdoor Portrait' Scene",
    before: "./Param/before/jonathan-ikemura-JfA3hmavQjk-unsplash.jpg",
    after: "./Param/after/jonathan-ikemura-JfA3hmavQjk-unsplash.jpg",
    params:
      "Exposure: +30\nContrast: +15\nHighlights: +24\nShadows: +15\nWhites: +5\nBlacks: -2\nTemperature: +5\nTint: +5\nVibrance: +15\nSaturationOrange: +4\nSaturationYellow: +11\nSaturationBlue: +20\nLuminanceOrange: +10\nLuminanceYellow: +15\nLuminanceBlue: +35",
  },
  {
    name: "lab18-BrBD_gror7s-unsplash",
    displayName: "'Sunlit Garden Walk' Scene",
    before: "./Param/before/lab18-BrBD_gror7s-unsplash.jpg",
    after: "./Param/after/lab18-BrBD_gror7s-unsplash.jpg",
    params:
      "Exposure: -15\nContrast: +20\nHighlights: +25\nShadows: +19\nWhites: +7\nBlacks: +24\nVibrance: +25\nSaturationYellow: +18\nSaturationOrange: +10\nSaturationBlue: +20\nLuminanceYellow: +15\nLuminanceGreen: +25",
  },
];

const autoGrid = document.querySelector("#auto-comparison-grid");
const styleGrid = document.querySelector("#style-comparison-grid");
const paramGrid = document.querySelector("#param-comparison-grid");
const template = document.querySelector("#comparison-template");
const paramTemplate = document.querySelector("#param-template");

function populateComparisonGrid(items, grid, badgeText) {
  items.forEach((sample) => {
    const clone = template.content.cloneNode(true);
    const meta = clone.querySelector(".comparison-meta");
    const name = clone.querySelector(".comparison-name");
    const badge = clone.querySelector(".mode-badge");
    const badgeClass = sample.badgeClass || "";

    if (sample.displayName) {
      name.textContent = sample.displayName || sample.name;
    } else {
      name.remove();
    }

    badge.textContent = badgeText;
    if (badgeClass) {
      badge.classList.add(badgeClass);
    }

    const beforeImage = clone.querySelector(".before-image");
    beforeImage.src = sample.before;
    beforeImage.alt = `${sample.name} before retouching`;

    const afterImage = clone.querySelector(".after-image");
    afterImage.src = sample.after;
    afterImage.alt = `${sample.name} after retouching`;

    grid.appendChild(clone);
  });
}

function populateParamGrid(items, grid) {
  items.forEach((sample) => {
    const clone = paramTemplate.content.cloneNode(true);
    const meta = clone.querySelector(".comparison-meta");
    const name = clone.querySelector(".comparison-name");
    const badge = clone.querySelector(".mode-badge");
    name.remove();
    badge.textContent = "Param Mode";
    badge.classList.add("param-badge");

    const beforeImage = clone.querySelector(".before-image");
    beforeImage.src = sample.before;
    beforeImage.alt = `${sample.name} before retouching`;

    const afterImage = clone.querySelector(".after-image");
    afterImage.src = sample.after;
    afterImage.alt = `${sample.name} after retouching`;

    clone.querySelector(".params-text").textContent = sample.params;
    grid.appendChild(clone);
  });
}

populateComparisonGrid(
  samples.map((sample) => ({
    ...sample,
    badgeClass: "auto-badge",
  })),
  autoGrid,
  "Auto Mode"
);
populateComparisonGrid(
  styleSamples.map((sample) => ({
    ...sample,
    displayName: `'${sample.name}' Style`,
    badgeClass: "style-badge",
  })),
  styleGrid,
  "Style Mode"
);
populateParamGrid(paramSamples, paramGrid);

function setComparePosition(compare, clientX) {
  const bounds = compare.getBoundingClientRect();
  const offset = Math.min(Math.max(clientX - bounds.left, 0), bounds.width);
  const percentage = (offset / bounds.width) * 100;
  compare.style.setProperty("--position", `${percentage}%`);
}

function mountCompare(compare) {
  compare.style.setProperty(
    "--position",
    `${compare.dataset.start ? Number(compare.dataset.start) : 50}%`
  );

  let dragging = false;

  const startDrag = (event) => {
    dragging = true;
    compare.classList.add("is-dragging");
    if (event.touches) {
      setComparePosition(compare, event.touches[0].clientX);
    } else {
      setComparePosition(compare, event.clientX);
    }
  };

  const moveDrag = (event) => {
    if (!dragging) {
      return;
    }

    if (event.touches) {
      setComparePosition(compare, event.touches[0].clientX);
    } else {
      setComparePosition(compare, event.clientX);
    }
  };

  const endDrag = () => {
    dragging = false;
    compare.classList.remove("is-dragging");
  };

  compare.addEventListener("mousedown", startDrag);
  compare.addEventListener("touchstart", startDrag, { passive: true });
  window.addEventListener("mousemove", moveDrag);
  window.addEventListener("touchmove", moveDrag, { passive: true });
  window.addEventListener("mouseup", endDrag);
  window.addEventListener("touchend", endDrag);
}

document.querySelectorAll(".compare").forEach(mountCompare);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document
  .querySelectorAll(".section-heading, .glass-card, .demo-video-card, .comparison-card, .param-card, .pipeline-card")
  .forEach((element) => observer.observe(element));
