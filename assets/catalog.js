/* Catalogue des applications DataCraft.
   Pour ajouter une application : copiez un bloc { ... }, changez les textes,
   et elle apparaît automatiquement sur l'accueil, le pied de page, la grille
   des tarifs et le formulaire de commande.
   Textes en français (fr), anglais (en), espagnol (es), portugais (pt) et arabe (ar).

   Champs :
   - id        identifiant court, sans espace
   - name      nom affiché
   - icon      image carrée (chemin depuis la racine du site) ; vide = initiale
   - color     couleur de l'application
   - status    "available" (disponible) ou "soon" (bientôt)
   - page      page de présentation (chemin depuis la racine du site)
   - web       lien de la version ordinateur ; vide = pas de lien
   - android   lien de téléchargement Android ; vide = pas de lien
   - platforms "android", "web"
   - price     prix affiché ; vide = « Tarif sur demande »
   - sector    métier visé
   - tagline, desc, features : textes par langue */
window.DATACRAFT_APPS = [
  {
    id: "esty",
    name: "Esty",
    icon: "assets/apps/esty-192.png",
    color: "#0e3b2e",
    status: "available",
    page: "esty/",
    web: "https://esty.datacraft.trade/",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "", en: "", es: "", pt: "", ar: "" },
    sector: { fr: "Commerce et services", en: "Retail and services", es: "Comercio y servicios", pt: "Comércio e serviços", ar: "التجارة والخدمات" },
    tagline: {
      fr: "La gestion commerciale complète",
      en: "Complete business management",
      es: "La gestión comercial completa",
      pt: "A gestão comercial completa",
      ar: "إدارة تجارية متكاملة"
    },
    desc: {
      fr: "Ventes, devis et factures, caisse, stock, clients, fournisseurs, dépenses et rapports dans une seule application, avec votre vitrine en ligne et une messagerie client.",
      en: "Sales, quotes and invoices, point of sale, stock, customers, suppliers, expenses and reports in one app, with your online storefront and customer messaging.",
      es: "Ventas, presupuestos y facturas, caja, stock, clientes, proveedores, gastos e informes en una sola aplicación, con su escaparate en línea y mensajería con clientes.",
      pt: "Vendas, orçamentos e faturas, caixa, stock, clientes, fornecedores, despesas e relatórios numa única aplicação, com a sua montra online e mensagens com clientes.",
      ar: "المبيعات وعروض الأسعار والفواتير ونقطة البيع والمخزون والعملاء والموردون والمصاريف والتقارير في تطبيق واحد، مع واجهة متجرك على الإنترنت ومراسلة العملاء."
    },
    features: {
      fr: ["Devis et factures PDF avec QR code de vérification", "Caisse et tickets", "Stock, achats et fournisseurs", "Vitrine, place de marché et publicités"],
      en: ["PDF quotes and invoices with verification QR code", "Point of sale and receipts", "Stock, purchasing and suppliers", "Storefront, marketplace and ads"],
      es: ["Presupuestos y facturas PDF con código QR de verificación", "Caja y tickets", "Stock, compras y proveedores", "Escaparate, mercado y publicidad"],
      pt: ["Orçamentos e faturas PDF com código QR de verificação", "Caixa e talões", "Stock, compras e fornecedores", "Montra, mercado e publicidade"],
      ar: ["عروض أسعار وفواتير PDF برمز QR للتحقق", "نقطة بيع وإيصالات", "المخزون والمشتريات والموردون", "واجهة متجر وسوق وإعلانات"]
    }
  },
  {
    id: "btp",
    name: "Esty BTP",
    icon: "assets/apps/esty-192.png",
    color: "#a2541f",
    status: "available",
    page: "btp/",
    web: "https://esty.datacraft.trade/",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "", en: "", es: "", pt: "", ar: "" },
    sector: { fr: "BTP et construction", en: "Construction", es: "Construcción", pt: "Construção", ar: "البناء والأشغال العامة" },
    tagline: {
      fr: "Le logiciel des entreprises du BTP",
      en: "Software for construction companies",
      es: "El software de las constructoras",
      pt: "O software das empresas de construção",
      ar: "برنامج شركات البناء"
    },
    desc: {
      fr: "De l'appel d'offres à la clôture du marché : devis et bibliothèque de prix, marchés, planning, journal de chantier, achats, attachements, situations, facturation, paiements fournisseurs et tableau de bord.",
      en: "From tender to contract close-out: estimates and price library, contracts, scheduling, site diary, purchasing, measurements, progress billing, invoicing, supplier payments and dashboard.",
      es: "De la licitación al cierre del contrato: presupuestos y banco de precios, contratos, planificación, diario de obra, compras, mediciones, certificaciones, facturación, pagos a proveedores y cuadro de mando.",
      pt: "Do concurso ao encerramento do contrato: orçamentos e base de preços, contratos, planeamento, diário de obra, compras, medições, autos, faturação, pagamentos a fornecedores e painel.",
      ar: "من المناقصة إلى إقفال الصفقة: الكشوف التقديرية ومكتبة الأسعار والصفقات والتخطيط ويومية الورشة والمشتريات وكشوف الكميات والكشوف المرحلية والفوترة ودفع الموردين ولوحة القيادة."
    },
    features: {
      fr: ["Devis par lots avec sous-détails de prix", "Attachements et situations de travaux", "Marge, créances et dettes par chantier", "PV, réception et décompte final"],
      en: ["Estimates by package with price breakdowns", "Measurements and progress statements", "Margin, receivables and payables per job", "Minutes, handover and final account"],
      es: ["Presupuestos por lotes con descompuestos", "Mediciones y certificaciones", "Margen, cobros y deudas por obra", "Actas, recepción y liquidación final"],
      pt: ["Orçamentos por lotes com decomposição de preços", "Medições e autos", "Margem, créditos e dívidas por obra", "Atas, receção e conta final"],
      ar: ["كشوف تقديرية حسب الحصص مع تحليل الأسعار", "كشوف الكميات والكشوف المرحلية", "الهامش والديون لكل ورشة", "المحاضر والاستلام والكشف النهائي"]
    }
  },
  {
    id: "resto",
    name: "Resto",
    icon: "assets/apps/resto-192.png",
    color: "#7a1730",
    status: "available",
    page: "resto/",
    web: "https://resto.datacraft.trade/",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "", en: "", es: "", pt: "", ar: "" },
    sector: { fr: "Restauration", en: "Restaurants", es: "Restauración", pt: "Restauração", ar: "المطاعم" },
    tagline: {
      fr: "La plateforme des restaurants",
      en: "The platform for restaurants",
      es: "La plataforma de los restaurantes",
      pt: "A plataforma dos restaurantes",
      ar: "منصة المطاعم"
    },
    desc: {
      fr: "Menus, service en salle, commandes, cuisine, caisse, stock et factures côté restaurant ; carte en ligne, commandes, réservations, avis et fidélité côté client.",
      en: "Menus, table service, orders, kitchen, till, stock and invoices for the restaurant; online menu, ordering, bookings, reviews and loyalty for guests.",
      es: "Menús, servicio en sala, pedidos, cocina, caja, stock y facturas para el restaurante; carta en línea, pedidos, reservas, opiniones y fidelización para los clientes.",
      pt: "Menus, serviço de sala, pedidos, cozinha, caixa, stock e faturas para o restaurante; menu online, pedidos, reservas, avaliações e fidelização para os clientes.",
      ar: "القوائم وخدمة الصالة والطلبات والمطبخ والصندوق والمخزون والفواتير للمطعم؛ وقائمة على الإنترنت وطلبات وحجوزات وتقييمات وولاء للزبائن."
    },
    features: {
      fr: ["Tables, commandes et cuisine", "Caisse et tickets 80 ou 58 mm", "Carte en ligne et réservations", "Notifications aux clients et à l'équipe"],
      en: ["Tables, orders and kitchen", "Till and 80 or 58 mm receipts", "Online menu and bookings", "Customer and staff notifications"],
      es: ["Mesas, pedidos y cocina", "Caja y tickets de 80 o 58 mm", "Carta en línea y reservas", "Notificaciones a clientes y equipo"],
      pt: ["Mesas, pedidos e cozinha", "Caixa e talões de 80 ou 58 mm", "Menu online e reservas", "Notificações para clientes e equipa"],
      ar: ["الطاولات والطلبات والمطبخ", "صندوق وإيصالات 80 أو 58 مم", "قائمة على الإنترنت وحجوزات", "إشعارات للزبائن والفريق"]
    }
  },
  {
    id: "immo",
    name: "Immo",
    icon: "assets/apps/immo-192.png",
    color: "#0e5a47",
    status: "available",
    page: "immo/",
    web: "app/",
    android: "",
    platforms: ["android", "web"],
    price: { fr: "Gratuit", en: "Free", es: "Gratis", pt: "Grátis", ar: "مجاني" },
    sector: { fr: "Immobilier", en: "Real estate", es: "Inmobiliaria", pt: "Imobiliário", ar: "العقارات" },
    tagline: {
      fr: "La gestion locative professionnelle",
      en: "Professional rental management",
      es: "Gestión de alquileres profesional",
      pt: "Gestão de arrendamentos profissional",
      ar: "إدارة إيجارات احترافية"
    },
    desc: {
      fr: "Loyers, quittances vérifiables, impayés, rappels automatiques, courriers au locataire, location courte durée avec réservation en ligne et rapprochement des relevés, pour les agences et les propriétaires.",
      en: "Rents, verifiable receipts, arrears, automatic reminders, tenant letters, short-term rentals with online booking and statement matching, for agencies and landlords.",
      es: "Alquileres, recibos verificables, impagos, recordatorios automáticos, cartas al inquilino, alquiler de corta duración con reserva en línea y conciliación de extractos, para agencias y propietarios.",
      pt: "Rendas, recibos verificáveis, dívidas, lembretes automáticos, cartas ao inquilino, arrendamento de curta duração com reserva online e reconciliação de extratos, para agências e proprietários.",
      ar: "الإيجارات وإيصالات قابلة للتحقق والمتأخرات وتذكيرات تلقائية ورسائل للمستأجر وإيجار قصير المدة مع حجز عبر الإنترنت ومطابقة الكشوف، للوكالات والملّاك."
    },
    features: {
      fr: ["Quittances PDF avec QR code", "Relances WhatsApp en un appui", "Courte durée et réservation", "Fonctionne sans réseau"],
      en: ["PDF receipts with QR code", "One-tap WhatsApp reminders", "Short stays and booking", "Works offline"],
      es: ["Recibos PDF con código QR", "Recordatorios por WhatsApp", "Corta duración y reservas", "Funciona sin red"],
      pt: ["Recibos PDF com código QR", "Lembretes por WhatsApp", "Curta duração e reservas", "Funciona sem rede"],
      ar: ["إيصالات PDF برمز QR", "تذكير عبر واتساب بلمسة", "إيجار قصير وحجز", "يعمل دون شبكة"]
    }
  }
];
