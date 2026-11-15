// Page du locataire : consulter un courrier d'Immo et confirmer sa réception.
// Le jeton est dans l'ancre (#…) : il n'est jamais envoyé au serveur du site
// ni transmis comme « referrer ». Adresse Supabase et clé publique insérées
// à la construction du site (tool/build_site.dart).
(function () {
  'use strict';

  var API = 'https://rwsiynbayakukqxlrlkj.supabase.co/functions/v1/notice-link';
  var KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3c2l5bmJheWFrdWtxeGxybGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjQ5MzAsImV4cCI6MjEwNDUwMDkzMH0.U5sAl4aQMCedTrcCtAmJ0QHEJ3gTKlIOrJDBuO7Yrbg';

  var T = {
    fr: {
      loading: 'Chargement du courrier…',
      invalidTitle: 'Lien invalide ou expiré',
      invalidText: "Ce lien n'est plus valable. Contactez l'expéditeur du courrier.",
      cancelledTitle: 'Courrier annulé',
      cancelledText: "Ce courrier a été annulé par l'expéditeur. Vous n'avez rien à faire.",
      networkText: 'Connexion impossible. Vérifiez votre connexion Internet puis réessayez.',
      hello: 'Bonjour {tenant},',
      intro: '{org} vous adresse le courrier suivant :',
      formal: 'Mise en demeure', preavis: 'Notification de préavis', conge: 'Notification de congé',
      tenantNotice: 'Accusé de réception de votre préavis',
      place: 'Logement', date: 'Date du courrier', amount: 'Montant dû',
      deadline: 'À régulariser au plus tard le', end: 'Fin du bail le',
      open: 'Ouvrir le document (PDF)',
      confirmText: "En confirmant, vous attestez avoir reçu ce courrier. La date et l'heure de votre confirmation sont enregistrées.",
      confirm: 'Je confirme avoir reçu ce courrier',
      done: 'Réception confirmée le {date} à {time}. Merci.',
      personal: 'Ce lien vous est personnel : merci de ne pas le transférer.',
      contact: 'Contact : {contact}',
      motives: {
        unpaid: 'Loyers et charges impayés', nuisance: 'Troubles de voisinage', damage: 'Dégradations du logement',
        sublet: 'Sous-location non autorisée', insurance: "Défaut d'assurance", unauthorized_works: 'Travaux non autorisés',
        rules: 'Non-respect du règlement', use: 'Usage non conforme des lieux', other: 'Manquement au bail'
      }
    },
    en: {
      loading: 'Loading the letter…',
      invalidTitle: 'Invalid or expired link',
      invalidText: 'This link is no longer valid. Please contact the sender of the letter.',
      cancelledTitle: 'Letter cancelled',
      cancelledText: 'This letter was cancelled by the sender. No action is needed.',
      networkText: 'Unable to connect. Check your Internet connection and try again.',
      hello: 'Dear {tenant},',
      intro: '{org} is sending you the following letter:',
      formal: 'Formal notice', preavis: 'Notice to vacate', conge: 'Notice of termination',
      tenantNotice: 'Acknowledgement of your notice',
      place: 'Property', date: 'Letter date', amount: 'Amount due',
      deadline: 'To be remedied by', end: 'Lease ends on',
      open: 'Open the document (PDF)',
      confirmText: 'By confirming, you acknowledge receipt of this letter. The date and time of your confirmation are recorded.',
      confirm: 'I confirm I have received this letter',
      done: 'Receipt confirmed on {date} at {time}. Thank you.',
      personal: 'This link is personal: please do not forward it.',
      contact: 'Contact: {contact}',
      motives: {
        unpaid: 'Unpaid rent and charges', nuisance: 'Disturbance of neighbours', damage: 'Damage to the property',
        sublet: 'Unauthorised subletting', insurance: 'No insurance', unauthorized_works: 'Unauthorised works',
        rules: 'Breach of the house rules', use: 'Improper use of the premises', other: 'Breach of the lease'
      }
    },
    es: {
      loading: 'Cargando la carta…',
      invalidTitle: 'Enlace no válido o caducado',
      invalidText: 'Este enlace ya no es válido. Contacte con el remitente de la carta.',
      cancelledTitle: 'Carta anulada',
      cancelledText: 'El remitente anuló esta carta. No tiene que hacer nada.',
      networkText: 'No se pudo conectar. Compruebe su conexión a Internet e inténtelo de nuevo.',
      hello: 'Estimado/a {tenant}:',
      intro: '{org} le envía la siguiente carta:',
      formal: 'Requerimiento formal', preavis: 'Notificación de preaviso', conge: 'Notificación de rescisión',
      tenantNotice: 'Acuse de recibo de su preaviso',
      place: 'Vivienda', date: 'Fecha de la carta', amount: 'Importe adeudado',
      deadline: 'A regularizar a más tardar el', end: 'Fin del contrato el',
      open: 'Abrir el documento (PDF)',
      confirmText: 'Al confirmar, declara haber recibido esta carta. Se registran la fecha y la hora de su confirmación.',
      confirm: 'Confirmo haber recibido esta carta',
      done: 'Recepción confirmada el {date} a las {time}. Gracias.',
      personal: 'Este enlace es personal: no lo reenvíe.',
      contact: 'Contacto: {contact}',
      motives: {
        unpaid: 'Alquileres y gastos impagados', nuisance: 'Molestias a los vecinos', damage: 'Daños en la vivienda',
        sublet: 'Subarriendo no autorizado', insurance: 'Falta de seguro', unauthorized_works: 'Obras no autorizadas',
        rules: 'Incumplimiento del reglamento', use: 'Uso indebido del inmueble', other: 'Incumplimiento del contrato'
      }
    },
    pt: {
      loading: 'A carregar a carta…',
      invalidTitle: 'Ligação inválida ou expirada',
      invalidText: 'Esta ligação já não é válida. Contacte o remetente da carta.',
      cancelledTitle: 'Carta anulada',
      cancelledText: 'O remetente anulou esta carta. Não precisa de fazer nada.',
      networkText: 'Não foi possível ligar. Verifique a sua ligação à Internet e tente novamente.',
      hello: 'Caro(a) {tenant},',
      intro: '{org} envia-lhe a seguinte carta:',
      formal: 'Notificação formal', preavis: 'Notificação de pré-aviso', conge: 'Notificação de denúncia',
      tenantNotice: 'Aviso de receção do seu pré-aviso',
      place: 'Imóvel', date: 'Data da carta', amount: 'Montante em dívida',
      deadline: 'A regularizar até', end: 'Fim do contrato em',
      open: 'Abrir o documento (PDF)',
      confirmText: 'Ao confirmar, declara ter recebido esta carta. A data e a hora da sua confirmação ficam registadas.',
      confirm: 'Confirmo que recebi esta carta',
      done: 'Receção confirmada em {date} às {time}. Obrigado.',
      personal: 'Esta ligação é pessoal: não a reencaminhe.',
      contact: 'Contacto: {contact}',
      motives: {
        unpaid: 'Rendas e encargos em dívida', nuisance: 'Perturbação dos vizinhos', damage: 'Danos no imóvel',
        sublet: 'Subarrendamento não autorizado', insurance: 'Falta de seguro', unauthorized_works: 'Obras não autorizadas',
        rules: 'Incumprimento do regulamento', use: 'Uso indevido do imóvel', other: 'Incumprimento do contrato'
      }
    },
    ar: {
      loading: 'جارٍ تحميل الرسالة…',
      invalidTitle: 'رابط غير صالح أو منتهي الصلاحية',
      invalidText: 'لم يعد هذا الرابط صالحًا. تواصل مع مُرسل الرسالة.',
      cancelledTitle: 'أُلغيت الرسالة',
      cancelledText: 'ألغى المُرسل هذه الرسالة. لا يلزمك أي إجراء.',
      networkText: 'تعذّر الاتصال. تحقّق من اتصالك بالإنترنت ثم أعد المحاولة.',
      hello: 'السيد/السيدة {tenant}،',
      intro: 'يرسل إليك {org} الرسالة التالية:',
      formal: 'إنذار رسمي', preavis: 'إشعار بالإخلاء', conge: 'إشعار بإنهاء الإيجار',
      tenantNotice: 'إقرار باستلام إشعارك',
      place: 'العقار', date: 'تاريخ الرسالة', amount: 'المبلغ المستحق',
      deadline: 'التسوية في موعد أقصاه', end: 'ينتهي الإيجار في',
      open: 'فتح المستند (PDF)',
      confirmText: 'بالتأكيد، تقرّ باستلام هذه الرسالة. يُسجَّل تاريخ ووقت تأكيدك.',
      confirm: 'أؤكد أنني استلمت هذه الرسالة',
      done: 'تم تأكيد الاستلام في {date} الساعة {time}. شكرًا لك.',
      personal: 'هذا الرابط شخصي: يرجى عدم إعادة توجيهه.',
      contact: 'للتواصل: {contact}',
      motives: {
        unpaid: 'إيجارات ورسوم غير مدفوعة', nuisance: 'إزعاج الجيران', damage: 'أضرار في العقار',
        sublet: 'إيجار من الباطن غير مأذون', insurance: 'عدم وجود تأمين', unauthorized_works: 'أشغال غير مأذونة',
        rules: 'مخالفة النظام الداخلي', use: 'استعمال غير مطابق للعقار', other: 'إخلال بعقد الإيجار'
      }
    }
  };

  var lang = (navigator.language || 'fr').slice(0, 2);
  if (!T[lang]) lang = 'fr';
  var token = (location.hash || '').replace(/^#/, '');
  var data = null;

  function $(id) { return document.getElementById(id); }
  function t(key) { return T[lang][key] || T.fr[key] || ''; }
  function fill(text, params) {
    return text.replace(/\{(\w+)\}/g, function (_, k) { return params[k] == null ? '' : String(params[k]); });
  }
  function show(id) {
    ['loading', 'error', 'letter'].forEach(function (s) { $(s).hidden = s !== id; });
  }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (el) {
      el.textContent = t(el.getAttribute('data-t'));
    });
  }
  function fail(kind) {
    applyLanguage();
    $('error-title').textContent = kind === 'cancelled' ? t('cancelledTitle') : kind === 'network' ? '' : t('invalidTitle');
    $('error-text').textContent = kind === 'cancelled' ? t('cancelledText') : kind === 'network' ? t('networkText') : t('invalidText');
    show('error');
  }
  function call(action) {
    return fetch(API, {
      method: 'POST',
      headers: { 'content-type': 'application/json', apikey: KEY },
      body: JSON.stringify({ token: token, action: action }),
      referrerPolicy: 'no-referrer',
      cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (body) {
        if (!res.ok) { var e = new Error(body.error || 'server'); e.kind = body.error; throw e; }
        return body;
      });
    });
  }
  function title(d) {
    if (d.kind === 'formal_notice') return t('formal');
    if (d.kind === 'tenant_notice') return t('tenantNotice');
    return d.usage === 'commercial' ? t('conge') : t('preavis');
  }
  function doneText(iso) {
    var when = iso ? new Date(iso) : new Date();
    var locale = lang === 'en' ? 'en-GB' : lang;
    return fill(t('done'), {
      date: when.toLocaleDateString(locale),
      time: when.toLocaleTimeString(locale, { hour: '2-digit', minute: '2-digit' })
    });
  }
  function confirmed(iso) {
    $('confirm-box').hidden = true;
    $('done').hidden = false;
    $('done-text').textContent = doneText(iso);
  }
  function render(d) {
    data = d;
    if (T[d.locale]) lang = d.locale;
    applyLanguage();
    var org = (d.organization && d.organization.name) || 'Immo';
    $('org').textContent = org;
    document.title = title(d) + ' – ' + org;
    $('hello').textContent = fill(t('hello'), { tenant: d.tenant || '' });
    $('intro').textContent = fill(t('intro'), { org: org });
    $('title').textContent = title(d);
    var motives = T[lang].motives;
    if (d.kind === 'formal_notice' && d.motive && motives[d.motive]) {
      $('motive').textContent = motives[d.motive];
      $('motive').hidden = false;
    }
    var place = d.place || {};
    $('place').textContent = [place.property_name, place.unit_reference].filter(Boolean).join(' – ');
    $('date').textContent = d.notice_date || '';
    $('effective-label').textContent = d.kind === 'formal_notice' ? t('deadline') : t('end');
    $('effective').textContent = d.effective_date || '';
    if (d.amount) {
      $('amount').textContent = d.amount;
      $('amount-row').hidden = false;
    }
    if (d.pdf_url) {
      $('pdf').href = d.pdf_url;
    } else {
      $('pdf').hidden = true;
    }
    var contact = d.organization ? [d.organization.phone, d.organization.email].filter(Boolean).join(' · ') : '';
    $('contact').textContent = contact ? fill(t('contact'), { contact: contact }) : '';
    if (d.received) confirmed(d.received_at);
    show('letter');
  }

  $('confirm').addEventListener('click', function () {
    var button = $('confirm');
    button.disabled = true;
    $('confirm-error').hidden = true;
    call('confirm').then(function (r) {
      confirmed(r.received_at);
    }).catch(function (e) {
      if (e.kind === 'cancelled' || e.kind === 'invalid') return fail(e.kind);
      button.disabled = false;
      $('confirm-error').textContent = t('networkText');
      $('confirm-error').hidden = false;
    });
  });

  applyLanguage();
  if (!/^[A-Za-z0-9_-]{20,100}$/.test(token)) {
    fail('invalid');
  } else {
    call('view').then(render).catch(function (e) {
      fail(e.kind === 'cancelled' ? 'cancelled' : e.kind === 'invalid' ? 'invalid' : 'network');
    });
  }
})();
