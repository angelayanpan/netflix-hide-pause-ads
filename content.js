function hidePauseAds() {
  document.querySelectorAll('[data-uia="pause-ad"]').forEach((el) => {
    el.style.setProperty("display", "none", "important");
  });
}

hidePauseAds();

const observer = new MutationObserver(hidePauseAds);
observer.observe(document.body, { childList: true, subtree: true });
