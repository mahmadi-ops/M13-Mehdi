/* ------------------------------------------------------------------ *
 * Print fallback for interactive PreFigure diagrams.
 *
 * Annotated PreFigure diagrams are embedded as an interactive "diagcess"
 * element whose SVG is injected by JavaScript at runtime, so it does not
 * render in the worksheet print / print-preview view. For each such diagram
 * we insert a static <img> (the non-diagcess SVG that PreFigure also
 * generates), hidden on screen and shown only in print (see custom.css).
 * ------------------------------------------------------------------ */
(function () {
  function addPrintFallbacks() {
    var els = document.querySelectorAll("div.ChemAccess-element[data-src]");
    els.forEach(function (el) {
      if (el.dataset.printFallbackAdded) return;
      var src = el.getAttribute("data-src");
      if (!src) return;
      var staticSrc = src.replace(/-diagcess\.svg$/, ".svg");
      if (staticSrc === src) return; // not a diagcess source; leave alone
      var img = document.createElement("img");
      img.src = staticSrc;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.className = "prefigure-print-fallback";
      el.parentNode.insertBefore(img, el.nextSibling);
      el.dataset.printFallbackAdded = "1";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addPrintFallbacks);
  } else {
    addPrintFallbacks();
  }
})();
