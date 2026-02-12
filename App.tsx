
import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  BarChart3, 
  FileText, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Download,
  ArrowLeft,
  Search,
  MapPin,
  Clock,
  HelpCircle,
  Menu,
  X,
  Stethoscope,
  Utensils,
  Building2,
  Factory,
  ShoppingBag,
  Award,
  Gavel
} from 'lucide-react';
import { CONFIG, TESTIMONIALS, FAQS } from './constants';

/**
 * COMPONENTS
 */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed w-full bg-white shadow-md z-50 py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 space-x-reverse">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">B2</span>
          </div>
          <span className="text-2xl font-extrabold text-slate-800">بناء</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-slate-600 hover:text-blue-700 font-semibold">عن الخدمة</a>
          <a href="#benefits" className="text-slate-600 hover:text-blue-700 font-semibold">المميزات</a>
          <a href="#pricing" className="text-slate-600 hover:text-blue-700 font-semibold">الأسعار</a>
          <a href="#faq" className="text-slate-600 hover:text-blue-700 font-semibold">الأسئلة الشائعة</a>
          <a href={CONFIG.WHATSAPP_LINK} className="bg-green-500 text-white px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-green-600 transition">
            <MessageCircle size={18} />
            تواصل واتساب
          </a>
        </div>

        <button className="md:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t p-4 flex flex-col gap-4 shadow-xl">
          <a href="#about" onClick={() => setIsOpen(false)}>عن الخدمة</a>
          <a href="#benefits" onClick={() => setIsOpen(false)}>المميزات</a>
          <a href="#faq" onClick={() => setIsOpen(false)}>الأسئلة الشائعة</a>
          <a href={CONFIG.WHATSAPP_LINK} className="bg-green-500 text-white p-3 rounded-lg text-center font-bold">تواصل واتساب</a>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  const variant = CONFIG.HERO_VARIANT;
  
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-bold text-sm mb-4">
            خبير معتمد في {CONFIG.CITY}
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            {variant === "A" ? (
              <>احصل على <span className="text-blue-700">دراسة جدوى معتمدة</span> تضمن نجاح مشروعك في {CONFIG.CITY}</>
            ) : (
              <>حول فكرتك إلى واقع: دراسة جدوى احترافية لتمويل مشروعك في {CONFIG.CITY}</>
            )}
          </h1>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            نحن في مكتب بناء نساعد رواد الأعمال في {CONFIG.CITY} وتحديداً في <span className="font-bold">{CONFIG.SECTOR}</span> على بناء نماذج مالية دقيقة وخطط عمل متكاملة مقبولة لدى جهات التمويل والمستثمرين.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#form" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-blue-800 shadow-lg shadow-blue-200 transition-all flex items-center justify-center gap-2">
              اطلب عرض سعر الآن
              <ArrowLeft size={20} />
            </a>
            <a href={CONFIG.WHATSAPP_LINK} className="bg-white text-green-600 border-2 border-green-500 px-8 py-4 rounded-xl font-bold text-lg text-center hover:bg-green-50 transition flex items-center justify-center gap-2">
              <MessageCircle size={22} />
              استشارة مجانية واتساب
            </a>
          </div>

          <div className="flex items-center gap-6 text-slate-500 font-semibold">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              معتمدة رسمياً
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              دعم فني مستمر
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="text-green-500" size={18} />
              تعديلات مجانية
            </div>
          </div>
        </div>

        <div id="form" className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-50">
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">احصل على استشارة أولية مجانية</h3>
          <form className="space-y-4" action={CONFIG.FORM_ENDPOINT} method="POST">
            <div>
              <label className="block text-slate-700 mb-1 font-semibold">الأسم الكريم</label>
              <input type="text" placeholder="مثال: محمد السعدي" className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
            </div>
            <div>
              <label className="block text-slate-700 mb-1 font-semibold">رقم الجوال</label>
              <input type="tel" placeholder="05XXXXXXXX" className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-left" dir="ltr" required />
            </div>
            <div>
              <label className="block text-slate-700 mb-1 font-semibold">نوع المشروع (اختياري)</label>
              <select className="w-full p-4 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none">
                <option>{CONFIG.SECTOR}</option>
                <option>مطاعم ومقاهي</option>
                <option>تجارة إلكترونية</option>
                <option>تطوير عقاري</option>
                <option>أخرى</option>
              </select>
            </div>
            <button className="w-full py-4 bg-blue-700 text-white rounded-xl font-bold text-xl hover:bg-blue-800 transition shadow-lg shadow-blue-100">
              أرسل الطلب الآن
            </button>
            <p className="text-xs text-slate-400 text-center">نعدك برد سريع خلال 30 دقيقة في أوقات العمل الرسمية.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

const EnhancedTrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Core Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 text-center">
          {[
            { label: "دراسة جدوى ناجحة", val: "+1000", icon: <FileText className="mx-auto mb-3 text-blue-700" size={32} /> },
            { label: "سنة من الخبرة", val: "+12", icon: <Clock className="mx-auto mb-3 text-blue-700" size={32} /> },
            { label: "نسبة قبول التمويل", val: "98%", icon: <TrendingUp className="mx-auto mb-3 text-blue-700" size={32} /> },
            { label: "دعم فني مستمر", val: "24/7", icon: <Users className="mx-auto mb-3 text-blue-700" size={32} /> }
          ].map((stat, i) => (
            <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-lg transition">
              {stat.icon}
              <div className="text-4xl font-extrabold text-slate-900 mb-1">{stat.val}</div>
              <div className="text-slate-500 font-bold text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Legal Trust Placeholders */}
        <div className="bg-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden mb-20">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold mb-4">مكتب استشارات مرخص وموثوق</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">نحن نلتزم بأعلى معايير المصداقية القانونية والمهنية في المملكة العربية السعودية.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-4 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <ShieldCheck className="text-green-500" size={40} />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold mb-1">سجل تجاري رقم</div>
                  <div className="text-lg font-mono">1010XXXXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <Gavel className="text-blue-400" size={40} />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold mb-1">الرقم الضريبي</div>
                  <div className="text-lg font-mono">300XXXXXXXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-slate-800 p-6 rounded-2xl border border-slate-700">
                <Award className="text-yellow-500" size={40} />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold mb-1">ترخيص مهني</div>
                  <div className="text-lg font-mono">MOH-XXXXX</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sectors We Serve */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-10">قطاعات تخصصنا فيها لسنوات</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all">
             {[
               { icon: <Stethoscope size={32} />, label: "القطاع الطبي" },
               { icon: <Utensils size={32} />, label: "المطاعم" },
               { icon: <Building2 size={32} />, label: "العقارات" },
               { icon: <Factory size={32} />, label: "المصانع" },
               { icon: <ShoppingBag size={32} />, label: "التجارة" }
             ].map((s, idx) => (
               <div key={idx} className="flex flex-col items-center gap-2">
                 <div className="p-5 bg-slate-100 rounded-full text-slate-800">{s.icon}</div>
                 <span className="font-bold text-sm">{s.label}</span>
               </div>
             ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContentSection = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center">لماذا تعتبر دراسة الجدوى حجر الزاوية لمشروعك في {CONFIG.CITY}؟</h2>
        <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 text-right">
          <p>
            تعد <span className="font-bold text-blue-700">دراسة الجدوى</span> أكثر من مجرد متطلب ورقي لجهات التمويل؛ إنها خارطة الطريق التي تقيك من الفشل المالي والتشغيلي. في سوق تنافسي مثل مدينة {CONFIG.CITY}، وتحديداً في <span className="font-bold">{CONFIG.SECTOR}</span>، لا مكان للارتجال.
          </p>
          <p>
            في مكتب بناء، نقدم لك تحليلاً عميقاً يشمل:
          </p>
          <ul className="grid md:grid-cols-2 gap-4 list-none p-0">
            {[
              "تحليل السوق وحجم الطلب الفعلي",
              "تحديد المنافسين المباشرين واستراتيجياتهم",
              "التوقعات المالية لـ 5 سنوات قادمة",
              "تحليل الحساسية للمتغيرات الاقتصادية",
              "خطة التسويق والاستقطاب",
              "الهيكل التنظيمي والاحتياجات البشرية"
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-2 bg-white p-3 rounded-lg border border-slate-200">
                <CheckCircle2 className="text-blue-700" size={20} />
                <span className="font-semibold text-slate-800">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            دراستنا ليست مجرد أرقام، بل هي تحليل للواقع التنظيمي في المملكة، بما في ذلك توافق المشروع مع <span className="font-bold">رؤية السعودية 2030</span> واشتراطات الجهات الحكومية مثل وزارة الصحة، البلدية، وصندوق التنمية.
          </p>
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const features = [
    { name: "الدقة المالية", bena: "نموذج مالي تفاعلي (Excel)", others: "جدول ثابت غير مرن" },
    { name: "اعتماد جهات التمويل", bena: "مضمونة 100%", others: "غير مؤكدة" },
    { name: "الدعم بعد التسليم", bena: "3 أشهر تعديلات مجانية", others: "ينتهي بانتهاء الدفع" },
    { name: "تحليل الحساسية", bena: "شامل لكل السيناريوهات", others: "غير موجود" },
    { name: "سرية البيانات", bena: "اتفاقية NDA ملزمة", others: "شفهية فقط" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">قارن بين مكتب بناء والمكاتب غير المتخصصة</h2>
        <div className="overflow-x-auto rounded-3xl shadow-xl bg-white border border-slate-200">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-6 text-xl">الميزة</th>
                <th className="p-6 text-xl text-center bg-blue-700">مكتب بناء</th>
                <th className="p-6 text-xl text-center">مكاتب أخرى</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f, i) => (
                <tr key={i} className="border-b border-slate-100">
                  <td className="p-6 font-bold text-slate-800">{f.name}</td>
                  <td className="p-6 text-center text-blue-700 font-bold bg-blue-50/30">{f.bena}</td>
                  <td className="p-6 text-center text-slate-500">{f.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section className="py-20 bg-blue-700 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 blur-3xl opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-extrabold mb-6 leading-tight">هدية مجانية: نموذج دراسة جدوى احترافي (PDF)</h2>
            <p className="text-xl text-blue-100 mb-8">
              هل ترغب في معرفة كيف تُبنى الدراسات الناجحة؟ قمنا بإعداد نموذج مصغر يحتوي على أهم العناصر المطلوبة من البنوك وجهات التمويل في المملكة.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle2 className="text-blue-300" />
                شرح لعناصر الميزانية التشغيلية
              </li>
              <li className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle2 className="text-blue-300" />
                طريقة حساب نقطة التعادل
              </li>
              <li className="flex items-center gap-3 text-lg font-semibold">
                <CheckCircle2 className="text-blue-300" />
                نصائح لتجاوز رفض القروض
              </li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl text-slate-900">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-red-100 text-red-600 rounded-2xl">
                <FileText size={48} />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-6 text-center">أدخل بياناتك لتصلك النسخة مباشرة</h3>
            <form className="space-y-4">
              <input type="text" placeholder="الاسم" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" required />
              <input type="tel" placeholder="رقم الواتساب" className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-left" dir="ltr" required />
              <button className="w-full py-4 bg-blue-700 text-white rounded-xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-blue-800 transition shadow-lg">
                <Download size={24} />
                تحميل النموذج مجاناً
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQSection = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-slate-900 mb-4 text-center">الأسئلة الشائعة</h2>
        <p className="text-center text-slate-500 mb-12 font-semibold">كل ما تحتاج لمعرفته حول {CONFIG.PRIMARY_KEYWORD} وخدماتنا الاستشارية.</p>
        <div className="space-y-4">
          {FAQS.map((item, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-blue-300 transition-colors">
              <button 
                className="w-full p-6 text-right flex justify-between items-center bg-white font-bold text-slate-800"
                onClick={() => setActive(active === idx ? null : idx)}
              >
                <span className="text-lg leading-snug">{item.q}</span>
                <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-700 transition-transform ${active === idx ? 'rotate-180 bg-blue-700 text-white' : ''}`}>
                  <HelpCircle size={20} />
                </div>
              </button>
              {active === idx && (
                <div className="p-6 bg-blue-50/30 text-slate-600 leading-relaxed border-t border-blue-50 animate-fadeIn">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold mb-4">ماذا يقول عملاؤنا؟</h2>
          <p className="text-slate-400">فخورون بثقة رواد الأعمال في مختلف مناطق المملكة.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, star) => <span key={star}>★</span>)}
                </div>
                <p className="text-lg mb-6 italic text-slate-300 leading-relaxed">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 mt-4 border-t border-slate-700 pt-6">
                <div className="w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center font-bold text-xl">
                  {t.name.split(' ')[1].charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-sm text-slate-400">{t.sector}</div>
                  <div className="text-xs text-blue-400 font-bold">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InternalBlogLinks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-slate-800 border-r-4 border-blue-700 pr-4">مقالات قد تهمك في عالم الاستثمار</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CONFIG.BLOG_LINKS.map((link, idx) => (
            <a key={idx} href={link.url} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md hover:border-blue-200 transition group">
              <h3 className="font-bold text-slate-700 group-hover:text-blue-700 transition mb-4">{link.title}</h3>
              <span className="text-blue-600 text-sm font-bold flex items-center gap-1">
                اقرأ المزيد
                <ArrowLeft size={14} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 space-x-reverse mb-6">
              <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">B2</span>
              </div>
              <span className="text-2xl font-extrabold text-slate-800">بناء للاستشارات</span>
            </div>
            <p className="text-slate-500 max-w-md leading-relaxed font-semibold">
              نحن مكتب استشارات سعودي متخصص في إعداد دراسات الجدوى والخطط الاستراتيجية للمشاريع المتوسطة والصغيرة. ملتزمون بتقديم أعلى معايير الدقة والاحترافية.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-6 text-lg">روابط سريعة</h4>
            <ul className="space-y-4 text-slate-500 font-semibold">
              <li><a href="#" className="hover:text-blue-700 transition">اتصل بنا</a></li>
              <li><a href="#" className="hover:text-blue-700 transition">عن بناء</a></li>
              <li><a href="#" className="hover:text-blue-700 transition">سياسة الخصوصية</a></li>
              <li><a href="#" className="hover:text-blue-700 transition">الشروط والأحكام</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-6 text-lg">بيانات التواصل</h4>
            <ul className="space-y-4 text-slate-500 font-semibold">
              <li className="flex items-center gap-3">
                <MapPin className="text-blue-700" size={18} />
                المملكة العربية السعودية، {CONFIG.CITY}
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-blue-700" size={18} />
                {CONFIG.PHONE}
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="text-green-500" size={18} />
                مكتب مرخص رسمياً
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-200 pt-10 text-center text-slate-400 font-bold">
          <p>© {new Date().getFullYear()} بناء للاستشارات الاقتصادية. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => {
  return (
    <a 
      href={CONFIG.WHATSAPP_LINK}
      className="fixed bottom-8 right-8 bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50"
      aria-label="تواصل عبر الواتساب"
    >
      <MessageCircle size={32} />
      <span className="absolute -top-1 -right-1 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500 border-2 border-white"></span>
      </span>
    </a>
  );
};

/**
 * SCHEMA COMPONENT
 */
const SchemaMarkup = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQS.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "مكتب بناء لدراسات الجدوى",
    "image": "https://picsum.photos/400/300",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": CONFIG.CITY,
      "addressCountry": "SA"
    },
    "telephone": CONFIG.PHONE,
    "priceRange": "$$$"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify([faqSchema, localBusinessSchema])}
    </script>
  );
};

const App: React.FC = () => {
  useEffect(() => {
    // Tracking Placeholders
    console.log("Tracking Initialized: GTM-XXXXXX, Meta-Pixel-XXXXXX");
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-blue-100 selection:text-blue-900 text-right">
      <SchemaMarkup />
      <Navbar />
      <main>
        <Hero />
        <EnhancedTrustSection />
        <ContentSection />
        <ComparisonTable />
        
        {/* Mid-Page CTA */}
        <section className="py-12 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-right">
                <h3 className="text-2xl font-bold text-slate-800 mb-2">هل أنت جاهز للبدء بمشروعك؟</h3>
                <p className="text-slate-600 font-semibold">احصل على تحليل مبدئي مجاني لمشروعك الآن عبر الواتساب.</p>
              </div>
              <a href={CONFIG.WHATSAPP_LINK} className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition shadow-lg flex items-center gap-2">
                <MessageCircle size={20} />
                تحدث مع استشاري
              </a>
            </div>
          </div>
        </section>

        <LeadMagnet />

        {/* Local Cues Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 text-blue-700 font-bold mb-4">
              <MapPin size={24} />
              <span>نخدمك أينما كنت في {CONFIG.CITY}</span>
            </div>
            <h2 className="text-3xl font-extrabold mb-8">مكتب دراسة جدوى في {CONFIG.CITY} وبجميع أحياء المنطقة</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12">
              سواء كنت في شمال {CONFIG.CITY} أو شرقها، فريقنا جاهز لزيارتك أو الاجتماع بك عبر الاتصال المرئي لمناقشة تفاصيل مشروعك بعناية فائقة.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {["حي العليا", "حي النخيل", "حي الملقا", "حي اليرموك", "حي الصحافة", "حي الياسمين", "حي النرجس", "حي الروضة"].map(district => (
                <div key={district} className="p-3 bg-slate-50 rounded-lg text-slate-700 font-bold border border-slate-100 italic">
                  {district}
                </div>
              ))}
            </div>
          </div>
        </section>

        <Testimonials />
        <FAQSection />
        <InternalBlogLinks />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
