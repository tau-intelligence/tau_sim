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
