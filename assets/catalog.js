/* Catalogue des applications DataCraft.
   Pour ajouter une application : copiez un bloc { ... }, changez les textes,
   et elle apparaît automatiquement sur la page d'accueil et dans le formulaire
   de commande. Textes en français (fr) et en anglais (en).

   Champs :
   - id        identifiant court, sans espace
   - name      nom affiché
   - icon      image carrée (chemin) ; vide = pastille avec l'initiale
   - color     couleur de l'application (pastille, reflets)
   - status    "available" (disponible) ou "soon" (bientôt)
   - page      page de présentation détaillée ; vide = pas de bouton « Découvrir »
   - web       lien de la version ordinateur ; vide = pas de bouton
   - android   lien de téléchargement Android ; vide = pas de bouton
   - platforms "android", "web"
   - price     prix affiché ; vide = « Tarif sur demande »
   - tagline, desc, features : textes par langue */
window.DATACRAFT_APPS = [
  {
    id: "immo",
    name: "Immo",
    icon: "assets/immo-192.png",
    color: "#17a06b",
    status: "available",
    page: "immo/",
    web: "app/",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "Gratuit", en: "Free" },
    tagline: {
      fr: "La gestion locative professionnelle",
      en: "Professional rental management"
    },
    desc: {
      fr: "Loyers, quittances vérifiables, suivi des impayés, rappels automatiques, rapprochement des relevés Mobile Money et rapports signés, pour les agences et les propriétaires.",
      en: "Rents, verifiable receipts, arrears tracking, automatic reminders, Mobile Money statement matching and signed reports, for agencies and landlords."
    },
    features: {
      fr: ["Quittances PDF avec QR code", "Relances WhatsApp en un appui", "Fonctionne sans réseau", "5 langues, 200+ pays"],
      en: ["PDF receipts with QR code", "One-tap WhatsApp reminders", "Works offline", "5 languages, 200+ countries"]
    }
  },
  {
    id: "esty",
    name: "Esty",
    icon: "",
    color: "#6d5cff",
    status: "available",
    page: "",
    web: "",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "", en: "" },
    tagline: {
      fr: "Sur téléphone et ordinateur",
      en: "On phone and computer"
    },
    desc: {
      fr: "Esty fonctionne sur Android et sur ordinateur, avec un seul compte. Écrivez-nous pour une présentation, une démonstration ou pour commander votre accès.",
      en: "Esty runs on Android and on computer, with a single account. Message us for a walkthrough, a demo or to order your access."
    },
    features: {
      fr: ["Android et ordinateur", "Un seul compte, synchronisé", "Accompagnement à la mise en route"],
      en: ["Android and computer", "One synced account", "Hands-on onboarding"]
    }
  }
];
