// Builds the catalog and the color section from data.js, and runs the lightbox.

// The full lineup photo, shown whole
const lineup = document.getElementById("lineup-img");
lineup.src = LINEUP_PHOTO;
lineup.alt = "The Pickle 3D Printing product lineup";

// Product cards: name, detail, price. Click to see the lineup photo up close.
const grid = document.getElementById("print-grid");
PRINTS.forEach((print) => {
  const card = document.createElement("button");
  card.className = "card card-no-photo";
  card.innerHTML = `
    <div class="card-text">
      <h3>${print.title}</h3>
      <p>${print.detail}</p>
      <span class="price">${print.price}</span>
    </div>
  `;
  card.addEventListener("click", () => openLightbox(print));
  grid.appendChild(card);
});

// The full palette photo, shown whole, plus the color names
const palette = document.getElementById("palette-img");
palette.src = PALETTE_PHOTO;
palette.alt = "All 17 filament colors with their Bambu Lab codes";
const colorList = document.getElementById("color-list");
COLORS.forEach((color) => {
  const item = document.createElement("div");
  item.className = "color-item";
  item.innerHTML = `<strong>${color.name}</strong><span>${color.code}</span>`;
  colorList.appendChild(item);
});

// Order email appears wherever data-order-email is present
document.querySelectorAll("[data-order-email]").forEach((el) => {
  el.textContent = ORDER_EMAIL;
  if (el.tagName === "A") el.href = "mailto:" + ORDER_EMAIL;
});

// --- Lightbox (shows the whole lineup photo) ---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDetail = document.getElementById("lightbox-detail");
const lightboxPrice = document.getElementById("lightbox-price");

function openLightbox(print) {
  lightboxImg.src = LINEUP_PHOTO;
  lightboxImg.alt = "The Pickle 3D Printing product lineup";
  lightboxTitle.textContent = print.title;
  lightboxDetail.textContent = print.detail;
  lightboxPrice.textContent = print.price;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
}

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox || e.target.closest(".lightbox-close")) closeLightbox();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});
