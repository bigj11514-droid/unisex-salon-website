document.addEventListener("DOMContentLoaded", () => {
  const productLists = document.querySelectorAll("[data-product-list]");
  productLists.forEach((list) => {
    const type = list.dataset.productList;
    const items =
      type === "featured"
        ? products.slice(0, 4)
        : products.filter((product) => product.side === type);
    list.innerHTML = items.map(productCard).join("");
  });
  document.querySelectorAll("[data-price-table]").forEach((table) => {
    const side = table.dataset.priceTable;
    table.innerHTML = serviceGroups[side]
      .flatMap((group) => group.options.map((option) => [group.name, option]))
      .map(
        ([group, option], index) =>
          `<article><span>0${index + 1}</span><div><small>${group}</small><h3>${option[0]}</h3><p>${option[1]}</p></div><strong>${option[2]}</strong></article>`,
      )
      .join("");
  });
  document.querySelectorAll("[data-service-menu]").forEach((menu) => {
    const side = menu.dataset.serviceMenu;
    menu.innerHTML = serviceGroups[side]
      .map(
        (group, groupIndex) =>
          `<article class="service-group"><div class="service-group-heading"><span>0${groupIndex + 1}</span><div><h3>${group.name}</h3><p>${group.intro}</p></div></div><div class="service-options">${group.options.map((option) => `<button class="service-option" type="button" data-service-choice="${option[0]}"><span><strong>${option[0]}</strong><small>${option[1]}</small></span><b>${option[2]}</b><i aria-hidden="true">↗</i></button>`).join("")}</div></article>`,
      )
      .join("");
  });
  document.querySelectorAll("[data-package-list]").forEach((list) => {
    list.innerHTML = packages[list.dataset.packageList]
      .map(
        (item, index) =>
          `<article class="package-card" data-package-service="${item.name}"><div class="package-image"><img src="${item.image}" alt="${item.name} service"><span>0${index + 1}</span></div><div class="package-copy"><div class="package-title"><div><h3>${item.name}</h3><p>${item.summary}</p></div><strong>${item.price}</strong></div><p class="package-details">${item.details}</p><div class="package-products"><b>Products used</b><ul>${item.products.map((product) => `<li>${product}</li>`).join("")}</ul></div><span class="package-duration">${item.duration}</span><a href="#booking" class="package-link" data-book-package="${item.name}">Book this ritual ↗</a></div></article>`,
      )
      .join("");
  });
  document
    .querySelectorAll(".product-card")
    .forEach((card) =>
      card.addEventListener("click", () => openProduct(card.dataset.product)),
    );
  document.querySelectorAll(".menu-toggle").forEach((toggle) =>
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      document.querySelector(".main-nav").classList.toggle("open");
      toggle.setAttribute("aria-expanded", toggle.classList.contains("open"));
    }),
  );
  document.querySelectorAll("form#bookingForm").forEach((form) =>
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.elements.name.value.trim();
      const message = form.querySelector(".form-note");
      const service = form.elements.service.value;
      message.textContent = `Thanks ${name || "there"} — your ${service || "booking"} request is in. We’ll call to confirm your chair.`;
      form.reset();
    }),
  );
  document
    .querySelectorAll("[data-download]")
    .forEach((button) =>
      button.addEventListener("click", () =>
        downloadPricing(button.dataset.download),
      ),
    );
  document
    .querySelectorAll(".reveal")
    .forEach((el) =>
      requestAnimationFrame(() => el.classList.add("is-visible")),
    );
  document.querySelectorAll("[data-side-switch]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href =
        button.dataset.sideSwitch === "women" ? "women.html" : "men.html";
    });
  });
  document.querySelectorAll("[data-service-choice]").forEach((choice) => {
    choice.addEventListener("click", () => {
      const form = document.querySelector("#bookingForm");
      if (!form) return;
      const service = form.elements.service;
      const option = [...service.options].find(
        (item) => item.textContent === choice.dataset.serviceChoice,
      );
      if (option) service.value = option.value;
      form.classList.add("booking-focus");
      document
        .querySelectorAll(".service-option.is-selected")
        .forEach((item) => item.classList.remove("is-selected"));
      choice.classList.add("is-selected");
      window.setTimeout(() => form.classList.remove("booking-focus"), 1400);
    });
  });
  document.querySelectorAll("[data-book-package]").forEach((button) => {
    button.addEventListener("click", () => {
      const form = document.querySelector("#bookingForm");
      if (!form) return;
      form.classList.add("booking-focus");
      window.setTimeout(() => form.classList.remove("booking-focus"), 1400);
    });
  });
});
function productCard(product) {
  return `<article class="product-card" data-product="${product.id}" tabindex="0" role="button"><div class="product-image"><img src="${product.image}" alt="${product.name} product"><span class="product-plus">+</span></div><div class="product-meta"><div><span>${product.category}</span><h3>${product.name}</h3></div><strong>${product.price}</strong></div></article>`;
}
function openProduct(id) {
  const product = products.find((item) => item.id === id);
  if (!product) return;
  const reviews = JSON.parse(localStorage.getItem(`reviews-${id}`) || "[]");
  const modal = document.createElement("div");
  modal.className = "modal-backdrop";
  modal.innerHTML = `<section class="product-modal" role="dialog" aria-modal="true" aria-label="${product.name} details"><button class="modal-close" aria-label="Close product details">×</button><div class="modal-image"><img src="${product.image}" alt="${product.name} product"></div><div class="modal-content"><p class="eyebrow">${product.category}</p><h2>${product.name}</h2><strong class="modal-price">${product.price}</strong><p>${product.description}</p><div class="feature-list">${product.features.map((feature) => `<span>✦ ${feature}</span>`).join("")}</div><div class="ritual-note"><small>HOW TO USE</small><p>${product.needs}</p></div><div class="modal-actions"><a class="button button-dark" href="#booking" data-modal-book>Book this ritual <span>↗</span></a><button class="share-button" data-share>Share <span>↗</span></button></div><div class="review-section"><div class="review-header"><h3>Studio notes <span>(${reviews.length})</span></h3><button data-review-toggle>Leave a review</button></div><div class="reviews">${reviews.length ? reviews.map((review) => `<p><strong>${"★".repeat(review.rating)}</strong> ${review.text}</p>`).join("") : '<p class="empty-review">Be the first to leave a note.</p>'}</div><form class="review-form" hidden><input name="review" placeholder="Your experience..." required><select name="rating"><option value="5">5 stars</option><option value="4">4 stars</option><option value="3">3 stars</option></select><button class="button button-dark" type="submit">Post note</button></form></div></div></section>`;
  document.body.appendChild(modal);
  document.body.classList.add("modal-open");
  const close = () => {
    modal.remove();
    document.body.classList.remove("modal-open");
  };
  modal.querySelector(".modal-close").addEventListener("click", close);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });
  modal.querySelector("[data-modal-book]").addEventListener("click", close);
  modal
    .querySelector("[data-review-toggle]")
    .addEventListener(
      "click",
      () => (modal.querySelector(".review-form").hidden = false),
    );
  modal.querySelector(".review-form").addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    reviews.push({
      text: form.review.value,
      rating: Number(form.rating.value),
    });
    localStorage.setItem(`reviews-${id}`, JSON.stringify(reviews));
    close();
    openProduct(id);
  });
  modal.querySelector("[data-share]").addEventListener("click", async () => {
    const shareData = {
      title: product.name,
      text: `${product.name} at NOIR & NERVE — ${product.price}`,
      url: location.href,
    };
    if (navigator.share) await navigator.share(shareData);
    else {
      await navigator.clipboard.writeText(location.href);
      modal.querySelector("[data-share]").innerHTML = "Link copied ✓";
    }
  });
}
function downloadPricing(side) {
  const rows = serviceGroups[side]
    .flatMap((group) =>
      group.options.map(
        (option) =>
          `${group.name} / ${option[0]} | ${option[1]} | ${option[2]}`,
      ),
    )
    .join("\n");
  const blob = new Blob(
    [
      `NOIR & NERVE — ${side === "women" ? "HER ENERGY" : "HIS EDGE"} PRICE LIST\n\n${rows}\n\n18 Mercer Lane, City Centre | ${side === "men" ? "+233 55 501 8490" : "+1 555 018 490"}`,
    ],
    { type: "text/plain" },
  );
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `noir-and-nerve-${side}-price-list.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
}
