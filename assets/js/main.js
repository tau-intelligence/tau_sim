(function () {
  "use strict";

  // Current year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Detect OS
  function detectOS() {
    var ua = navigator.userAgent || "";
    var platform = (navigator.userAgentData && navigator.userAgentData.platform) ||
      navigator.platform || "";
    var p = (platform + " " + ua).toLowerCase();

    if (/win/.test(p)) return "windows";
    if (/mac|iphone|ipad|ipod/.test(p)) return "mac";
    if (/linux|x11|android/.test(p)) return "linux";
    return null;
  }

  var labels = { windows: "Windows", mac: "macOS", linux: "Linux" };
  var os = detectOS();

  // Update hero button + detected note
  var heroLabel = document.getElementById("hero-download-label");
  var detectedEl = document.getElementById("detected-os");

  if (os) {
    if (heroLabel) heroLabel.textContent = "Download for " + labels[os];
    if (detectedEl) detectedEl.textContent = labels[os];

    // Highlight matching download card
    var card = document.querySelector('.download-card[data-os="' + os + '"]');
    if (card) card.classList.add("recommended");
  } else {
    if (detectedEl) detectedEl.textContent = "an unknown platform";
  }

  // Fetch the latest release from GitHub and keep version labels + download
  // links in sync with whatever is published, so the page never goes stale.
  var REPO = "tau-intelligence/tau_sim";

  // Match a release asset to each OS download button by file extension.
  var assetMatchers = {
    windows: /\.exe$/i,
    mac: /\.dmg$/i,
    linux: /\.(deb|AppImage|tar\.gz)$/i
  };

  function updateVersionLabels(tag) {
    if (!tag) return;
    document.querySelectorAll(".js-version").forEach(function (el) {
      el.textContent = tag;
    });
  }

  function updateDownloadLinks(assets) {
    if (!assets || !assets.length) return;
    Object.keys(assetMatchers).forEach(function (osKey) {
      var match = assets.filter(function (a) {
        return assetMatchers[osKey].test(a.name);
      })[0];
      if (!match) return;
      var card = document.querySelector('.download-card[data-os="' + osKey + '"] .dl-btn');
      if (card) card.setAttribute("href", match.browser_download_url);
    });
  }

  fetch("https://api.github.com/repos/" + REPO + "/releases/latest", {
    headers: { Accept: "application/vnd.github+json" }
  })
    .then(function (res) {
      if (!res.ok) throw new Error("GitHub API " + res.status);
      return res.json();
    })
    .then(function (data) {
      updateVersionLabels(data.tag_name || data.name);
      updateDownloadLinks(data.assets);
    })
    .catch(function () {
      // Offline or rate-limited: keep the hardcoded labels and the
      // /releases/latest/download/ links, which already serve the newest build.
    });

  // Copy-to-clipboard for code block
  document.querySelectorAll(".copy-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var text = btn.getAttribute("data-copy") || "";
      var done = function () {
        var original = btn.textContent;
        btn.textContent = "Copied!";
        btn.classList.add("copied");
        setTimeout(function () {
          btn.textContent = original;
          btn.classList.remove("copied");
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done).catch(done);
      } else {
        var ta = document.createElement("textarea");
        ta.value = text;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        done();
      }
    });
  });
})();
