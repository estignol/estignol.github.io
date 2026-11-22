/* Boutique DataCraft : catalogue, langue (FR/EN) et commande par WhatsApp.
   Les textes français sont ceux de index.html ; seuls les textes anglais sont ici. */
(function () {
  "use strict";

  /* Coordonnées : à modifier ici, un seul endroit. */
  var CONFIG = {
    email: "datacraft26@gmail.com",
    whatsapp: "237678904061",          // format international, sans « + »
    whatsappDisplay: "+237 678 90 40 61"
  };

  var EN = {
    "nav.apps": "Apps", "nav.order": "Order", "nav.why": "Why DataCraft", "nav.faq": "FAQ", "nav.contact": "Contact",
    "cta.order": "Order", "cta.browse": "Browse the apps", "cta.whatsapp": "Order on WhatsApp", "cta.start": "Start my order",
    "hero.eyebrow": "Professional apps",
    "hero.title": "Apps that <span class=\"grad\">work for you</span>.",
    "hero.lead": "DataCraft builds apps for phone and computer: easy to pick up, in your language, usable even without a network. Pick yours, order on WhatsApp, pay with Mobile Money.",
    "hero.p1": "Android and computer", "hero.p2": "Mobile Money accepted", "hero.p3": "Direct support",
    "apps.eyebrow": "Our apps", "apps.title": "Pick the tool you need", "apps.lead": "Every app runs on phone and computer, with a single account.",
    "how.eyebrow": "Order", "how.title": "Your app in 3 steps",
    "s1.t": "Choose", "s1.d": "Select the app and tell us about your business. A demo is available before any purchase.",
    "s2.t": "Order on WhatsApp", "s2.d": "Your request is sent in one tap, already written. We reply with pricing and terms.",
    "s3.t": "Pay and get started", "s3.d": "Pay by Mobile Money or bank transfer. Your access is activated and we help you get set up.",
    "why.eyebrow": "Why DataCraft", "why.title": "Built for the field, not just the office",
    "why.lead": "Our apps are built with the people who use them every day: less typing, fewer oversights, more time for your business.",
    "w1.t": "Phone and computer", "w1.d": "The same account everywhere; every action shows up instantly on the other device.",
    "w2.t": "Even offline", "w2.d": "Keep working without a connection; everything syncs when the network is back.",
    "w3.t": "Your language, your currency", "w3.d": "Several languages, with formats and currencies suited to your country.",
    "w4.t": "Protected data", "w4.d": "Separated accounts and secure sign-in.",
    "w5.t": "A real contact", "w5.d": "Questions, training, new features: you talk directly to the team that builds the app.",
    "w6.t": "Custom work available", "w6.d": "Need a feature, or an app dedicated to your business? Let's talk.",
    "faq.eyebrow": "FAQ", "faq.title": "Before you order",
    "q1": "How do I pay?", "a1": "By Mobile Money (MTN MoMo, Orange Money…) or bank transfer. Payment details are sent to you on WhatsApp with your order.",
    "q2": "How quickly is my access activated?", "a2": "As soon as payment is received, usually the same day. We then guide you through setup.",
    "q3": "Can I try before buying?", "a3": "Yes: ask for a demo on WhatsApp. We show you the app on a case close to yours.",
    "q4": "Will I get an invoice?", "a4": "Yes, an invoice is issued for every payment.",
    "q5": "Which devices do the apps run on?", "a5": "Android phones and computers, in a recent browser (Chrome, Edge, Firefox, Safari).",
    "q6": "Can you build an app for my business?", "a6": "Yes. Describe your needs on WhatsApp or by email; we'll propose a solution and a quote.",
    "final.title": "A question, a demo, an order?", "final.lead": "Message us: we reply quickly, in French or English.",
    "foot.tag": "Professional apps, simple and reliable.", "foot.apps": "Apps", "foot.contact": "Contact", "foot.rights": "All rights reserved.",
    "foot.privacy": "Privacy (Immo)", "foot.deletion": "Account deletion (Immo)",
    "o.title": "Order", "o.lead": "Fill in these few fields: your WhatsApp message will be ready to send.",
    "o.app": "App", "o.want": "I would like", "o.buy": "To buy", "o.demo": "A demo", "o.info": "Information",
    "o.name": "Name", "o.org": "Company (optional)", "o.city": "City and country", "o.msg": "Details (optional)",
    "o.err": "Enter your name to continue.", "o.send": "Send on WhatsApp", "o.alt": "No WhatsApp?", "o.mail": "Send by email"
  };

  /* Textes générés (cartes, messages) dans les deux langues. */
  var UI = {
    fr: {
      available: "Disponible", soon: "Bientôt", android: "Android", web: "Ordinateur",
      priceOnRequest: "Tarif sur demande", discover: "Découvrir", openWeb: "Ouvrir sur ordinateur", download: "Android",
      order: "Commander", demo: "Démonstration",
      nextT: "Votre prochaine application", nextD: "D'autres applications sont en préparation. Vous avez un besoin précis ? Nous pouvons le développer pour vous.", nextCta: "Proposer un besoin",
      custom: "Application sur mesure",
      wa: { buy: "Bonjour DataCraft, je souhaite acheter {app}.", demo: "Bonjour DataCraft, je souhaite une démonstration de {app}.", info: "Bonjour DataCraft, je souhaite des informations sur {app}." },
      name: "Nom", org: "Entreprise", city: "Ville / pays", msg: "Précisions", subject: "Commande {app}",
      whatsapp: "WhatsApp", email: "E-mail", copy: "Copier", copied: "Copié"
    },
    en: {
      available: "Available", soon: "Coming soon", android: "Android", web: "Computer",
      priceOnRequest: "Price on request", discover: "Learn more", openWeb: "Open on computer", download: "Android",
      order: "Order", demo: "Demo",
      nextT: "Your next app", nextD: "More apps are on the way. Have a specific need? We can build it for you.", nextCta: "Suggest a need",
      custom: "Custom app",
      wa: { buy: "Hello DataCraft, I would like to buy {app}.", demo: "Hello DataCraft, I would like a demo of {app}.", info: "Hello DataCraft, I would like information about {app}." },
      name: "Name", org: "Company", city: "City / country", msg: "Details", subject: "Order {app}",
      whatsapp: "WhatsApp", email: "Email", copy: "Copy", copied: "Copied"
    }
  };

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
  function u(key) { return UI[lang][key]; }
  function L(obj) { return obj ? (obj[lang] || obj.fr || "") : ""; }
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
    lang = next === "en" ? "en" : "fr";
    var dict = lang === "en" ? EN : FR;
    root.lang = lang;
    $all("[data-i18n]").forEach(function (e) { var v = dict[e.getAttribute("data-i18n")]; if (v) e.textContent = v; });
    $all("[data-i18n-html]").forEach(function (e) { var v = dict[e.getAttribute("data-i18n-html")]; if (v) e.innerHTML = v; });
    document.title = lang === "en" ? "DataCraft — Professional apps for phone and computer" : FR_TITLE;
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
  applyLang(saved || (nav0 === "en" ? "en" : "fr"));

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
