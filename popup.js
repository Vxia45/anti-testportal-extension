document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("toggle");
  const status = document.getElementById("status");

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
    button.textContent = enabled ? "✅ ON — Click to Disable" : "❌ OFF — Click to Enable";
    button.className = enabled ? "on" : "off";
    status.textContent = enabled
      ? "Bypass is active on all pages."
      : "Bypass is disabled.";
  }
});