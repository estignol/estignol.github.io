/* Catalogue des applications DataCraft.
   Pour ajouter une application : copiez un bloc { ... }, changez les textes,
   et elle apparaît automatiquement sur la page d'accueil et dans le formulaire
   de commande. Textes en français (fr), anglais (en), espagnol (es), portugais (pt) et arabe (ar) ;
   une langue absente s'affiche en anglais.

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
    price: { fr: "Gratuit", en: "Free", es: "Gratis", pt: "Grátis", ar: "مجاني" },
    tagline: {
      fr: "La gestion locative professionnelle",
      en: "Professional rental management",
      es: "Gestión de alquileres profesional",
      pt: "Gestão de arrendamentos profissional",
      ar: "إدارة إيجارات احترافية"
    },
    desc: {
      fr: "Loyers, quittances vérifiables, suivi des impayés, rappels automatiques, rapprochement des relevés Mobile Money et rapports signés, pour les agences et les propriétaires.",
      en: "Rents, verifiable receipts, arrears tracking, automatic reminders, Mobile Money statement matching and signed reports, for agencies and landlords.",
      es: "Alquileres, recibos verificables, seguimiento de impagos, recordatorios automáticos, conciliación de extractos Mobile Money e informes firmados, para agencias y propietarios.",
      pt: "Rendas, recibos verificáveis, acompanhamento de dívidas, lembretes automáticos, reconciliação de extratos Mobile Money e relatórios assinados, para agências e proprietários.",
      ar: "الإيجارات، إيصالات قابلة للتحقق، متابعة المتأخرات، تذكيرات تلقائية، مطابقة كشوف Mobile Money وتقارير موقّعة، للوكالات والملّاك."
    },
    features: {
      fr: ["Quittances PDF avec QR code", "Relances WhatsApp en un appui", "Fonctionne sans réseau", "5 langues, 200+ pays"],
      en: ["PDF receipts with QR code", "One-tap WhatsApp reminders", "Works offline", "5 languages, 200+ countries"],
      es: ["Recibos PDF con código QR", "Recordatorios por WhatsApp con un toque", "Funciona sin red", "5 idiomas, más de 200 países"],
      pt: ["Recibos PDF com código QR", "Lembretes por WhatsApp com um toque", "Funciona sem rede", "5 línguas, mais de 200 países"],
      ar: ["إيصالات PDF برمز QR", "تذكير عبر واتساب بلمسة واحدة", "يعمل دون شبكة", "5 لغات، أكثر من 200 دولة"]
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
    price: { fr: "", en: "", es: "", pt: "", ar: "" },
    tagline: {
      fr: "Sur téléphone et ordinateur",
      en: "On phone and computer",
      es: "En teléfono y ordenador",
      pt: "No telemóvel e no computador",
      ar: "على الهاتف والحاسوب"
    },
    desc: {
      fr: "Esty fonctionne sur Android et sur ordinateur, avec un seul compte. Écrivez-nous pour une présentation, une démonstration ou pour commander votre accès.",
      en: "Esty runs on Android and on computer, with a single account. Message us for a walkthrough, a demo or to order your access.",
      es: "Esty funciona en Android y en ordenador, con una sola cuenta. Escríbanos para una presentación, una demostración o para pedir su acceso.",
      pt: "O Esty funciona em Android e no computador, com uma única conta. Escreva-nos para uma apresentação, uma demonstração ou para encomendar o seu acesso.",
      ar: "يعمل Esty على أندرويد والحاسوب بحساب واحد. راسلنا لعرض تقديمي أو عرض توضيحي أو لطلب اشتراكك."
    },
    features: {
      fr: ["Android et ordinateur", "Un seul compte, synchronisé", "Accompagnement à la mise en route"],
      en: ["Android and computer", "One synced account", "Hands-on onboarding"],
      es: ["Android y ordenador", "Una sola cuenta sincronizada", "Acompañamiento en la puesta en marcha"],
      pt: ["Android e computador", "Uma conta sincronizada", "Acompanhamento no arranque"],
      ar: ["أندرويد وحاسوب", "حساب واحد متزامن", "مرافقة عند البدء"]
    }
  }
];
