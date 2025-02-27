$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    items: 2,
    dots: false,
    autoplay: false,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        center: true
      },
      768: {
        items: 2,
        margin: 20
      }
    }
  });

  $('#year').text(new Date().getFullYear());
});

document.addEventListener("DOMContentLoaded", () => {

  let lastScrollY = window.scrollY;
  const navbar = document.getElementById("navbar");
  let isFixed = false;

  window.addEventListener("scroll", () => {

    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      navbar.classList.add("hidden");
    } else if (currentScrollY < lastScrollY && currentScrollY > 50) {

      navbar.classList.remove("hidden");

      if (!isFixed) {
        navbar.classList.add("fixed");
        isFixed = true;
      }
    } else if (currentScrollY === 0) {
      navbar.classList.remove("fixed");
      isFixed = false
    }

    lastScrollY = currentScrollY;
  })

  const moveContent = () => {
    const mediaQuery = window.matchMedia("(min-width: 768px) and (max-width: 1100px)");
    const authorName = document.querySelector(".author-name");
    const authorMeta = authorName?.nextElementSibling;
    const socialIcons = document.querySelector(".author-social");

    if (mediaQuery.matches) {
      let newDiv = document.querySelector(".author-details");
      if (!newDiv) {
        newDiv = document.createElement("div");
        newDiv.classList.add("author-details");
        const parentDiv = document.querySelector(".author-content");
        parentDiv.appendChild(newDiv);
      }
      let secNew = document.querySelector(".author-infos");
      if (!secNew) {
        secNew = document.createElement("div");
        secNew.classList.add("author-infos");
        const additionalInfo = document.querySelector(".author-details");
        additionalInfo.appendChild(secNew);
      }
      secNew.appendChild(authorName);
      secNew.appendChild(authorMeta);
      newDiv.appendChild(socialIcons);
    } else {
      const newDiv = document.querySelector(".author-details");
      if (newDiv) {
        newDiv.remove();
      }
      const secNew = document.querySelector(".author-infos");
      if (secNew) {
        secNew.remove();
      }
      const orgParent = document.querySelector(".author-content");
      orgParent.appendChild(authorName);
      orgParent.appendChild(authorMeta);
      orgParent.appendChild(socialIcons);
    }
  };

  moveContent();
  window.addEventListener("resize", moveContent);
});

