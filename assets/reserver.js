// Page de réservation en ligne d'une agence Immo : logements publiés,
// disponibilités, prix calculé par le serveur, demande de réservation
// (option confirmée ensuite par l'agence). Le code de l'agence est dans
// l'ancre (#…). Adresse Supabase et clé publique insérées à la
// construction du site (tool/build_site.dart).
(function () {
  'use strict';

  var API = 'https://rwsiynbayakukqxlrlkj.supabase.co/functions/v1/stay-public';
  var KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ3c2l5bmJheWFrdWtxeGxybGtqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODg5MjQ5MzAsImV4cCI6MjEwNDUwMDkzMH0.U5sAl4aQMCedTrcCtAmJ0QHEJ3gTKlIOrJDBuO7Yrbg';

  var T = {
    fr: {
      videos: 'vidéo(s)',
      loading: 'Chargement…', notFoundTitle: 'Page de réservation introuvable',
      notFoundText: "Ce lien n'est pas valable ou la réservation en ligne est fermée.",
      chooseTitle: 'Choisissez votre logement', noUnits: 'Aucun logement disponible à la réservation pour le moment.',
      back: '← Tous les logements', when: 'Quand ?', arrival: 'Arrivée', time: 'Heure', departure: 'Départ',
      hours: 'Durée (heures)', adults: 'Adultes', children: 'Enfants', availability: 'Disponibilités', busy: 'Occupé',
      you: 'Vos coordonnées', name: 'Nom et prénom', phone: 'Téléphone (WhatsApp)', email: 'E-mail (facultatif)',
      messageLabel: 'Message (facultatif)', submit: 'Envoyer ma demande de réservation',
      optionInfo: "Votre demande est transmise à l'agence, qui la confirme rapidement. Aucun paiement n'est demandé en ligne.",
      doneTitle: 'Demande envoyée', contactWhatsApp: "Contacter l'agence sur WhatsApp",
      done: 'Votre demande {ref} a bien été reçue. Montant estimé : {total}. L\'agence vous contacte pour la confirmer avant le {until}.',
      hour: 'À l\'heure', night: 'À la nuit', week: 'À la semaine', month: 'Au mois',
      perHour: '/ heure', perNight: '/ nuit', perWeek: '/ semaine', perMonth: '/ mois', from: 'À partir de',
      guests: '{n} personne(s) max.', lodging: 'Hébergement', cleaning: 'Ménage', tax: 'Taxe de séjour', total: 'Total estimé',
      deposit: 'Caution (rendue au départ)', notAvailable: 'Indisponible à ces dates : choisissez d\'autres dates.',
      checkTimes: 'Arrivée à partir de {in}, départ avant {out}.',
      errors: {
        too_many_requests: 'Trop de demandes : réessayez dans une heure.', invalid_name: 'Indiquez votre nom.',
        invalid_phone: 'Indiquez un numéro de téléphone valide.', invalid_email: 'Adresse e-mail invalide.',
        not_available: 'Ce logement vient d\'être réservé à ces dates.', past_date: 'Choisissez une date à venir.',
        network: 'Connexion impossible. Vérifiez votre connexion Internet.', other: 'Une erreur est survenue. Réessayez.'
      },
      whatsappText: 'Bonjour, je viens de faire la demande de réservation {ref}.'
    },
    en: {
      videos: 'video(s)',
      loading: 'Loading…', notFoundTitle: 'Booking page not found',
      notFoundText: 'This link is not valid or online booking is closed.',
      chooseTitle: 'Choose your accommodation', noUnits: 'No accommodation available for booking at the moment.',
      back: '← All accommodation', when: 'When?', arrival: 'Arrival', time: 'Time', departure: 'Departure',
      hours: 'Duration (hours)', adults: 'Adults', children: 'Children', availability: 'Availability', busy: 'Booked',
      you: 'Your details', name: 'Full name', phone: 'Phone (WhatsApp)', email: 'Email (optional)',
      messageLabel: 'Message (optional)', submit: 'Send my booking request',
      optionInfo: 'Your request is sent to the agency, which will confirm it shortly. No online payment is required.',
      doneTitle: 'Request sent', contactWhatsApp: 'Contact the agency on WhatsApp',
      done: 'Your request {ref} has been received. Estimated amount: {total}. The agency will contact you to confirm it before {until}.',
      hour: 'Hourly', night: 'Nightly', week: 'Weekly', month: 'Monthly',
      perHour: '/ hour', perNight: '/ night', perWeek: '/ week', perMonth: '/ month', from: 'From',
      guests: 'Up to {n} guest(s)', lodging: 'Accommodation', cleaning: 'Cleaning', tax: 'Tourist tax', total: 'Estimated total',
      deposit: 'Deposit (returned at check-out)', notAvailable: 'Not available on these dates: please choose other dates.',
      checkTimes: 'Check-in from {in}, check-out before {out}.',
      errors: {
        too_many_requests: 'Too many requests: try again in an hour.', invalid_name: 'Please enter your name.',
        invalid_phone: 'Please enter a valid phone number.', invalid_email: 'Invalid email address.',
        not_available: 'This accommodation has just been booked for these dates.', past_date: 'Please choose a future date.',
        network: 'Unable to connect. Check your Internet connection.', other: 'Something went wrong. Please try again.'
      },
      whatsappText: 'Hello, I have just made booking request {ref}.'
    },
    es: {
      videos: 'vídeo(s)',
      loading: 'Cargando…', notFoundTitle: 'Página de reservas no encontrada',
      notFoundText: 'Este enlace no es válido o la reserva en línea está cerrada.',
      chooseTitle: 'Elija su alojamiento', noUnits: 'No hay alojamientos disponibles para reservar por el momento.',
      back: '← Todos los alojamientos', when: '¿Cuándo?', arrival: 'Llegada', time: 'Hora', departure: 'Salida',
      hours: 'Duración (horas)', adults: 'Adultos', children: 'Niños', availability: 'Disponibilidad', busy: 'Ocupado',
      you: 'Sus datos', name: 'Nombre y apellidos', phone: 'Teléfono (WhatsApp)', email: 'Correo (opcional)',
      messageLabel: 'Mensaje (opcional)', submit: 'Enviar mi solicitud de reserva',
      optionInfo: 'Su solicitud se envía a la agencia, que la confirmará en breve. No se solicita ningún pago en línea.',
      doneTitle: 'Solicitud enviada', contactWhatsApp: 'Contactar con la agencia por WhatsApp',
      done: 'Hemos recibido su solicitud {ref}. Importe estimado: {total}. La agencia le contactará para confirmarla antes del {until}.',
      hour: 'Por horas', night: 'Por noche', week: 'Por semana', month: 'Por mes',
      perHour: '/ hora', perNight: '/ noche', perWeek: '/ semana', perMonth: '/ mes', from: 'Desde',
      guests: 'Hasta {n} persona(s)', lodging: 'Alojamiento', cleaning: 'Limpieza', tax: 'Tasa turística', total: 'Total estimado',
      deposit: 'Fianza (devuelta a la salida)', notAvailable: 'No disponible en estas fechas: elija otras fechas.',
      checkTimes: 'Llegada a partir de las {in}, salida antes de las {out}.',
      errors: {
        too_many_requests: 'Demasiadas solicitudes: inténtelo dentro de una hora.', invalid_name: 'Indique su nombre.',
        invalid_phone: 'Indique un número de teléfono válido.', invalid_email: 'Correo no válido.',
        not_available: 'Este alojamiento acaba de reservarse en estas fechas.', past_date: 'Elija una fecha futura.',
        network: 'No se pudo conectar. Compruebe su conexión a Internet.', other: 'Se produjo un error. Inténtelo de nuevo.'
      },
      whatsappText: 'Hola, acabo de hacer la solicitud de reserva {ref}.'
    },
    pt: {
      videos: 'vídeo(s)',
      loading: 'A carregar…', notFoundTitle: 'Página de reservas não encontrada',
      notFoundText: 'Esta ligação não é válida ou a reserva online está fechada.',
      chooseTitle: 'Escolha o seu alojamento', noUnits: 'Nenhum alojamento disponível para reserva de momento.',
      back: '← Todos os alojamentos', when: 'Quando?', arrival: 'Chegada', time: 'Hora', departure: 'Saída',
      hours: 'Duração (horas)', adults: 'Adultos', children: 'Crianças', availability: 'Disponibilidade', busy: 'Ocupado',
      you: 'Os seus dados', name: 'Nome completo', phone: 'Telefone (WhatsApp)', email: 'E-mail (opcional)',
      messageLabel: 'Mensagem (opcional)', submit: 'Enviar o meu pedido de reserva',
      optionInfo: 'O seu pedido é enviado à agência, que o confirmará rapidamente. Não é pedido nenhum pagamento online.',
      doneTitle: 'Pedido enviado', contactWhatsApp: 'Contactar a agência no WhatsApp',
      done: 'O seu pedido {ref} foi recebido. Montante estimado: {total}. A agência contacta-o para o confirmar antes de {until}.',
      hour: 'À hora', night: 'À noite', week: 'À semana', month: 'Ao mês',
      perHour: '/ hora', perNight: '/ noite', perWeek: '/ semana', perMonth: '/ mês', from: 'A partir de',
      guests: 'Até {n} pessoa(s)', lodging: 'Alojamento', cleaning: 'Limpeza', tax: 'Taxa turística', total: 'Total estimado',
      deposit: 'Caução (devolvida na saída)', notAvailable: 'Indisponível nestas datas: escolha outras datas.',
      checkTimes: 'Chegada a partir das {in}, saída antes das {out}.',
      errors: {
        too_many_requests: 'Demasiados pedidos: tente novamente dentro de uma hora.', invalid_name: 'Indique o seu nome.',
        invalid_phone: 'Indique um número de telefone válido.', invalid_email: 'E-mail inválido.',
        not_available: 'Este alojamento acabou de ser reservado nestas datas.', past_date: 'Escolha uma data futura.',
        network: 'Não foi possível ligar. Verifique a sua ligação à Internet.', other: 'Ocorreu um erro. Tente novamente.'
      },
      whatsappText: 'Olá, acabei de fazer o pedido de reserva {ref}.'
    },
    ar: {
      videos: 'فيديو',
      loading: 'جارٍ التحميل…', notFoundTitle: 'صفحة الحجز غير موجودة',
      notFoundText: 'هذا الرابط غير صالح أو أن الحجز عبر الإنترنت مغلق.',
      chooseTitle: 'اختر مسكنك', noUnits: 'لا توجد مساكن متاحة للحجز حاليًا.',
      back: '→ كل المساكن', when: 'متى؟', arrival: 'الوصول', time: 'الساعة', departure: 'المغادرة',
      hours: 'المدة (ساعات)', adults: 'البالغون', children: 'الأطفال', availability: 'التوفر', busy: 'محجوز',
      you: 'بياناتك', name: 'الاسم الكامل', phone: 'الهاتف (واتساب)', email: 'البريد الإلكتروني (اختياري)',
      messageLabel: 'رسالة (اختياري)', submit: 'إرسال طلب الحجز',
      optionInfo: 'يُرسل طلبك إلى الوكالة التي ستؤكده قريبًا. لا يُطلب أي دفع عبر الإنترنت.',
      doneTitle: 'تم إرسال الطلب', contactWhatsApp: 'تواصل مع الوكالة عبر واتساب',
      done: 'تم استلام طلبك {ref}. المبلغ التقديري: {total}. ستتواصل معك الوكالة لتأكيده قبل {until}.',
      hour: 'بالساعة', night: 'بالليلة', week: 'بالأسبوع', month: 'بالشهر',
      perHour: '/ ساعة', perNight: '/ ليلة', perWeek: '/ أسبوع', perMonth: '/ شهر', from: 'ابتداءً من',
      guests: 'حتى {n} أشخاص', lodging: 'الإقامة', cleaning: 'التنظيف', tax: 'رسوم الإقامة السياحية', total: 'المجموع التقديري',
      deposit: 'تأمين (يُعاد عند المغادرة)', notAvailable: 'غير متاح في هذه التواريخ: اختر تواريخ أخرى.',
      checkTimes: 'الوصول ابتداءً من {in}، والمغادرة قبل {out}.',
      errors: {
        too_many_requests: 'طلبات كثيرة جدًا: أعد المحاولة بعد ساعة.', invalid_name: 'يرجى إدخال اسمك.',
        invalid_phone: 'يرجى إدخال رقم هاتف صالح.', invalid_email: 'بريد إلكتروني غير صالح.',
        not_available: 'تم حجز هذا المسكن للتو في هذه التواريخ.', past_date: 'اختر تاريخًا قادمًا.',
        network: 'تعذّر الاتصال. تحقّق من اتصالك بالإنترنت.', other: 'حدث خطأ. أعد المحاولة.'
      },
      whatsappText: 'مرحبًا، لقد قدّمت للتو طلب الحجز {ref}.'
    }
  };

  var lang = (navigator.language || 'fr').slice(0, 2);
  if (!T[lang]) lang = 'fr';
  var slug = (location.hash || '').replace(/^#/, '').toLowerCase();
  var catalog = null, unit = null, mode = null, busy = [], calMonth = null, quoteTimer = null;

  function $(id) { return document.getElementById(id); }
  function t(k) { return T[lang][k] != null ? T[lang][k] : T.fr[k]; }
  function fill(s, p) { return s.replace(/\{(\w+)\}/g, function (_, k) { return p[k] == null ? '' : String(p[k]); }); }
  function show(id) { ['loading', 'error', 'catalog', 'booking', 'done'].forEach(function (s) { $(s).hidden = s !== id; }); }
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    Array.prototype.forEach.call(document.querySelectorAll('[data-t]'), function (el) { el.textContent = t(el.getAttribute('data-t')); });
  }
  function money(v) {
    var cur = (catalog && catalog.organization.currency) || 'XAF';
    try {
      var s = new Intl.NumberFormat(lang === 'en' ? 'en-GB' : lang, { style: 'currency', currency: cur, maximumFractionDigits: cur === 'XAF' || cur === 'XOF' ? 0 : 2 }).format(v || 0);
      return s.replace('XAF', 'FCFA').replace('XOF', 'FCFA').replace('FCFA', 'FCFA');
    } catch (e) { return Math.round(v || 0) + ' ' + cur; }
  }
  function call(body) {
    body.agency = slug;
    return fetch(API, {
      method: 'POST', headers: { 'content-type': 'application/json', apikey: KEY },
      body: JSON.stringify(body), referrerPolicy: 'no-referrer', cache: 'no-store'
    }).then(function (res) {
      return res.json().catch(function () { return {}; }).then(function (b) {
        if (!res.ok) { var e = new Error(b.error || 'other'); e.code = b.error || 'other'; e.detail = b.message; throw e; }
        return b;
      });
    }, function () { var e = new Error('network'); e.code = 'network'; throw e; });
  }
  function errorText(e) {
    if (e.code === 'rule' && e.detail) return e.detail;
    return T[lang].errors[e.code] || T[lang].errors.other;
  }
  function el(tag, cls, text) { var x = document.createElement(tag); if (cls) x.className = cls; if (text != null) x.textContent = text; return x; }

  // Date + heure dans le fuseau de l'agence -> ISO (UTC).
  function zoned(dateStr, timeStr) {
    var tz = catalog.organization.time_zone || 'Africa/Douala';
    var p = dateStr.split('-').map(Number), q = (timeStr || '00:00').split(':').map(Number);
    var guess = Date.UTC(p[0], p[1] - 1, p[2], q[0], q[1]);
    var parts = new Intl.DateTimeFormat('en-US', { timeZone: tz, hourCycle: 'h23', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' })
      .formatToParts(new Date(guess)).reduce(function (a, x) { a[x.type] = x.value; return a; }, {});
    var asTz = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour % 24, +parts.minute);
    return new Date(guess - (asTz - guess)).toISOString();
  }
  function isoDate(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }

  function minRate(u) {
    var list = [['hourly_rate', 'perHour'], ['nightly_rate', 'perNight'], ['weekly_rate', 'perWeek'], ['monthly_rate', 'perMonth']];
    for (var i = 0; i < list.length; i++) if (u[list[i][0]]) return t('from') + ' ' + money(u[list[i][0]]) + ' ' + t(list[i][1]);
    return '';
  }

  function renderCatalog() {
    var o = catalog.organization;
    $('org').textContent = o.name || 'Immo';
    $('org-sub').textContent = o.city || '';
    document.title = o.name + ' – ' + t('chooseTitle');
    if (o.message) { $('message').textContent = o.message; $('message').hidden = false; }
    $('contact').textContent = [o.phone, o.email].filter(Boolean).join(' · ');
    var box = $('units');
    box.innerHTML = '';
    (catalog.units || []).forEach(function (u) {
      var card = el('button', 'unit');
      card.type = 'button';
      var cover = (u.media || []).filter(function (m) { return m.kind === 'photo'; })[0];
      var coverUrl = cover ? cover.url : (u.photos && u.photos[0]);
      var videos = (u.media || []).filter(function (m) { return m.kind === 'video'; }).length;
      if (coverUrl) { var img = el('img'); img.src = coverUrl; img.alt = ''; img.loading = 'lazy'; card.appendChild(img); }
      else card.appendChild(el('div', 'ph'));
      var body = el('div', 'body');
      body.appendChild(el('div', 'title', u.title));
      body.appendChild(el('div', 'muted small', [u.city, fill(t('guests'), { n: u.max_guests })].filter(Boolean).join(' · ')));
      body.appendChild(el('div', 'price', minRate(u)));
      if (videos) body.appendChild(el('div', 'muted small', '▶ ' + videos + ' ' + t('videos')));
      card.appendChild(body);
      card.addEventListener('click', function () { openUnit(u); });
      box.appendChild(card);
    });
    $('empty').hidden = (catalog.units || []).length > 0;
    show('catalog');
  }

  function openUnit(u) {
    unit = u;
    $('b-title').textContent = u.title;
    $('b-desc').textContent = u.description || '';
    var ph = $('b-photos'); ph.innerHTML = '';
    // Galerie : photos puis vidéos des lieux (lecture dans la page).
    (u.media || (u.photos || []).map(function (p) { return { kind: 'photo', url: p }; })).forEach(function (m) {
      if (m.kind === 'video') {
        var v = el('video');
        v.src = m.url; v.controls = true; v.preload = 'metadata'; v.playsInline = true;
        ph.appendChild(v);
      } else {
        var i = el('img'); i.src = m.url; i.alt = ''; i.loading = 'lazy'; ph.appendChild(i);
      }
    });
    ph.hidden = !ph.children.length;
    var rates = $('b-rates'); rates.innerHTML = '';
    [['hourly_rate', 'perHour'], ['nightly_rate', 'perNight'], ['weekend_rate', 'perNight'], ['weekly_rate', 'perWeek'], ['monthly_rate', 'perMonth']]
      .forEach(function (r) { if (u[r[0]]) rates.appendChild(el('span', 'rate', money(u[r[0]]) + ' ' + t(r[1]))); });
    rates.appendChild(el('span', 'rate', fill(t('checkTimes'), { 'in': u.check_in_time, out: u.check_out_time })));
    var modes = $('modes'); modes.innerHTML = '';
    var available = [['hour', 'hourly_rate'], ['night', 'nightly_rate'], ['week', 'weekly_rate'], ['month', 'monthly_rate']]
      .filter(function (m) { return u[m[1]]; }).map(function (m) { return m[0]; });
    mode = available.indexOf('night') >= 0 ? 'night' : available[0];
    available.forEach(function (m) {
      var c = el('button', 'chip' + (m === mode ? ' on' : ''), t(m));
      c.type = 'button';
      c.addEventListener('click', function () {
        mode = m;
        Array.prototype.forEach.call(modes.children, function (x) { x.classList.remove('on'); });
        c.classList.add('on');
        layoutMode();
      });
      modes.appendChild(c);
    });
    var today = new Date();
    var tomorrow = new Date(today.getTime() + 86400000);
    $('start-date').value = isoDate(today);
    $('start-date').min = isoDate(today);
    $('end-date').value = isoDate(new Date(today.getTime() + 86400000 * Math.max(1, u.min_nights || 1)));
    $('end-date').min = isoDate(tomorrow);
    $('start-time').value = u.check_in_time || '14:00';
    $('hours').value = Math.max(1, u.min_hours || 1);
    $('adults').max = u.max_guests;
    calMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    layoutMode();
    loadBusy();
    show('booking');
    window.scrollTo(0, 0);
  }

  function layoutMode() {
    var hourly = mode === 'hour';
    $('lbl-hours').hidden = !hourly;
    $('lbl-end-date').hidden = hourly;
    $('start-time').value = hourly ? ($('start-time').value || '10:00') : (unit.check_in_time || '14:00');
    if (mode === 'week' || mode === 'month') {
      var s = new Date($('start-date').value + 'T00:00:00');
      $('end-date').value = isoDate(new Date(s.getTime() + 86400000 * (mode === 'week' ? 7 : 30)));
    }
    requestQuote();
  }

  function period() {
    var start = zoned($('start-date').value, $('start-time').value);
    var end = mode === 'hour'
      ? new Date(new Date(start).getTime() + 3600000 * Math.max(1, parseInt($('hours').value, 10) || 1)).toISOString()
      : zoned($('end-date').value, unit.check_out_time || '12:00');
    return { start: start, end: end };
  }

  function requestQuote() {
    clearTimeout(quoteTimer);
    quoteTimer = setTimeout(function () {
      if (!unit || !$('start-date').value || (mode !== 'hour' && !$('end-date').value)) return;
      var p = period();
      $('quote-error').hidden = true;
      call({ action: 'quote', unit_id: unit.unit_id, rate_unit: mode, start: p.start, end: p.end,
             adults: parseInt($('adults').value, 10) || 1, children: parseInt($('children').value, 10) || 0 })
        .then(renderQuote)
        .catch(function (e) { $('quote').hidden = true; $('quote-error').textContent = errorText(e); $('quote-error').hidden = false; });
    }, 300);
  }

  function renderQuote(q) {
    var box = $('quote'); box.innerHTML = '';
    function line(label, v, cls) { var r = el('div', 'line' + (cls ? ' ' + cls : '')); r.appendChild(el('span', null, label)); r.appendChild(el('span', null, money(v))); box.appendChild(r); }
    line(t('lodging'), q.base_amount);
    if (q.cleaning_fee > 0) line(t('cleaning'), q.cleaning_fee);
    if (q.tax_amount > 0) line(t('tax'), q.tax_amount);
    line(t('total'), q.total, 'total');
    if (q.deposit_amount > 0) line(t('deposit'), q.deposit_amount, 'muted');
    if (!q.available) box.appendChild(el('p', 'na', t('notAvailable')));
    $('submit').disabled = !q.available;
    box.hidden = false;
  }

  function loadBusy() {
    var from = new Date(calMonth.getFullYear(), calMonth.getMonth(), 1);
    var to = new Date(calMonth.getFullYear(), calMonth.getMonth() + 2, 0);
    call({ action: 'availability', unit_id: unit.unit_id, from: isoDate(from), to: isoDate(to) })
      .then(function (r) { busy = (r.busy || []).map(function (b) { return [new Date(b.start), new Date(b.end)]; }); renderCalendar(); })
      .catch(function () { busy = []; renderCalendar(); });
  }

  function renderCalendar() {
    var cal = $('calendar'); cal.innerHTML = '';
    var y = calMonth.getFullYear(), m = calMonth.getMonth();
    $('cal-title').textContent = new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric' }).format(calMonth);
    var first = new Date(y, m, 1);
    var monday = new Date(2024, 0, 1);
    for (var i = 0; i < 7; i++) cal.appendChild(el('div', 'h', new Intl.DateTimeFormat(lang, { weekday: 'narrow' }).format(new Date(monday.getTime() + i * 86400000))));
    var offset = (first.getDay() + 6) % 7;
    for (var k = 0; k < offset; k++) cal.appendChild(el('div'));
    var days = new Date(y, m + 1, 0).getDate();
    var today = new Date(); today.setHours(0, 0, 0, 0);
    var s = $('start-date').value;
    for (var d = 1; d <= days; d++) {
      var day = new Date(y, m, d), next = new Date(y, m, d + 1);
      var isBusy = busy.some(function (b) { return b[0] < next && b[1] > new Date(day.getTime() + 12 * 3600000); });
      var cell = el('div', 'd' + (isBusy ? ' busy' : '') + (day < today ? ' past' : '') + (isoDate(day) === s ? ' sel' : ''), String(d));
      cal.appendChild(cell);
    }
  }

  $('cal-prev').addEventListener('click', function () { calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() - 1, 1); loadBusy(); });
  $('cal-next').addEventListener('click', function () { calMonth = new Date(calMonth.getFullYear(), calMonth.getMonth() + 1, 1); loadBusy(); });
  ['start-date', 'start-time', 'end-date', 'hours', 'adults', 'children'].forEach(function (id) {
    $(id).addEventListener('change', function () { if (id === 'start-date') renderCalendar(); requestQuote(); });
  });
  $('back').addEventListener('click', function () { show('catalog'); });

  $('submit').addEventListener('click', function () {
    var btn = $('submit');
    btn.disabled = true;
    $('submit-error').hidden = true;
    var p = period();
    call({
      action: 'book', unit_id: unit.unit_id, rate_unit: mode, start: p.start, end: p.end,
      adults: parseInt($('adults').value, 10) || 1, children: parseInt($('children').value, 10) || 0,
      name: $('name').value, phone: $('phone').value, email: $('email').value, message: $('note').value,
      website: $('website').value
    }).then(function (r) {
      var until = r.option_expires_at ? new Date(r.option_expires_at).toLocaleString(lang === 'en' ? 'en-GB' : lang, { dateStyle: 'short', timeStyle: 'short' }) : '';
      $('done-text').textContent = fill(t('done'), { ref: r.reference, total: money(r.total), until: until });
      var phone = (catalog.organization.phone || '').replace(/[^0-9]/g, '');
      if (phone) {
        $('done-whatsapp').href = 'https://wa.me/' + phone + '?text=' + encodeURIComponent(fill(t('whatsappText'), { ref: r.reference }));
        $('done-whatsapp').hidden = false;
      }
      show('done');
      window.scrollTo(0, 0);
    }).catch(function (e) {
      btn.disabled = false;
      $('submit-error').textContent = errorText(e);
      $('submit-error').hidden = false;
    });
  });

  applyLanguage();
  if (!/^[a-z0-9]{10,32}$/.test(slug)) {
    show('error');
  } else {
    call({ action: 'catalog' }).then(function (c) {
      catalog = c;
      if (T[c.organization.locale]) lang = c.organization.locale;
      applyLanguage();
      renderCatalog();
    }).catch(function () { show('error'); });
  }
})();
