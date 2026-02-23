document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");

  chrome.storage.local.get({ enabled: true }, (res) => {
    updateButton(res.enabled);
  });

  button.addEventListener("click", () => {
    chrome.storage.local.get({ enabled: true }, (res) => {
      const enabled = !res.enabled;
      chrome.storage.local.set({ enabled }, () => {
        updateButton(enabled);
      });
    });
  });

  function updateButton(enabled) {
    button.textContent = enabled
      ? "ON (Click to disable)"
      : "OFF (Click to enable)";
  }
});
