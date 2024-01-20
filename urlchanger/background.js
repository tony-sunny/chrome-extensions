chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url)
    if (url.host === "www.reddit.com") {
      url.host = "old.reddit.com"
      return { redirectUrl: url.toString() }
    }
  },
  {urls:  ["<all_urls>"]},
  ["blocking"]
);
