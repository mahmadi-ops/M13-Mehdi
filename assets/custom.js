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

  /* ---------------------------------------------------------------- *
   * Render interactive PreFigure diagrams that arrive inside a knowl.
   *
   * Each page calls diagcess.Base.init() once, inline at the end of the
   * body, so diagcess only ever sees the ChemAccess elements present at
   * that moment. A figure revealed by clicking an <xref> link is fetched
   * afterwards by knowl.js, so its diagram never gets an SVG injected and
   * the reader is shown an empty box. Watch for these late arrivals and
   * initialize them.
   *
   * init() has no way to be scoped to a subtree: it reprocesses every
   * ChemAccess element in the document, re-rewriting the transformations
   * of SVGs that are already drawn. So for the duration of the call we
   * take the class off the elements diagcess has already claimed, leaving
   * only the new ones visible to it.
   * ---------------------------------------------------------------- */
  function initLateDiagrams() {
    if (typeof diagcess === "undefined" || !diagcess.Base || !diagcess.Base.molMap) return;

    var claimed = [];
    Object.keys(diagcess.Base.molMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el && el.classList.contains("ChemAccess-element")) {
        el.classList.remove("ChemAccess-element");
        claimed.push(el);
      }
    });

    var found = !!document.querySelector("div.ChemAccess-element");
    try {
      if (found) diagcess.Base.init();
    } finally {
      claimed.forEach(function (el) {
        el.classList.add("ChemAccess-element");
      });
    }
    if (found) addPrintFallbacks();
  }

  var pending = false;
  function scheduleLateDiagrams() {
    if (pending) return;
    pending = true;
    setTimeout(function () {
      pending = false;
      initLateDiagrams();
    }, 50);
  }

  function watchForLateDiagrams() {
    if (!window.MutationObserver) return;
    // diagcess appends a <div class="svg"> inside each element it draws, and
    // addPrintFallbacks appends an <img>; neither matches the selector below,
    // so handling a mutation cannot trigger another round.
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i++) {
        var added = records[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var node = added[j];
          if (node.nodeType !== 1) continue;
          if (
            (node.matches && node.matches("div.ChemAccess-element")) ||
            (node.querySelector && node.querySelector("div.ChemAccess-element"))
          ) {
            scheduleLateDiagrams();
            return;
          }
        }
      }
    }).observe(document.body, { childList: true, subtree: true });
  }

  function start() {
    addPrintFallbacks();
    watchForLateDiagrams();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
