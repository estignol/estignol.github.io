/* Boutique DataCraft : catalogue, langues et commande par WhatsApp.
   Textes français : index.html ; autres langues : store-i18n.js. */
(function () {
  "use strict";

  /* Coordonnées : à modifier ici, un seul endroit. */
  var CONFIG = {
    email: "datacraft26@gmail.com",
    whatsapp: "237678904061",          // format international, sans « + »
    whatsappDisplay: "+237 678 90 40 61"
  };

  var LANGS = ["fr", "en", "es", "pt", "ar"];
  var DICT = window.DC_I18N || {};
  var UI = window.DC_UI || {};

  var APPS = window.DATACRAFT_APPS || [];
  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");
  var lang = "fr";
  var FR = {};

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* stockage indisponible */ } }
  };
  function $(id) { return document.getElementById(id); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function u(key) { return (UI[lang] && UI[lang][key]) || UI.fr[key]; }
  function L(obj) { return obj ? (obj[lang] || (lang !== "fr" && obj.en) || obj.fr || "") : ""; }
  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  var SVG_NS = "http://www.w3.org/2000/svg";
  function icon(d) {
    var s = document.createElementNS(SVG_NS, "svg"); s.setAttribute("viewBox", "0 0 24 24"); s.setAttribute("aria-hidden", "true");
    var p = document.createElementNS(SVG_NS, "path"); p.setAttribute("d", d); s.appendChild(p);
    return s;
  }
  var ICONS = {
    arrow: "M5 12h14m-6-6 6 6-6 6",
    chat: "M21 12a8.5 8.5 0 0 1-12.6 7.4L3 21l1.6-5.3A8.5 8.5 0 1 1 21 12Z",
    android: "M7 10h10v7a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-7ZM8 10a4 4 0 0 1 8 0",
    web: "M3 5h18v11H3zM8 20h8M12 16v4",
    plus: "M12 5v14M5 12h14"
  };
  function waLink(text) { return "https://wa.me/" + CONFIG.whatsapp + "?text=" + encodeURIComponent(text); }
  function fill(s, app) { return s.replace("{app}", app); }

  function logo(app, size) {
    var box = el("span", "app-logo");
    box.style.setProperty("--c", app.color || "#6d5cff");
    if (size) box.classList.add(size);
    if (app.icon) {
      var img = el("img"); img.src = app.icon; img.alt = ""; img.width = 64; img.height = 64; box.appendChild(img);
    } else {
      box.classList.add("mono");
      box.textContent = app.name.charAt(0);
    }
    return box;
  }

  /* ---------- Catalogue ---------- */
  function renderApps() {
    var wrap = $("apps");
    wrap.textContent = "";
    APPS.forEach(function (app) {
      var card = el("article", "app-card");
      card.style.setProperty("--c", app.color || "#6d5cff");
      var top = el("div", "app-top");
      top.appendChild(logo(app));
      var titles = el("div", "app-titles");
      titles.appendChild(el("h3", null, app.name));
      titles.appendChild(el("p", "app-tag", L(app.tagline)));
      top.appendChild(titles);
      var status = el("span", "status " + (app.status === "soon" ? "soon" : "ok"), u(app.status === "soon" ? "soon" : "available"));
      top.appendChild(status);
      card.appendChild(top);

      card.appendChild(el("p", "app-desc", L(app.desc)));
      var feats = L(app.features);
      if (feats && feats.length) {
        var ul = el("ul", "app-feats");
        feats.forEach(function (f) { ul.appendChild(el("li", null, f)); });
        card.appendChild(ul);
      }

      var meta = el("div", "app-meta");
      var plats = el("span", "plats");
      (app.platforms || []).forEach(function (p) {
        var chip = el("span", "plat");
        chip.appendChild(icon(ICONS[p] || ICONS.web));
        chip.appendChild(document.createTextNode(u(p) || p));
        plats.appendChild(chip);
      });
      meta.appendChild(plats);
      meta.appendChild(el("span", "price", L(app.price) || u("priceOnRequest")));
      card.appendChild(meta);

      var actions = el("div", "app-actions");
      var buy = el("button", "btn btn-accent");
      buy.type = "button";
      buy.appendChild(el("span", null, u(app.status === "soon" ? "demo" : "order")));
      buy.appendChild(icon(ICONS.arrow));
      buy.addEventListener("click", function () { openOrder(app.id, app.status === "soon" ? "info" : "buy"); });
      actions.appendChild(buy);
      if (app.page) {
        var more = el("a", "btn btn-ghost", u("discover")); more.href = app.page; actions.appendChild(more);
      } else {
        var demo = el("button", "btn btn-ghost", u("demo")); demo.type = "button";
        demo.addEventListener("click", function () { openOrder(app.id, "demo"); });
        actions.appendChild(demo);
      }
      card.appendChild(actions);

      var links = [];
      if (app.web) links.push({ href: app.web, text: u("openWeb"), ic: ICONS.web });
      if (app.android) links.push({ href: app.android, text: u("download"), ic: ICONS.android });
      if (links.length) {
        var sub = el("div", "app-links");
        links.forEach(function (l) {
          var a = el("a"); a.href = l.href; a.appendChild(icon(l.ic)); a.appendChild(document.createTextNode(l.text));
          sub.appendChild(a);
        });
        card.appendChild(sub);
      }
      wrap.appendChild(card);
    });

    // Carte « prochaine application »
    var next = el("article", "app-card next");
    var plus = el("span", "app-logo mono ghost"); plus.appendChild(icon(ICONS.plus));
    var nt = el("div", "app-top"); nt.appendChild(plus);
    var ntt = el("div", "app-titles"); ntt.appendChild(el("h3", null, u("nextT"))); nt.appendChild(ntt);
    next.appendChild(nt);
    next.appendChild(el("p", "app-desc", u("nextD")));
    var na = el("div", "app-actions");
    var nb = el("button", "btn btn-ghost"); nb.type = "button";
    nb.appendChild(el("span", null, u("nextCta"))); nb.appendChild(icon(ICONS.arrow));
    nb.addEventListener("click", function () { openOrder("custom", "info"); });
    na.appendChild(nb); next.appendChild(na);
    wrap.appendChild(next);
  }

  /* Vitrine animée de l'accueil : une tuile par application. */
  function renderShelf() {
    var shelf = $("shelf");
    shelf.textContent = "";
    var phone = el("div", "phone");
    var screen = el("div", "phone-screen");
    var shot = el("img"); shot.src = "assets/img/app-home.webp"; shot.alt = ""; shot.width = 1179; shot.height = 3996;
    screen.appendChild(shot); phone.appendChild(screen);
    shelf.appendChild(phone);
    APPS.forEach(function (app, i) {
      var tile = el("div", "tile t" + (i % 4));
      tile.style.setProperty("--c", app.color || "#6d5cff");
      tile.appendChild(logo(app, "sm"));
      var txt = el("span");
      txt.appendChild(el("b", null, app.name));
      txt.appendChild(el("small", null, L(app.tagline)));
      tile.appendChild(txt);
      shelf.appendChild(tile);
    });
  }

  /* ---------- Contact et pied de page ---------- */
  function contactLines() {
    return [
      { label: u("whatsapp"), text: CONFIG.whatsappDisplay, href: "https://wa.me/" + CONFIG.whatsapp, copy: "+" + CONFIG.whatsapp },
      { label: u("email"), text: CONFIG.email, href: "mailto:" + CONFIG.email, copy: CONFIG.email }
    ];
  }
  function renderContact() {
    var card = $("contact-card");
    card.textContent = "";
    contactLines().forEach(function (l) {
      var row = el("div", "c-line");
      row.appendChild(el("small", null, l.label));
      var val = el("div", "c-val");
      var a = el("a", null, l.text); a.href = l.href;
      if (l.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      var btn = el("button", "copy", u("copy")); btn.type = "button";
      btn.addEventListener("click", function () {
        var done = function () { btn.textContent = u("copied"); setTimeout(function () { btn.textContent = u("copy"); }, 1600); };
        try { navigator.clipboard.writeText(l.copy).then(done, function () {}); } catch (e) { /* copie indisponible */ }
      });
      val.appendChild(a); val.appendChild(btn);
      row.appendChild(val);
      card.appendChild(row);
    });

    var foot = $("foot-contact");
    $all("a", foot).forEach(function (a) { a.remove(); });
    contactLines().forEach(function (l) {
      var a = el("a", "ltr", l.text); a.href = l.href;
      if (l.href.indexOf("http") === 0) { a.target = "_blank"; a.rel = "noopener"; }
      foot.appendChild(a);
    });

    var fa = $("foot-apps");
    $all("a", fa).forEach(function (a) { a.remove(); });
    APPS.forEach(function (app) {
      var a = el("a", null, app.name);
      a.href = app.page || "#applications";
      fa.appendChild(a);
    });
  }

  /* ---------- Formulaire de commande ---------- */
  var dlg = $("order");
  var chosen = APPS.length ? APPS[0].id : "custom";

  function appName(id) {
    if (id === "custom") return u("custom");
    for (var i = 0; i < APPS.length; i++) if (APPS[i].id === id) return APPS[i].name;
    return id;
  }

  function renderPicker() {
    var box = $("o-apps");
    box.textContent = "";
    APPS.concat([{ id: "custom", name: u("custom"), color: "#8a93a8" }]).forEach(function (app) {
      var b = el("button", "pick"); b.type = "button";
      b.setAttribute("role", "radio");
      b.setAttribute("aria-checked", String(app.id === chosen));
      if (app.id === "custom") {
        var g = el("span", "app-logo mono ghost xs"); g.appendChild(icon(ICONS.plus)); b.appendChild(g);
      } else {
        b.appendChild(logo(app, "xs"));
      }
      b.appendChild(el("span", null, app.name));
      b.addEventListener("click", function () { chosen = app.id; renderPicker(); });
      box.appendChild(b);
    });
  }

  function wantValue() {
    var r = document.querySelector('input[name="o-want"]:checked');
    return r ? r.value : "buy";
  }

  function buildMessage() {
    var name = $("o-name").value.trim();
    var org = $("o-org").value.trim();
    var city = $("o-city").value.trim();
    var msg = $("o-msg").value.trim();
    var lines = [fill(u("wa")[wantValue()], appName(chosen)), ""];
    lines.push(u("name") + " : " + name);
    if (org) lines.push(u("org") + " : " + org);
    if (city) lines.push(u("city") + " : " + city);
    if (msg) lines.push(u("msg") + " : " + msg);
    return { name: name, text: lines.join("\n") };
  }

  function openOrder(appId, want) {
    if (appId) chosen = appId;
    var radio = document.querySelector('input[name="o-want"][value="' + (want || "buy") + '"]');
    if (radio) radio.checked = true;
    $("o-err").hidden = true;
    renderPicker();
    if (typeof dlg.showModal === "function") {
      dlg.showModal();
      setTimeout(function () { $("o-name").focus(); }, 60);
    } else {
      window.open(waLink(fill(u("wa")[want || "buy"], appName(chosen))), "_blank", "noopener");
    }
  }

  $("o-send").addEventListener("click", function () {
    var m = buildMessage();
    if (!m.name) { $("o-err").hidden = false; $("o-name").focus(); return; }
    window.open(waLink(m.text), "_blank", "noopener");
    dlg.close();
  });
  $("o-mail").addEventListener("click", function (ev) {
    ev.preventDefault();
    var m = buildMessage();
    window.location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent(fill(u("subject"), appName(chosen))) + "&body=" + encodeURIComponent(m.text);
  });
  $("o-name").addEventListener("input", function () { $("o-err").hidden = true; });
  $("order-close").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (ev) { if (ev.target === dlg) dlg.close(); });
  $all(".js-order").forEach(function (b) { b.addEventListener("click", function () { openOrder(null, "buy"); }); });

  /* ---------- Langue ---------- */
  $all("[data-i18n]").forEach(function (e) { FR[e.getAttribute("data-i18n")] = e.textContent; });
  $all("[data-i18n-html]").forEach(function (e) { FR[e.getAttribute("data-i18n-html")] = e.innerHTML; });
  var FR_TITLE = document.title;

  function applyLang(next) {
    lang = LANGS.indexOf(next) >= 0 ? next : "fr";
    var dict = lang === "fr" ? FR : (DICT[lang] || {});
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
    $all("[data-i18n]").forEach(function (e) { var k = e.getAttribute("data-i18n"); var v = dict[k] || FR[k]; if (v) e.textContent = v; });
    $all("[data-i18n-html]").forEach(function (e) { var k = e.getAttribute("data-i18n-html"); var v = dict[k] || FR[k]; if (v) e.innerHTML = v; });
    document.title = lang === "fr" ? FR_TITLE : (dict["meta.title"] || FR_TITLE);
    $("lang").value = lang;
    renderApps();
    renderShelf();
    renderContact();
    if (dlg.open) renderPicker();
    store.set("datacraft-lang", lang);
  }

  $("lang").addEventListener("change", function () { applyLang(this.value); });
  var saved = store.get("datacraft-lang") || store.get("immo-site-lang");
  var nav0 = (navigator.language || "fr").slice(0, 2);
  applyLang(saved || (LANGS.indexOf(nav0) >= 0 ? nav0 : "fr"));

  /* ---------- En-tête et menu ---------- */
  var header = $("top");
  function onScroll() { header.classList.toggle("scrolled", (window.scrollY || 0) > 20); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  var nav = $("nav");
  var menuBtn = $("menu-btn");
  menuBtn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", String(open));
  });
  $all("a", nav).forEach(function (a) {
    a.addEventListener("click", function () { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); });
  });

  $("year").textContent = String(new Date().getFullYear());
})();
