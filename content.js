chrome.storage.local.get({ enabled: true }, (res) => {
  if (!res.enabled) return;

  const script = document.createElement("script");
  script.src = chrome.runtime.getURL("inject.js");
  script.onload = () => script.remove();
  (document.head || document.documentElement).appendChild(script);
});
