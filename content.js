// Netflix Hide Pause Ads - Content Script

function hidePauseAds() {
  document.querySelectorAll('[data-uia="pause-ad"]').forEach((el) => {
    el.style.setProperty("display", "none", "important");
  });
}

// Run immediately in case the element is already in the DOM
hidePauseAds();

// Watch for dynamically injected pause ads (Netflix is a SPA)
const observer = new MutationObserver(hidePauseAds);
observer.observe(document.body, { childList: true, subtree: true });
