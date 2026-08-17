(() => {
  const year = document.querySelector("[data-year]");
  if (year) year.textContent = new Date().getFullYear();

  const filters = document.querySelectorAll("[data-filter]");
  const cards = document.querySelectorAll("[data-category]");
  filters.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;
      filters.forEach((item) => item.classList.toggle("active", item === button));
      cards.forEach((card) => {
        card.hidden = selected !== "Tout" && card.dataset.category !== selected;
      });
    });
  });

  const lightbox = document.querySelector("[data-lightbox]");
  if (lightbox) {
    const image = lightbox.querySelector("[data-lightbox-image]");
    const eyebrow = lightbox.querySelector("[data-lightbox-eyebrow]");
    const title = lightbox.querySelector("[data-lightbox-title]");
    const summary = lightbox.querySelector("[data-lightbox-summary]");
    const setting = lightbox.querySelector("[data-lightbox-setting]");
    const close = () => {
      lightbox.hidden = true;
      document.body.classList.remove("modal-open");
    };

    document.querySelectorAll("[data-project]").forEach((button) => {
      button.addEventListener("click", () => {
        image.src = button.dataset.image;
        image.alt = button.dataset.alt;
        eyebrow.textContent = `${button.dataset.category} · ${button.dataset.year}`;
        title.textContent = button.dataset.title;
        summary.textContent = button.dataset.summary;
        setting.textContent = button.dataset.setting;
        lightbox.hidden = false;
        document.body.classList.add("modal-open");
        lightbox.querySelector("[data-lightbox-close]").focus();
      });
    });

    lightbox.querySelector("[data-lightbox-close]").addEventListener("click", close);
    lightbox.addEventListener("click", (event) => { if (event.target === lightbox) close(); });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && !lightbox.hidden) close(); });
  }

  const form = document.querySelector("[data-mailto-form]");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const name = data.get("name") || "";
      const email = data.get("email") || "";
      const project = data.get("project") || "";
      const message = data.get("message") || "";
      const subject = encodeURIComponent(`Demande adressée à l’atelier par ${name}`);
      const body = encodeURIComponent(`Nom : ${name}\nE-mail : ${email}\nType de projet : ${project}\n\n${message}`);
      const status = document.querySelector("[data-form-status]");
      if (status) status.textContent = "Votre application de messagerie devrait s’ouvrir avec un message préparé.";
      window.location.href = `mailto:studio@elenamorgan.glass?subject=${subject}&body=${body}`;
    });
  }
})();
