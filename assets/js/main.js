/**
 * ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS
 * شركة النخيلان للمحاماة والاستشارات القانونية
 * Bilingual Engine (EN / AR), Moving Responsive Hero, & Security Layer
 */

(function () {
    'use strict';

    // Anti-clickjacking check
    if (window.top !== window.self) {
        try {
            window.top.location = window.self.location;
        } catch (e) {}
    }

    // Strict XSS Input Sanitizer
    function sanitizeInput(str) {
        if (typeof str !== 'string') return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#x27;')
            .replace(/\//g, '&#x2F;')
            .replace(/javascript:/gi, '')
            .replace(/on\w+=/gi, '')
            .trim();
    }

    // Client-side rate limiter
    const RATE_LIMIT_MS = 120000;
    const MAX_SUBMITS = 3;
    let submitLog = [];

    function isRateLimited() {
        const now = Date.now();
        submitLog = submitLog.filter(t => now - t < RATE_LIMIT_MS);
        if (submitLog.length >= MAX_SUBMITS) return true;
        submitLog.push(now);
        return false;
    }

    // Complete Bilingual Dictionary
    const i18n = {
        en: {
            page_title: "ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS | شركة النخيلان للمحاماة والاستشارات القانونية",
            header_logo_ar_1: "شركة النخيلان للمحاماة",
            header_logo_ar_2: "والاستشارات القانونية",
            nav_about: "About Us",
            nav_services: "Our Services",
            nav_partners: "Partners",
            btn_request_meeting: "Request a meeting",
            btn_get_in_touch: "Get in Touch",
            btn_menu: "Menu",
            drawer_home: "Home",
            drawer_experience: "Our Experience",
            drawer_methodology: "Our Approach",
            drawer_office: "Our Offices",
            drawer_accred: "Accreditations",

            // Hero (Image 2)
            hero_eyebrow: "ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS",
            hero_h1_line1: "More than",
            hero_h1_line2: "a law firm.",
            hero_subtitle: "Legal insight for your business. Care for your rights.",
            hero_link_1: "Explore Our Services",
            hero_link_2: "Virtual Legal Department",

            // About / Below Hero (Image 3: Bronze Pyramids)
            about_eyebrow: "About Us",
            about_h2_1: "We understand",
            about_h2_2: "your business.",
            about_h2_3: "We protect your",
            about_h2_4: "interests.",
            about_desc: "ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS is a Saudi law firm and legal consultancy. We support businesses and individuals with an approach that combines commercial understanding with care for their rights.",
            about_link_1: "Experience that works together for you",
            about_link_2: "Our Vision & Approach",

            // Experience
            exp_eyebrow: "Legal experience & multidisciplinary team",
            exp_h2_1: "Our experience.",
            exp_h2_2: "Informing your decisions.",
            exp_desc: "Our legal and Sharia experience comes together to give you clear counsel, accurate contract structuring, and decisive representation before all courts and committees in the Kingdom.",
            exp_link: "Explore our team",
            exp_circle_text: "years of combined legal & Sharia experience",
            exp_col1_t: "Broad practice",
            exp_col1_d: "Comprehensive coverage across commercial, corporate, real estate, labor, administrative, and Sharia law.",
            exp_col2_t: "Sound counsel",
            exp_col2_d: "Preventative legal strategies and precise regulatory opinions tailored to your objectives.",
            exp_col3_t: "Balanced capability",
            exp_col3_d: "Combining negotiation diplomacy with forceful courtroom advocacy across the Kingdom.",

            // Methodology
            meth_eyebrow: "How we work with you",
            meth_h2_1: "With you in every decision.",
            meth_h2_2: "And every detail.",
            meth_intro: "Working with Alnkhailan Law Firm means direct partner involvement, transparent progress milestones, and legal solutions built around your long-term protection.",
            meth_tab_1: "Comprehensive Assessment",
            meth_tab_2: "Considered Commitments",
            meth_tab_3: "Legal Precision",
            meth_tab_4: "Continuous Protection",
            meth_panel_tag: "Our Approach",
            meth_panel_h3: "Clear relationships.",
            meth_panel_h4: "Considered commitments.",
            meth_panel_p: "We define scope, timelines, and legal strategies transparently from day one, ensuring every client commitment is backed by thorough legal research and dedicated execution.",
            meth_panel_cta: "Request a consultation",

            lw_eyebrow: "Client Follow-up",
            lw_h3_1: "Your legal work,",
            lw_h3_2: "clearly in view.",
            lw_desc: "Track every stage of your contract review, litigation pleading, or corporate filing with structured milestones and direct partner updates.",
            lw_cta: "Start your legal file",
            lw_card_title: "Contract & Case Review Board",
            lw_stage_1: "Legal & Sharia Assessment",
            lw_stage_2: "Drafting & Documentary Audit",
            lw_stage_3: "Court Representation & Pleading",
            lw_stage_4: "Final Judgment & Enforcement",
            lw_done: "Completed",
            lw_active: "In Progress",
            lw_sched: "Scheduled",

            // Services
            srv_eyebrow: "Our Services",
            srv_h2_1: "For your business and your rights.",
            srv_h2_2: "Expertise across every dimension.",
            srv_tab_all: "All Services",
            srv_tab_corp: "Businesses",
            srv_tab_indiv: "Individuals",
            srv_more: "More",
            s1_t: "Company Formation & Governance",
            s1_d: "Establishing companies, drafting articles of association, shareholder agreements, mergers, and corporate governance under Saudi law.",
            s2_t: "Financial & Commercial Claims",
            s2_d: "Representing corporations and creditors in commercial paper disputes, banking claims, and financial recoveries.",
            s3_t: "Drafting & Reviewing Agreements",
            s3_d: "Bespoke bilingual drafting and auditing of commercial, construction, supply, and partnership contracts.",
            s4_t: "Litigation & Representation",
            s4_d: "Court advocacy and legal representation before General, Commercial, Labor, Criminal, and Administrative Courts.",
            s5_t: "Commercial Contracts & Disputes",
            s5_d: "Resolving complex commercial disputes, supply chain conflicts, and agency or franchise litigation.",
            s6_t: "Legal Consultancy",
            s6_d: "Written and oral legal and Sharia opinions providing clear risk analysis and actionable solutions.",
            s7_t: "Mediation & Arbitration",
            s7_d: "Representing parties before arbitral tribunals, SCCA proceedings, and amicable commercial settlements.",
            s8_t: "Intellectual Property",
            s8_d: "Registration and protection of trademarks, patents, industrial designs, and copyright enforcement.",
            s9_t: "Legal Support & Follow-up",
            s9_d: "Annual legal retainer packages and virtual legal department services for ongoing business operations.",
            s10_t: "Debt Collection & Enforcement",
            s10_d: "Executing promissory notes, checks, and final court judgments before Saudi Enforcement Courts.",
            s11_t: "Real Estate & Inheritance",
            s11_d: "Property title registration, real estate disputes, endowment (Waqf) deeds, and estate liquidation and division.",
            s12_t: "Labor & Administrative Law",
            s12_d: "Representing clients in employment disputes before Labor Courts and administrative claims before the Board of Grievances.",

            // Partners (Image 9)
            part_eyebrow: "Partners",
            part_h2_1: "A shared vision. ",
            part_h2_2: "Complementary experience.",
            part_exp_lbl: "years of experience",
            part_prof_exp: "Professional Experience",

            p1_role_1: "Lawyer",
            p1_role_2: "Founding Partner",
            p1_name: "Abdulaziz Aqeel Alnkhailan",
            p1_full_name: "Lawyer Abdulaziz Aqeel Alnkhailan",
            p1_short: "Corporate law, negotiable instruments, contracts, legislation, and legal consultancy.",
            p1_full: "Lawyer Abdulaziz Aqeel Alnkhailan leads corporate structuring, complex commercial litigation, contract drafting, and high-level legal advisory for businesses and individuals across the Kingdom of Saudi Arabia.",

            p2_role_1: "Founding Partner",
            p2_role_2: "Lawyer",
            p2_name: "Abdullah Aqeel Alnkhailan",
            p2_full_name: "Founding Partner Lawyer Abdullah Aqeel Alnkhailan",
            p2_short: "Court advocacy and representation in legal and Sharia matters.",
            p2_full: "Founding Partner Lawyer Abdullah Aqeel Alnkhailan specializes in judicial pleading before commercial, general, administrative, and labor courts, arbitration proceedings, real estate disputes, and estate division.",

            // Office Gallery
            off_eyebrow: "Inside Our Firm",
            off_h2_1: "Alnkhailan Law Firm",
            off_h2_2: "Headquarters & Client Suites.",
            off_cap_1: "Main Reception & Emblem",
            off_cap_2: "Executive Partner Suite",
            off_cap_3: "Client Consultation & Boardroom",
            off_cap_4: "Hospitality & Legal Lounge",

            // Accreditations
            acc_eyebrow: "Official Registrations",
            acc_h2_1: "Accreditations",
            acc_h2_2: "& memberships.",
            acc_desc: "Licensed and practicing before judicial, regulatory, and arbitration authorities across the Kingdom of Saudi Arabia.",
            acc_1_t: "وزارة العدل - ناجز",
            acc_1_s: "Ministry of Justice",
            acc_2_t: "الهيئة السعودية للمحامين",
            acc_2_s: "Saudi Bar Association",
            acc_3_t: "المركز السعودي للتحكيم التجاري",
            acc_3_s: "SCCA Arbitration",
            acc_4_t: "وزارة التجارة",
            acc_4_s: "Ministry of Commerce",
            acc_5_t: "الهيئة السعودية للملكية الفكرية",
            acc_5_s: "SAIP Intellectual Property",
            acc_6_t: "الهيئة العامة للعقار",
            acc_6_s: "Real Estate General Authority",

            // Contact & Location
            contact_eyebrow: "Start a conversation with our team",
            contact_h2: "Let’s talk.",
            contact_desc: "Whether you need representation in a dispute, contract structuring, or ongoing corporate counsel, our Founding Partners are ready to assist you.",
            contact_call_lbl: "Direct Phone & WhatsApp Lines",
            form_title: "Request a Legal Consultation",
            form_sub: "Protected client-side dispatch directly to official WhatsApp or Email (no database storage).",
            f_name: "Full Name *",
            f_name_ph: "Your full name",
            f_phone: "Mobile Number *",
            f_srv: "Legal Service *",
            f_partner: "Select Partner",
            f_msg: "Inquiry Summary *",
            f_msg_ph: "How can we help you?",
            f_btn_wa: "Send via WhatsApp",
            f_btn_mail: "Send via Email",

            loc_eyebrow: "Our Location",
            loc_h3: "Welcome to ALNKHAILAN",
            loc_addr: "Kingdom of Saudi Arabia — Hafar Al-Batin — Al-Muhammadiyah District",
            loc_open_map: "Open on Google Maps",
            loc_building_badge: "ALNKHAILAN LAW FIRM — 0599198093 - 0530044424",
            footer_rights: "© 2026 ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS (شركة النخيلان للمحاماة والاستشارات القانونية). All Rights Reserved."
        },

        ar: {
            page_title: "شركة النخيلان للمحاماة والاستشارات القانونية | ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS",
            header_logo_ar_1: "شركة النخيلان للمحاماة",
            header_logo_ar_2: "والاستشارات القانونية",
            nav_about: "عن الشركة",
            nav_services: "خدماتنا القانونية",
            nav_partners: "الشركاء",
            btn_request_meeting: "اطلب اجتماعاً",
            btn_get_in_touch: "تواصل معنا",
            btn_menu: "القائمة",
            drawer_home: "الرئيسية",
            drawer_experience: "خبراتنا",
            drawer_methodology: "منهجية العمل",
            drawer_office: "مقر الشركة",
            drawer_accred: "الاعتمادات",

            // Hero (Image 2)
            hero_eyebrow: "شركة النخيلان للمحاماة والاستشارات القانونية",
            hero_h1_line1: "أكثر من مجرد",
            hero_h1_line2: "شركة محاماة.",
            hero_subtitle: "رؤية قانونية لأعمالك. وعناية كاملة بحقوقك.",
            hero_link_1: "استكشف خدماتنا القانونية",
            hero_link_2: "الإدارة القانونية الافتراضية",

            // About / Below Hero (Image 3: Bronze Pyramids)
            about_eyebrow: "عن الشركة",
            about_h2_1: "نفهم طبيعة",
            about_h2_2: "أعمالك.",
            about_h2_3: "ونحمي كافة",
            about_h2_4: "مصالحك وحقوقك.",
            about_desc: "شركة النخيلان للمحاماة والاستشارات القانونية هي شركة مهنية سعودية رائدة، نساند قطاع الأعمال والأفراد بمنهجية تجمع بين الفهم العميق للأنظمة التجارية والشرعية والعناية الفائقة بحماية الحقوق.",
            about_link_1: "خبرة قانونية متكاملة تعمل لصالحك",
            about_link_2: "رؤيتنا ومنهجيتنا القانونية",

            // Experience
            exp_eyebrow: "خبرة قانونية وفريق عمل متكامل",
            exp_h2_1: "خبرتنا القانونية.",
            exp_h2_2: "تثري قراراتك وتحميها.",
            exp_desc: "تتكامل خبراتنا الشرعية والنظامية لتمنحك استشارات دقيقة، وصياغة تعاقدية محكمة، وتمثيلاً قضائياً قوياً أمام كافة المحاكم واللجان القضائية في المملكة.",
            exp_link: "تعرف على فريقنا",
            exp_circle_text: "عاماً من الخبرة القانونية والشرعية المتكاملة",
            exp_col1_t: "ممارسة قانونية شاملة",
            exp_col1_d: "تغطية متكاملة للقضايا التجارية والشركات والعقارات والعمل والقضايا الإدارية والشرعية.",
            exp_col2_t: "مشورة نظامية رصينة",
            exp_col2_d: "استراتيجيات قانونية وقائية وآراء نظامية دقيقة مصممة لتحقيق أهدافك.",
            exp_col3_t: "كفاءة متوازنة",
            exp_col3_d: "الجمع بين الاحترافية في التفاوض والتسويات والقوة في الترافع القضائي.",

            // Methodology
            meth_eyebrow: "كيف نعمل معك",
            meth_h2_1: "معك في كل قرار.",
            meth_h2_2: "وفي أدق التفاصيل.",
            meth_intro: "العمل مع شركة النخيلان للمحاماة يعني إشرافاً مباشراً من الشركاء المؤسسين، وشفافية تامة في مراحل العمل، وحلولاً قانونية تحمي مصالحك على المدى الطويل.",
            meth_tab_1: "الدراسة والتقييم القانوني الشامل",
            meth_tab_2: "التزامات مدروسة وواضحة",
            meth_tab_3: "الدقة النظامية في الصياغة",
            meth_tab_4: "الحماية المستمرة والمتابعة",
            meth_panel_tag: "منهجيتنا",
            meth_panel_h3: "علاقات واضحة.",
            meth_panel_h4: "والتزامات راسخة.",
            meth_panel_p: "نحدد نطاق العمل والخطط الزمنية والاستراتيجيات القانونية بشفافية تامة منذ اليوم الأول، مع التزام كامل بالبحث القانوني المعمق والتنفيذ المتقن.",
            meth_panel_cta: "اطلب استشارة قانونية",

            lw_eyebrow: "متابعة ملفات العملاء",
            lw_h3_1: "أعمالك القانونية،",
            lw_h3_2: "واضحة أمامك دائماً.",
            lw_desc: "تابع كافة مراحل مراجعة عقودك أو مرافعاتك القضائية أو إجراءات شركاتك من خلال مراحل عمل واضحة وتقارير مباشرة.",
            lw_cta: "ابدأ ملفك القانوني",
            lw_card_title: "لوحة متابعة العقود والقضايا القانونية",
            lw_stage_1: "الدراسة القانونية والشرعية",
            lw_stage_2: "الصياغة والتدقيق المستندي",
            lw_stage_3: "الترافع والتمثيل أمام المحاكم",
            lw_stage_4: "صدور الحكم النهائي والتنفيذ",
            lw_done: "مكتمل",
            lw_active: "قيد التنفيذ",
            lw_sched: "مجدول",

            // Services
            srv_eyebrow: "خدماتنا القانونية",
            srv_h2_1: "لأعمالك ولحماية حقوقك.",
            srv_h2_2: "خبرة متكاملة في كافة المجالات.",
            srv_tab_all: "جميع الخدمات",
            srv_tab_corp: "قطاع الأعمال",
            srv_tab_indiv: "الأفراد",
            srv_more: "المزيد",
            s1_t: "تأسيس الشركات وحوكمتها",
            s1_d: "تأسيس الشركات، صياغة عقود التأسيس، اتفاقيات الشركاء، الاندماج والاستحواذ، وحوكمة الشركات وفق النظام السعودي.",
            s2_t: "المطالبات المالية والتجارية",
            s2_d: "تمثيل الشركات والدائنين في منازعات الأوراق التجارية والمطالبات المالية والمصرفية.",
            s3_t: "صياغة ومراجعة العقود والاتفاقيات",
            s3_d: "صياغة وتدقيق العقود التجارية وعقود المقاولات والتوريد والشراكات باللغتين العربية والإنجليزية.",
            s4_t: "التقاضي والتمثيل القضائي",
            s4_d: "الترافع والتمثيل القانوني أمام المحاكم العامة والتجارية والعمالية والجزائية والإدارية.",
            s5_t: "العقود والمنازعات التجارية",
            s5_d: "معالجة النزاعات التجارية المعقدة، خلافات الشركاء، وقضايا الوكالات التجارية والامتياز التجاري.",
            s6_t: "الاستشارات القانونية والشرعية",
            s6_d: "تقديم الآراء القانونية والشرعية المكتوبة والشفهية لتحليل المخاطر وتقديم الحلول النظامية.",
            s7_t: "الوساطة والتحكيم التجاري",
            s7_d: "تمثيل الأطراف أمام هيئات التحكيم والمركز السعودي للتحكيم التجاري والتسويات الودية.",
            s8_t: "الملكية الفكرية والعلامات التجارية",
            s8_d: "تسجيل وحماية العلامات التجارية وبراءات الاختراع والنماذج الصناعية وحقوق المؤلف.",
            s9_t: "الإسناد والدعم القانوني المستمر",
            s9_d: "عقود الاستشارات السنوية وخدمات الإدارة القانونية الافتراضية لمساندة المنشآت.",
            s10_t: "تحصيل الديون والتنفيذ القضائي",
            s10_d: "تنفيذ السندات لأمر والشيكات والأحكام القضائية النهائية أمام محاكم التنفيذ.",
            s11_t: "القضايا العقارية وتصفية التركات",
            s11_d: "تسجيل الملكية العقارية، المنازعات العقارية، صكوك الأوقاف، وحصر وقسمة التركات.",
            s12_t: "القضايا العمالية والإدارية",
            s12_d: "تمثيل العملاء في المنازعات العمالية أمام المحاكم العمالية والدعاوى الإدارية أمام ديوان المظالم.",

            // Partners (Image 9)
            part_eyebrow: "الشركاء",
            part_h2_1: "رؤية مشتركة. ",
            part_h2_2: "وخبرة قانونية متكاملة.",
            part_exp_lbl: "سنوات الخبرة",
            part_prof_exp: "الخبرة المهنية",

            p1_role_1: "محامي",
            p1_role_2: "شريك مؤسس",
            p1_name: "عبدالعزيز عقيل النخيلان",
            p1_full_name: "المحامي عبدالعزيز عقيل النخيلان",
            p1_short: "نظام الشركات، الأوراق التجارية، العقود، الأنظمة والتشريعات، والاستشارات القانونية.",
            p1_full: "يقود المحامي عبدالعزيز عقيل النخيلان أعمال هيكلة الشركات، التقاضي التجاري، صياغة العقود الكبرى، وتقديم الاستشارات النظامية للشركات والأفراد في المملكة العربية السعودية.",

            p2_role_1: "الشريك المؤسس",
            p2_role_2: "محامي",
            p2_name: "عبدالله عقيل النخيلان",
            p2_full_name: "الشريك المؤسس المحامي عبدالله عقيل النخيلان",
            p2_short: "الترافع والتمثيل القضائي في القضايا الشرعية والقانونية والتجارية.",
            p2_full: "يتخصص الشريك المؤسس المحامي عبدالله عقيل النخيلان في الترافع أمام المحاكم التجارية والعامة والإدارية والعمالية، التحكيم، المنازعات العقارية، وتصفية التركات.",

            // Office Gallery
            off_eyebrow: "داخل مقر الشركة",
            off_h2_1: "شركة النخيلان للمحاماة",
            off_h2_2: "المقر الرئيسي وقاعات استقبال العملاء.",
            off_cap_1: "الاستقبال الرئيسي وهوية الشركة",
            off_cap_2: "مكتب الشريك المؤسس",
            off_cap_3: "قاعة الاجتماعات والاستشارات القانونية",
            off_cap_4: "قاعة الضيافة والمكتبة القانونية",

            // Accreditations
            acc_eyebrow: "الاعتمادات والجهات الرسمية",
            acc_h2_1: "الاعتمادات",
            acc_h2_2: "والعضويات المهنية.",
            acc_desc: "مرخصون ومعتمدون للممارسة القانونية والتمثيل القضائي أمام مختلف الجهات العدلية والتنظيمية في المملكة العربية السعودية.",
            acc_1_t: "وزارة العدل - ناجز",
            acc_1_s: "Ministry of Justice",
            acc_2_t: "الهيئة السعودية للمحامين",
            acc_2_s: "Saudi Bar Association",
            acc_3_t: "المركز السعودي للتحكيم التجاري",
            acc_3_s: "SCCA Arbitration",
            acc_4_t: "وزارة التجارة",
            acc_4_s: "Ministry of Commerce",
            acc_5_t: "الهيئة السعودية للملكية الفكرية",
            acc_5_s: "SAIP Intellectual Property",
            acc_6_t: "الهيئة العامة للعقار",
            acc_6_s: "Real Estate General Authority",

            // Contact & Location
            contact_eyebrow: "ابدأ تواصلك مع فريقنا القانوني",
            contact_h2: "تواصل معنا.",
            contact_desc: "سواء كنت بحاجة إلى تمثيل قضائي في نزاع، أو صياغة عقود، أو استشارات قانونية مستمرة لمنشأتك، فإن شركاءنا المؤسسين على أتم الاستعداد لخدمتك.",
            contact_call_lbl: "أرقام الاتصال المباشر والواتساب",
            form_title: "طلب استشارة قانونية",
            form_sub: "إرسال آمن ومشفر مباشرة إلى الواتساب الرسمي أو البريد الإلكتروني للشركة (دون قواعد بيانات خارجية).",
            f_name: "الاسم الكامل *",
            f_name_ph: "أدخل اسمك الكامل",
            f_phone: "رقم الجوال *",
            f_srv: "الخدمة القانونية *",
            f_partner: "اختر المحامي",
            f_msg: "ملخص الاستشارة *",
            f_msg_ph: "كيف يمكننا مساعدتك؟",
            f_btn_wa: "إرسال عبر الواتساب",
            f_btn_mail: "إرسال عبر البريد الإلكتروني",

            loc_eyebrow: "موقعنا الجغرافي",
            loc_h3: "مرحباً بكم في شركة النخيلان",
            loc_addr: "المملكة العربية السعودية — حفر الباطن — حي المحمدية",
            loc_open_map: "فتح الموقع في خرائط جوجل",
            loc_building_badge: "شركة النخيلان للمحاماة والاستشارات القانونية — 0599198093 - 0530044424",
            footer_rights: "© 2026 شركة النخيلان للمحاماة والاستشارات القانونية (ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS). جميع الحقوق محفوظة."
        }
    };

    const methStepCopy = {
        en: [
            {
                tag: "01 • Assessment",
                h3: "Comprehensive legal audit.",
                h4: "Deep understanding of every fact.",
                p: "We examine all contracts, documents, and regulatory angles to establish a solid legal foundation before any step is taken."
            },
            {
                tag: "02 • Our Approach",
                h3: "Clear relationships.",
                h4: "Considered commitments.",
                p: "We define scope, timelines, and legal strategies transparently from day one, ensuring every client commitment is backed by thorough legal research and dedicated execution."
            },
            {
                tag: "03 • Precision",
                h3: "Meticulous drafting.",
                h4: "Forceful court representation.",
                p: "Every clause, memorandum, and pleading is prepared and reviewed directly by our Founding Partners to safeguard your position."
            },
            {
                tag: "04 • Protection",
                h3: "Long-term governance.",
                h4: "Securing & enforcing outcomes.",
                p: "We follow through until final judgment enforcement and establish ongoing legal safeguards for your business."
            }
        ],
        ar: [
            {
                tag: "٠١ • التقييم الشامل",
                h3: "دراسة قانونية شاملة.",
                h4: "فهم عميق لكافة الوقائع والمستندات.",
                p: "نقوم بفحص كافة العقود والوثائق والجوانب النظامية والشرعية لتأسيس موقف قانوني راسخ قبل اتخاذ أي إجراء."
            },
            {
                tag: "٠٢ • منهجيتنا",
                h3: "علاقات واضحة.",
                h4: "والتزامات راسخة.",
                p: "نحدد نطاق العمل والخطط الزمنية والاستراتيجيات القانونية بشفافية تامة منذ اليوم الأول، مع التزام كامل بالبحث القانوني المعمق والتنفيذ المتقن."
            },
            {
                tag: "٠٣ • الدقة النظامية",
                h3: "صياغة قانونية محكمة.",
                h4: "وترافع قضائي قوي.",
                p: "يتم إعداد ومراجعة كل بند ومذكرة ولائحة دعوى بإشراف مباشر من الشركاء المؤسسين لضمان أقوى حماية لحقوقكم."
            },
            {
                tag: "٠٤ • الحماية المستمرة",
                h3: "حوكمة مستدامة.",
                h4: "وتنفيذ فعلي للأحكام والاتفاقيات.",
                p: "نواصل متابعة الإجراءات حتى تمام التنفيذ القضائي وتحصيل الحقوق، مع بناء مظلة قانونية وقائية لأعمالكم."
            }
        ]
    };

    let currentLang = localStorage.getItem('alnkhailan_lang') || 'en';
    let currentMethIdx = 1;

    function applyLanguage(lang) {
        if (!i18n[lang]) lang = 'en';
        currentLang = lang;
        localStorage.setItem('alnkhailan_lang', lang);

        const html = document.documentElement;
        html.setAttribute('lang', lang);
        html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        const dict = i18n[lang];
        document.title = dict.page_title;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.textContent = dict[key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (dict[key] !== undefined) {
                el.setAttribute('placeholder', dict[key]);
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        renderMethodStep(currentMethIdx);
    }

    function renderMethodStep(idx) {
        currentMethIdx = idx;
        const list = methStepCopy[currentLang] || methStepCopy.en;
        const item = list[idx] || list[0];

        const t = document.getElementById('methPanelTag');
        const h3 = document.getElementById('methPanelH3');
        const h4 = document.getElementById('methPanelH4');
        const p = document.getElementById('methPanelP');

        if (t) t.textContent = item.tag;
        if (h3) h3.textContent = item.h3;
        if (h4) h4.textContent = item.h4;
        if (p) p.textContent = item.p;

        document.querySelectorAll('.method-tab-btn').forEach((btn, i) => {
            btn.classList.toggle('active', i === idx);
        });
    }

    document.addEventListener('DOMContentLoaded', () => {
        // Language toggle
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
        });

        // Header Menu Drawer
        const menuBtn = document.getElementById('menuDrawerBtn');
        const drawer = document.getElementById('drawerNav');
        if (menuBtn && drawer) {
            menuBtn.addEventListener('click', () => {
                const isOpen = drawer.classList.toggle('open');
                menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
            drawer.querySelectorAll('a').forEach(a => {
                a.addEventListener('click', () => drawer.classList.remove('open'));
            });
        }

        // Sticky Header shadow on scroll
        const header = document.getElementById('siteHeader');
        window.addEventListener('scroll', () => {
            if (header) header.classList.toggle('scrolled', window.scrollY > 25);
        }, { passive: true });

        // Moving Responsive Hero Slider
        const slides = document.querySelectorAll('.hero-bg-slide');
        const dots = document.querySelectorAll('.hero-dot');
        let slideIdx = 0;

        function showSlide(n) {
            if (!slides.length) return;
            slideIdx = (n + slides.length) % slides.length;
            slides.forEach((s, i) => s.classList.toggle('active', i === slideIdx));
            dots.forEach((d, i) => d.classList.toggle('active', i === slideIdx));
        }

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => showSlide(i));
        });

        setInterval(() => {
            showSlide(slideIdx + 1);
        }, 6500);

        // Methodology tabs
        document.querySelectorAll('.method-tab-btn').forEach((btn, idx) => {
            btn.addEventListener('click', () => renderMethodStep(idx));
        });

        // Legal work progress interactive rows
        const lwFill = document.getElementById('lwBarFill');
        const lwPct = document.getElementById('lwPct');
        document.querySelectorAll('.lw-row').forEach(row => {
            row.addEventListener('click', () => {
                const pct = row.getAttribute('data-pct') || '75%';
                if (lwFill) lwFill.style.width = pct;
                if (lwPct) lwPct.textContent = pct;
            });
        });

        // Services accordion & filter tabs
        const srvItems = document.querySelectorAll('.srv-item');
        srvItems.forEach(item => {
            const head = item.querySelector('.srv-head');
            if (head) {
                head.addEventListener('click', () => {
                    const open = item.classList.contains('open');
                    srvItems.forEach(other => other.classList.remove('open'));
                    if (!open) item.classList.add('open');
                });
            }
        });

        const srvTabs = document.querySelectorAll('.srv-tab');
        srvTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const filter = tab.getAttribute('data-filter');
                srvTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                srvItems.forEach(item => {
                    const cat = item.getAttribute('data-cat');
                    item.style.display = (filter === 'all' || cat === filter) ? 'block' : 'none';
                });
            });
        });

        // Partner cards "Professional Experience +" expandable bar
        document.querySelectorAll('.partner-card-ref').forEach(card => {
            const bar = card.querySelector('.partner-expand-bar');
            if (bar) {
                bar.addEventListener('click', () => {
                    card.classList.toggle('expanded');
                });
            }
        });

        // Secure Consultation Form (WhatsApp & Email)
        const form = document.getElementById('consultationForm');
        const emailBtn = document.getElementById('sendEmailBtn');
        const feedback = document.getElementById('formFeedback');

        function validateForm() {
            const hp = document.getElementById('website_hp');
            if (hp && hp.value.trim() !== '') {
                return { error: 'Security block.' };
            }
            if (isRateLimited()) {
                return { error: currentLang === 'ar' ? 'يرجى الانتظار قليلاً قبل المحاولة مجدداً.' : 'Please wait a moment before submitting again.' };
            }

            const name = sanitizeInput(document.getElementById('clientName').value);
            const phone = sanitizeInput(document.getElementById('clientPhone').value);
            const srvEl = document.getElementById('clientService');
            const lawEl = document.getElementById('clientLawyer');
            const msg = sanitizeInput(document.getElementById('clientMessage').value);

            const srvText = srvEl ? sanitizeInput(srvEl.options[srvEl.selectedIndex].text) : '';
            const lawText = lawEl ? sanitizeInput(lawEl.options[lawEl.selectedIndex].text) : '';

            if (!name || name.length < 2) {
                return { error: currentLang === 'ar' ? 'يرجى إدخال الاسم الكامل.' : 'Please enter your full name.' };
            }
            if (!phone || phone.length < 8) {
                return { error: currentLang === 'ar' ? 'يرجى إدخال رقم الجوال.' : 'Please enter a valid mobile number.' };
            }
            if (!msg || msg.length < 4) {
                return { error: currentLang === 'ar' ? 'يرجى كتابة ملخص الاستشارة.' : 'Please enter a short summary of your inquiry.' };
            }

            return { name, phone, srvText, lawText, msg };
        }

        function setFeedback(text, isErr) {
            if (!feedback) return;
            feedback.style.display = 'block';
            feedback.style.color = isErr ? '#ff8080' : '#dcb48e';
            feedback.textContent = text;
        }

        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const res = validateForm();
                if (res.error) {
                    setFeedback(res.error, true);
                    return;
                }
                const text = [
                    `*ALNKHAILAN LAW FIRM | شركة النخيلان للمحاماة*`,
                    `• Name / الاسم: ${res.name}`,
                    `• Phone / الجوال: ${res.phone}`,
                    `• Service / الخدمة: ${res.srvText}`,
                    `• Partner / المحامي: ${res.lawText}`,
                    `• Inquiry / الاستفسار: ${res.msg}`
                ].join('\n');
                setFeedback(currentLang === 'ar' ? 'جاري فتح محادثة الواتساب الرسمية...' : 'Opening official WhatsApp chat...', false);
                window.open(`https://wa.me/966599198093?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
            });
        }

        if (emailBtn) {
            emailBtn.addEventListener('click', () => {
                const res = validateForm();
                if (res.error) {
                    setFeedback(res.error, true);
                    return;
                }
                const subject = `Legal Consultation Request - ${res.name}`;
                const body = [
                    `ALNKHAILAN LAW FIRM AND LEGAL CONSULTANTS`,
                    `Name: ${res.name}`,
                    `Phone: ${res.phone}`,
                    `Service: ${res.srvText}`,
                    `Partner: ${res.lawText}`,
                    `Inquiry: ${res.msg}`
                ].join('\r\n');
                window.location.href = `mailto:alnukhailan.a@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            });
        }

        applyLanguage(currentLang);
    });
})();
