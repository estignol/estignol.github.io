/* Site de présentation d'Immo : langues, animations et documents. */
(function () {
  "use strict";

  /* Coordonnées et liens : à modifier ici, un seul endroit. */
  var CONFIG = {
    email: "datacraf26@gmail.com",
    whatsapp: "237678904061",          // format international, sans « + »
    whatsappDisplay: "+237 678 90 40 61",
    DOWNLOAD_URL: "",                  // lien direct de l'APK Android ; vide = section Contact
    APP_URL: "app/"                    // version Web complète d'Immo
  };

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");
  var I18N = window.IMMO_I18N || {};
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var lang = "fr";

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }
  };

  function t(key) { return (I18N[lang] && I18N[lang][key]) || (I18N.fr && I18N.fr[key]) || ""; }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  /* ---------- Langue ---------- */
  function applyLang(next) {
    lang = I18N[next] ? next : "fr";
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $all("[data-i18n]").forEach(function (el) { var v = t(el.getAttribute("data-i18n")); if (v) el.textContent = v; });
    $all("[data-i18n-html]").forEach(function (el) { var v = t(el.getAttribute("data-i18n-html")); if (v) el.innerHTML = v; });
    document.title = t("meta.title") || document.title;
    document.getElementById("lang").value = lang;
    wireLinks();
    renderContact();
    store.set("immo-site-lang", lang);
  }

  function wireLinks() {
    $all(".js-app").forEach(function (a) { a.href = CONFIG.APP_URL; });
    $all(".js-download").forEach(function (a) {
      if (CONFIG.DOWNLOAD_URL) { a.href = CONFIG.DOWNLOAD_URL; a.rel = "noopener"; } else { a.href = "#contact"; }
    });
    $all(".js-demo").forEach(function (a) {
      a.href = "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(t("demo.message"));
      a.target = "_blank"; a.rel = "noopener";
    });
  }

  function renderContact() {
    var card = document.getElementById("contact-card");
    var foot = document.getElementById("foot-contact");
    var lines = [
      { label: t("contact.whatsapp"), text: CONFIG.whatsappDisplay, href: "https://wa.me/" + CONFIG.whatsapp, copy: "+" + CONFIG.whatsapp },
      { label: t("contact.email"), text: CONFIG.email, href: "mailto:" + CONFIG.email, copy: CONFIG.email }
    ];
    card.textContent = "";
    lines.forEach(function (l) {
      var row = document.createElement("div"); row.className = "c-line";
      var small = document.createElement("small"); small.textContent = l.label;
      var val = document.createElement("div"); val.className = "c-val";
      var a = document.createElement("a"); a.href = l.href; a.textContent = l.text;
      if (l.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      var btn = document.createElement("button"); btn.type = "button"; btn.className = "copy"; btn.textContent = t("contact.copy");
      btn.addEventListener("click", function () {
        var done = function () { btn.textContent = t("contact.copied"); setTimeout(function () { btn.textContent = t("contact.copy"); }, 1600); };
        try { navigator.clipboard.writeText(l.copy).then(done, function () {}); } catch (e) { /* copie indisponible */ }
      });
      val.appendChild(a); val.appendChild(btn);
      row.appendChild(small); row.appendChild(val);
      card.appendChild(row);
    });
    // Pied de page
    $all("a", foot).forEach(function (a) { a.remove(); });
    lines.forEach(function (l) {
      var a = document.createElement("a"); a.href = l.href; a.textContent = l.text; a.className = "ltr";
      if (l.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      foot.appendChild(a);
    });
  }

  /* ---------- En-tête, progression, menu ---------- */
  var header = document.getElementById("top");
  var progress = document.getElementById("progress");
  function onScroll() {
    var y = window.scrollY || 0;
    header.classList.toggle("scrolled", y > 20);
    var h = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.setProperty("--p", h > 0 ? Math.min(1, y / h).toFixed(4) : 0);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var nav = document.getElementById("nav");
  var menuBtn = document.getElementById("menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $all("a", nav).forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); });
  });

  /* ---------- Apparition au défilement, compteurs, étapes ---------- */
  function countUp(el) {
    var end = parseInt(el.getAttribute("data-count"), 10) || 0;
    if (end === 0) { el.textContent = String(end); return; }
    var start = null, dur = 1400;
    function step(ts) {
      if (!start) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      el.textContent = String(Math.round(end * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(step);
    }
    el.textContent = "0";
    requestAnimationFrame(step);
  }

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        el.classList.add("in");
        $all("[data-count]", el).forEach(countUp);
        if (el.id === "steps") el.style.setProperty("--steps", 1);
        if (el.classList.contains("shield")) el.classList.add("in");
        io.unobserve(el);
      });
    }, { threshold: 0.14, rootMargin: "0px 0px -6% 0px" });
    $all("[data-reveal], #steps, .shield").forEach(function (el) { io.observe(el); });
  } else {
    $all("[data-reveal]").forEach(function (el) { el.classList.add("in"); });
    document.getElementById("steps").style.setProperty("--steps", 1);
  }
  // Filet de sécurité : tout visible après 4 s (capture d'écran, navigateur ancien).
  setTimeout(function () { $all("[data-reveal]").forEach(function (el) { el.classList.add("in"); }); }, 4000);

  /* ---------- Scène d'accueil : relief au mouvement de la souris ---------- */
  var stage = document.getElementById("stage");
  if (stage && !reduced && window.matchMedia("(pointer: fine)").matches) {
    var raf = 0;
    stage.parentElement.addEventListener("mousemove", function (ev) {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        var r = stage.getBoundingClientRect();
        var x = (ev.clientX - (r.left + r.width / 2)) / r.width;
        var y = (ev.clientY - (r.top + r.height / 2)) / r.height;
        stage.style.setProperty("--mx", (x * 2).toFixed(3));
        stage.style.setProperty("--my", (y * 2).toFixed(3));
        var inner = stage.firstElementChild;
        inner.style.setProperty("--ry", (-5 + x * 8).toFixed(2) + "deg");
        inner.style.setProperty("--rx", (3 - y * 6).toFixed(2) + "deg");
      });
    });
  }

  /* ---------- Cartes : halo qui suit la souris ---------- */
  $all(".card").forEach(function (card) {
    card.addEventListener("pointermove", function (ev) {
      var r = card.getBoundingClientRect();
      card.style.setProperty("--sx", ((ev.clientX - r.left) / r.width * 100).toFixed(1) + "%");
      card.style.setProperty("--sy", ((ev.clientY - r.top) / r.height * 100).toFixed(1) + "%");
    });
  });

  /* ---------- Défilement des moyens de paiement (boucle continue) ---------- */
  var track = document.querySelector(".marquee-track");
  if (track) {
    $all("li", track).forEach(function (li) {
      var c = li.cloneNode(true); c.setAttribute("aria-hidden", "true"); track.appendChild(c);
    });
  }

  /* ---------- Documents : pile animée, onglets, défilement automatique ---------- */
  var cards = $all(".doc-card");
  var tabs = $all(".doc-tab");
  var tabList = document.querySelector(".doc-tabs");
  var current = 0, timer = 0, DUR = 6000;
  function layout() {
    var n = cards.length;
    cards.forEach(function (card, i) {
      var pos = (i - current + n) % n;            // 0 = devant
      var rtl = root.dir === "rtl" ? -1 : 1;
      var s = card.style;
      card.classList.toggle("active", pos === 0);
      if (pos === 0) { s.setProperty("--tx", "0px"); s.setProperty("--ty", "0px"); s.setProperty("--rot", "0deg"); s.setProperty("--sc", "1"); s.setProperty("--op", "1"); s.setProperty("--z", "10"); }
      else {
        var k = Math.min(pos, 3);
        s.setProperty("--tx", (rtl * k * 34) + "px");
        s.setProperty("--ty", (-k * 14) + "px");
        s.setProperty("--rot", (rtl * k * 3.5) + "deg");
        s.setProperty("--sc", String(1 - k * 0.06));
        s.setProperty("--op", pos > 3 ? "0" : String(1 - k * 0.18));
        s.setProperty("--z", String(10 - pos));
      }
      card.tabIndex = pos === 0 ? 0 : -1;
    });
    tabs.forEach(function (tab, i) { tab.setAttribute("aria-selected", i === current ? "true" : "false"); });
  }
  function show(i, user) {
    current = (i + cards.length) % cards.length;
    layout();
    // Relance l'animation de la barre de l'onglet actif.
    var bar = tabs[current].querySelector(".bar");
    bar.style.animation = "none"; void bar.offsetWidth; bar.style.animation = "";
    schedule(user);
  }
  function schedule() {
    clearTimeout(timer);

    timer = setTimeout(function () { show(current + 1); }, DUR);
  }
  tabs.forEach(function (tab, i) { tab.addEventListener("click", function () { show(i, true); }); });
  var docStack = document.getElementById("doc-stack");
  [docStack, tabList].forEach(function (el) {
    el.addEventListener("mouseenter", function () { clearTimeout(timer); tabList.classList.add("paused"); });
    el.addEventListener("mouseleave", function () { tabList.classList.remove("paused"); schedule(); });
  });

  /* Visionneuse (agrandissement) */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lb-img");
  cards.forEach(function (card, i) {
    card.addEventListener("click", function () {
      if (i !== current) { show(i, true); return; }
      var img = card.querySelector("img");
      lbImg.src = img.src; lbImg.alt = img.alt;
      if (typeof lb.showModal === "function") lb.showModal(); else window.open(img.src, "_blank");
    });
  });
  document.getElementById("lb-close").addEventListener("click", function () { lb.close(); });
  lb.addEventListener("click", function (ev) { if (ev.target === lb) lb.close(); });

  /* ---------- Démarrage ---------- */
  document.getElementById("year").textContent = String(new Date().getFullYear());
  var saved = store.get("immo-site-lang");
  var browser = (navigator.language || "fr").slice(0, 2);
  applyLang(saved || (I18N[browser] ? browser : "fr"));
  document.getElementById("lang").addEventListener("change", function (e) { applyLang(e.target.value); layout(); });
  layout();
  schedule();
})();
