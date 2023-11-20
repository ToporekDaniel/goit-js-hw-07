import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems) {
  const pic = `<li>
    <a class="gallery__item" href="${item.original}">
        <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
    </a>
</li>`;

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
