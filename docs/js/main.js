(() => {
  const CONFIG = {
    CITY: "الرياض",
    CITY_EN: "Riyadh",
    SECTOR: "القطاع الطبي",
    SECTOR_EN: "Medical",
    PRIMARY_KEYWORD: "دراسة جدوى",
    PHONE: "05XXXXXXXX",
    WHATSAPP_LINK: "https://wa.me/9665XXXXXXXX",
    FORM_ENDPOINT: "#",
    LEAD_MAGNET_URL: "assets/feasibility-template.pdf",
    BLOG_LINKS: [
      { title: "أهمية دراسة الجدوى للمشاريع الطبية", url: "#" },
      { title: "كيف تحصل على تمويل لمشروعك في الرياض؟", url: "#" },
      { title: "دليل اشتراطات وزارة الصحة للمجمعات الطبية", url: "#" },
      { title: "عناصر الخطة المالية الناجحة", url: "#" }
    ],
    HERO_VARIANT: "A"
  };

  const TESTIMONIALS = [
    { name: "أ. محمد س.", city: "الرياض", sector: "القطاع الطبي (مجمع عيادات)", text: "بناء ساعدوني في الحصول على ترخيص وزارة الصحة بسرعة وبدراسة جدوى دقيقة جداً سهلت لنا الحصول على قرض بنك التنمية." },
    { name: "د. سارة ع.", city: "جدة", sector: "مركز تجميل ولياقة", text: "النموذج المالي الذي قدموه كان احترافياً ومقبولاً من قبل البنك التنموي من أول مرة. فريق متعاون جداً." },
    { name: "م. خالد ب.", city: "الرياض", sector: "قطاع المطاعم والمقاهي", text: "سرعة في التنفيذ ودقة في البيانات السوقية لمدينة الرياض. التحليل المالي ساعدنا في توزيع الميزانية بشكل صحيح." },
    { name: "أ. نورة ف.", city: "الدمام", sector: "تجارة إلكترونية ولوجستيك", text: "تعامل راقي وفريق عمل خبير باشتراطات السوق السعودي. التعديلات كانت سريعة جداً حتى بعد استلام العمل." },
    { name: "د. إبراهيم خ.", city: "الرياض", sector: "مختبر طبي تخصصي", text: "دراسة الجدوى كانت مفتاح الحصول على تمويل ريادة. تم التركيز على نقاط القوة في مشروعنا بشكل ذكي." }
  ];

  const FAQS = [
    { q: "ما هي تكلفة إعداد دراسة الجدوى؟", a: "تعتمد التكلفة على حجم المشروع وتعقيده الفني. نحن نقدم تسعيراً عادلاً يبدأ من مبالغ مناسبة للمشاريع الناشئة، ونوفر عروض أسعار دقيقة بعد الجلسة الاستشارية الأولى." },
    { q: "كم تستغرق مدة إعداد دراسة الجدوى بالكامل؟", a: "تتراوح المدة عادة بين 7 إلى 15 يوم عمل. تعتمد السرعة أيضاً على سرعة تزويدنا بالبيانات الأساسية الخاصة بموقع المشروع وتوجهات العميل." },
    { q: "هل الدراسة معتمدة لدى بنك التنمية الاجتماعية وريادة؟", a: "نعم، جميع دراساتنا تصاغ وفق المعايير والشروط المحدثة لجهات التمويل الكبرى في المملكة (صندوق التنمية، ريادة، بنك التسليف، وصندوق التنمية السياحي)." },
    { q: "ما هي سياسة التعديلات بعد تسليم الدراسة؟", a: "نقدم دعماً فنياً وتعديلات مجانية لمدة 3 أشهر على الدراسة لضمان توافقها مع أي ملاحظات قد ترد من جهات التمويل أو الجهات الحكومية المرخصة." },
    { q: "كيف يتم ضمان سرية فكرتي ومعلوماتي؟", a: "السرية هي أولويتنا. نوقع اتفاقية عدم إفصاح (NDA) رسمية مع العميل قبل البدء في أي عمل لضمان حماية الملكية الفكرية لجميع البيانات والأفكار." },
    { q: "ما هي البيانات التي يجب عليّ تزويدكم بها؟", a: "نحتاج بشكل أساسي لنوع المشروع، الموقع المقترح، الميزانية التقديرية، وأي اشتراطات خاصة بالعميل. نحن نتكفل بالباقي من مسح سوق وتحليل مالي." },
    { q: "ما هي مخرجات العمل التي سأستلمها؟", a: "ستحصل على ملف PDF تفصيلي، ملف Excel للنموذج المالي التفاعلي، وعرض تقديمي (Pitch Deck) للمستثمرين إذا تطلبت الخدمة ذلك." },
    { q: "هل تساعدون في استخراج التراخيص الحكومية؟", a: "دراساتنا تشمل قسماً كاملاً عن المتطلبات القانونية والتنظيمية، ولكننا لا نقوم بإجراءات التعقيب. نوجهك للطريق الصحيح لتفادي الأخطاء." },
    { q: "هل يمكنني تحديث دراسة قديمة لديكم؟", a: "نعم، نقدم خدمة تحديث الدراسات المالية والسوقية للدراسات التي مر عليها أكثر من 6 أشهر لمواكبة التغيرات الاقتصادية الحالية." },
    { q: "هل يتم تحليل المنافسين في منطقتي الجغرافية؟", a: "بكل تأكيد، نقوم بمسح ميداني ورقمي للمنافسين في الحي والمدينة المستهدفة لتحديد الفجوات التسويقية والمزايا التنافسية لمشروعك." },
    { q: "ما هي طرق الدفع المتاحة؟", a: "نوفر طرق دفع مرنة تشمل التحويل البنكي، ومدفوعات البطاقة. يتم العمل بنظام الدفعات (دفعة تعاقد ودفعة تسليم) لضمان حقوق الطرفين." },
    { q: "لماذا أختار مكتب بناء بدلاً من النماذج الجاهزة؟", a: "النماذج الجاهزة تفتقر لدقة الأرقام السوقية الحقيقية وتفشل غالباً في اجتياز لجان التقييم بالبنوك. نحن نصمم دراسة خاصة بكل عميل بناءً على معطيات السوق اللحظية." }
  ];

  const features = [
    { name: "الدقة المالية", bena: "نموذج مالي تفاعلي (Excel)", others: "جدول ثابت غير مرن" },
    { name: "اعتماد جهات التمويل", bena: "مضمونة 100%", others: "غير مؤكدة" },
    { name: "الدعم بعد التسليم", bena: "3 أشهر تعديلات مجانية", others: "ينتهي بانتهاء الدفع" },
    { name: "تحليل الحساسية", bena: "شامل لكل السيناريوهات", others: "غير موجود" },
    { name: "سرية البيانات", bena: "اتفاقية NDA ملزمة", others: "شفهية فقط" }
  ];

  const heroChecks = ["معتمدة رسمياً", "دعم فني مستمر", "تعديلات مجانية"];
  const aboutChecks = [
    "تحليل السوق وحجم الطلب الفعلي",
    "تحديد المنافسين المباشرين واستراتيجياتهم",
    "التوقعات المالية لـ 5 سنوات قادمة",
    "تحليل الحساسية للمتغيرات الاقتصادية",
    "خطة التسويق والاستقطاب",
    "الهيكل التنظيمي والاحتياجات البشرية"
  ];
  const stats = [
    { label: "دراسة جدوى ناجحة", val: "+1000", icon: "#i-file-text" },
    { label: "سنة من الخبرة", val: "+12", icon: "#i-clock" },
    { label: "نسبة قبول التمويل", val: "98%", icon: "#i-trending" },
    { label: "دعم فني مستمر", val: "24/7", icon: "#i-users" }
  ];

  const legal = [
    { label: "سجل تجاري رقم", value: "1010XXXXXX", icon: "#i-shield", className: "green" },
    { label: "الرقم الضريبي", value: "300XXXXXXXXX", icon: "#i-gavel", className: "blue" },
    { label: "ترخيص مهني", value: "MOH-XXXXX", icon: "#i-award", className: "yellow" }
  ];

  const sectors = [
    { label: "القطاع الطبي", icon: "#i-stethoscope" },
    { label: "المطاعم", icon: "#i-utensils" },
    { label: "العقارات", icon: "#i-building" },
    { label: "المصانع", icon: "#i-factory" },
    { label: "التجارة", icon: "#i-bag" }
  ];

  const leadItems = ["شرح لعناصر الميزانية التشغيلية", "طريقة حساب نقطة التعادل", "نصائح لتجاوز رفض القروض"];
  const districts = ["حي العليا", "حي النخيل", "حي الملقا", "حي اليرموك", "حي الصحافة", "حي الياسمين", "حي النرجس", "حي الروضة"];

  const icon = (href, classes = "icon") => `<svg class="${classes}" aria-hidden="true"><use href="${href}"></use></svg>`;

  function setLinksAndBasics() {
    const waIds = ["nav-whatsapp", "mobile-whatsapp", "hero-whatsapp", "cta-whatsapp", "float-whatsapp"];
    waIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.setAttribute("href", CONFIG.WHATSAPP_LINK);
    });

    document.querySelector('.form[action="#"]')?.setAttribute("action", CONFIG.FORM_ENDPOINT);
    document.getElementById("year").textContent = String(new Date().getFullYear());

    document.getElementById("hero-city-pill").textContent = `خبير معتمد في ${CONFIG.CITY}`;
    document.getElementById("hero-title").innerHTML =
      CONFIG.HERO_VARIANT === "A"
        ? `احصل على <span class="accent">دراسة جدوى معتمدة</span> تضمن نجاح مشروعك في ${CONFIG.CITY}`
        : `حول فكرتك إلى واقع: دراسة جدوى احترافية لتمويل مشروعك في ${CONFIG.CITY}`;

    document.getElementById("hero-copy").innerHTML = `نحن في مكتب بناء نساعد رواد الأعمال في ${CONFIG.CITY} وتحديداً في <strong>${CONFIG.SECTOR}</strong> على بناء نماذج مالية دقيقة وخطط عمل متكاملة مقبولة لدى جهات التمويل والمستثمرين.`;

    document.getElementById("about-title").textContent = `لماذا تعتبر دراسة الجدوى حجر الزاوية لمشروعك في ${CONFIG.CITY}؟`;
    document.getElementById("about-p1").innerHTML = `تعد <span class="accent">دراسة الجدوى</span> أكثر من مجرد متطلب ورقي لجهات التمويل؛ إنها خارطة الطريق التي تقيك من الفشل المالي والتشغيلي. في سوق تنافسي مثل مدينة ${CONFIG.CITY}، وتحديداً في <strong>${CONFIG.SECTOR}</strong>، لا مكان للارتجال.`;
    document.getElementById("about-p2").innerHTML = `دراستنا ليست مجرد أرقام، بل هي تحليل للواقع التنظيمي في المملكة، بما في ذلك توافق المشروع مع <strong>رؤية السعودية 2030</strong> واشتراطات الجهات الحكومية مثل وزارة الصحة، البلدية، وصندوق التنمية.`;

    document.getElementById("local-cues-inline").textContent = `نخدمك أينما كنت في ${CONFIG.CITY}`;
    document.getElementById("local-cues-title").textContent = `مكتب دراسة جدوى في ${CONFIG.CITY} وبجميع أحياء المنطقة`;
    document.getElementById("local-cues-copy").textContent = `سواء كنت في شمال ${CONFIG.CITY} أو شرقها، فريقنا جاهز لزيارتك أو الاجتماع بك عبر الاتصال المرئي لمناقشة تفاصيل مشروعك بعناية فائقة.`;

    document.getElementById("faq-sub").textContent = `كل ما تحتاج لمعرفته حول ${CONFIG.PRIMARY_KEYWORD} وخدماتنا الاستشارية.`;
  }

  function renderLists() {
    const sectorSelect = document.getElementById("consult-sector");
    [CONFIG.SECTOR, "مطاعم ومقاهي", "تجارة إلكترونية", "تطوير عقاري", "أخرى"].forEach((opt) => {
      const option = document.createElement("option");
      option.textContent = opt;
      option.value = opt;
      sectorSelect.appendChild(option);
    });

    const heroBadges = document.getElementById("hero-badges");
    heroChecks.forEach((text) => {
      const div = document.createElement("div");
      div.className = "badge-item";
      div.innerHTML = `${icon("#i-check-circle", "icon icon-18")} ${text}`;
      heroBadges.appendChild(div);
    });

    const statsGrid = document.getElementById("stats-grid");
    stats.forEach((item) => {
      const div = document.createElement("div");
      div.className = "stat-card";
      div.innerHTML = `
        <div class="icon-wrap">${icon(item.icon, "icon icon-32")}</div>
        <div class="val">${item.val}</div>
        <div class="label">${item.label}</div>
      `;
      statsGrid.appendChild(div);
    });

    const legalGrid = document.getElementById("legal-grid");
    legal.forEach((item) => {
      const div = document.createElement("div");
      div.className = "legal-item";
      const color = item.className === "green" ? "#22c55e" : item.className === "yellow" ? "#eab308" : "#60a5fa";
      div.innerHTML = `
        <span style="color:${color};display:grid;place-items:center">${icon(item.icon, "icon")}</span>
        <div>
          <div class="label">${item.label}</div>
          <div class="value">${item.value}</div>
        </div>
      `;
      legalGrid.appendChild(div);
    });

    const sectorsRow = document.getElementById("sectors-row");
    sectors.forEach((item) => {
      const div = document.createElement("div");
      div.className = "sector-item";
      div.innerHTML = `<div class="bubble">${icon(item.icon, "icon icon-32")}</div><span>${item.label}</span>`;
      sectorsRow.appendChild(div);
    });

    const checkGrid = document.getElementById("check-grid");
    aboutChecks.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${icon("#i-check-circle", "icon icon-20")} <span>${item}</span>`;
      checkGrid.appendChild(li);
    });

    const tbody = document.getElementById("comparison-tbody");
    features.forEach((item) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${item.name}</td><td>${item.bena}</td><td>${item.others}</td>`;
      tbody.appendChild(tr);
    });

    const leadList = document.getElementById("lead-list");
    leadItems.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `${icon("#i-check-circle", "icon icon-20")} ${item}`;
      leadList.appendChild(li);
    });

    const districtGrid = document.getElementById("district-grid");
    districts.forEach((district) => {
      const div = document.createElement("div");
      div.textContent = district;
      districtGrid.appendChild(div);
    });

    const testimonialsGrid = document.getElementById("testimonials-grid");
    TESTIMONIALS.forEach((item) => {
      const lastPart = item.name.split(" ")[1] || item.name;
      const avatarLetter = lastPart.charAt(0);
      const card = document.createElement("article");
      card.className = "t-card";
      card.innerHTML = `
        <div>
          <div class="stars" aria-label="5 من 5 نجوم">★★★★★</div>
          <p>"${item.text}"</p>
        </div>
        <div class="t-meta">
          <div class="avatar">${avatarLetter}</div>
          <div>
            <div class="t-name">${item.name}</div>
            <div class="t-sector">${item.sector}</div>
            <div class="t-city">${item.city}</div>
          </div>
        </div>
      `;
      testimonialsGrid.appendChild(card);
    });

    const faqList = document.getElementById("faq-list");
    FAQS.forEach((item, idx) => {
      const article = document.createElement("article");
      article.className = "faq-item";
      article.innerHTML = `
        <h3>
          <button class="faq-btn" type="button" aria-expanded="false" aria-controls="faq-panel-${idx}" id="faq-btn-${idx}">
            <span class="q">${item.q}</span>
            <span class="faq-icon">${icon("#i-help", "icon icon-20")}</span>
          </button>
        </h3>
        <div class="faq-panel" id="faq-panel-${idx}" role="region" aria-labelledby="faq-btn-${idx}">${item.a}</div>
      `;
      faqList.appendChild(article);
    });

    const blogGrid = document.getElementById("blog-grid");
    CONFIG.BLOG_LINKS.forEach((item) => {
      const a = document.createElement("a");
      a.className = "blog-card";
      a.href = item.url;
      a.innerHTML = `
        <h3>${item.title}</h3>
        <span class="blog-link">اقرأ المزيد ${icon("#i-arrow-left", "icon")}</span>
      `;
      blogGrid.appendChild(a);
    });

    const contactList = document.getElementById("contact-list");
    contactList.innerHTML = `
      <li>${icon("#i-map-pin", "icon icon-18")} <span>المملكة العربية السعودية، ${CONFIG.CITY}</span></li>
      <li>${icon("#i-phone", "icon icon-18")} <span dir="ltr">${CONFIG.PHONE}</span></li>
      <li>${icon("#i-shield", "icon icon-18 shield")} <span>مكتب مرخص رسمياً</span></li>
    `;
  }

  function setupNavbar() {
    const btn = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    const closeMenu = () => {
      btn.setAttribute("aria-expanded", "false");
      btn.setAttribute("aria-label", "فتح القائمة");
      menu.hidden = true;
    };

    btn.addEventListener("click", () => {
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.setAttribute("aria-label", expanded ? "فتح القائمة" : "إغلاق القائمة");
      menu.hidden = expanded;
    });

    menu.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }

  function setupFaq() {
    const buttons = Array.from(document.querySelectorAll(".faq-btn"));
    let active = null;

    const close = (btn) => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", "false");
      panel.classList.remove("open");
      panel.hidden = true;
    };

    const open = (btn) => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      btn.setAttribute("aria-expanded", "true");
      panel.hidden = false;
      panel.classList.add("open");
    };

    buttons.forEach((btn) => {
      const panel = document.getElementById(btn.getAttribute("aria-controls"));
      panel.hidden = true;

      btn.addEventListener("click", () => {
        if (active && active !== btn) close(active);
        const expanded = btn.getAttribute("aria-expanded") === "true";
        if (expanded) {
          close(btn);
          active = null;
        } else {
          open(btn);
          active = btn;
        }
      });
    });
  }

  function setupForms() {
    const forms = document.querySelectorAll("form");
    forms.forEach((form) => {
      form.addEventListener("submit", (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          form.reportValidity();
          return;
        }

        if (form.id === "lead-form") {
          event.preventDefault();
          window.location.href = CONFIG.LEAD_MAGNET_URL;
        }
      });
    });
  }

  function renderSchema() {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a
        }
      }))
    };

    const localBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "مكتب بناء لدراسات الجدوى",
      image: "https://picsum.photos/400/300",
      address: {
        "@type": "PostalAddress",
        addressLocality: CONFIG.CITY,
        addressCountry: "SA"
      },
      telephone: CONFIG.PHONE,
      priceRange: "$$$"
    };

    const schemaNode = document.getElementById("schema-markup");
    schemaNode.textContent = JSON.stringify([faqSchema, localBusinessSchema]);
  }

  function init() {
    setLinksAndBasics();
    renderLists();
    setupNavbar();
    setupFaq();
    setupForms();
    renderSchema();
    console.log("Tracking Initialized: GTM-XXXXXX, Meta-Pixel-XXXXXX");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
