import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems) {
  const pic = `
    <div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>
    </div>`;
  gallery.insertAdjacentHTML("beforeend", pic);
}

const galleryItem = document.querySelectorAll(".gallery__item");

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  const imgLink = event.target.closest(".gallery__image");
  if (!imgLink) return;

  const bigImgSrc = imgLink.getAttribute("data-source");

  const lightbox = basicLightbox.create(`
    <img src="${bigImgSrc}" alt="${event.target.alt}" />`);
  lightbox.show();

  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      lightbox.close();
    }
  });
});
