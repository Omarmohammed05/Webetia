document.querySelector(".icon-menu").addEventListener("click", function (event) {
  event.preventDefault();
  document.body.classList.toggle("menu-open");
});

const spollerButtons = document.querySelectorAll("[data-spoller] .spollers-faq__button");

spollerButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const currentItem = button.closest("[data-spoller]");
    const content = currentItem.querySelector(".spollers-faq__text");

    const parent = currentItem.parentNode;
    const isOneSpoller = parent.hasAttribute("data-one-spoller");

    if (isOneSpoller) {
      const allItems = parent.querySelectorAll("[data-spoller]");
      allItems.forEach((item) => {
        if (item !== currentItem) {
          const otherContent = item.querySelector(".spollers-faq__text");
          item.classList.remove("active");
          otherContent.style.maxHeight = null;
        }
      });
    }

    if (currentItem.classList.contains("active")) {
      currentItem.classList.remove("active");
      content.style.maxHeight = null;
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

// Pricing plan selection logic
if (document.querySelector('.pricing__row')) {
  const pricingCards = document.querySelectorAll('.item-pricing');
  pricingCards.forEach((card) => {
    card.addEventListener('click', function(e) {
      // Prevent button click from navigating
      if (e.target.classList.contains('item-pricing__button')) {
        e.preventDefault();
      }
      pricingCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}

// Hide/show header on scroll
(function() {
  let lastScrollY = window.scrollY;
  const header = document.querySelector('.header');
  let ticking = false;

  function onScroll() {
    if (!header) return;
    if (window.scrollY > lastScrollY) {
      header.classList.add('header--hidden');
    } else {
      header.classList.remove('header--hidden');
    }
    lastScrollY = window.scrollY;
    ticking = false;
  }

  window.addEventListener('scroll', function() {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  });
})();
