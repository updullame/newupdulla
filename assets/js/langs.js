var multilang = {
    langs: [ 'de' , 'en' ],
    currentLocal: 'en',
    btn_selector: ".local_selector",
    data : {
        "de" : {
            "experience_education" : "Schulungen & Erfahrungen",
            "skills": "Kompetenzen",
            "projects": "Projekte",
            "contact": "Kontakt",
            "caption_title": "Abdellah Boussount",
            "caption_subtitle": "Front-End Entwickler",
            "caption_body": "Ich bin ein Front-End-Entwickler und Grafikdesigner mit Fachkenntnissen in HTML, CSS und JavaScript. Ich erstelle responsive Websites, um eine ansprechende Benutzererfahrung auf allen Geräten sicherzustellen. Mit einem Bachelor-Abschluss in Mathematik und Informatik sowie Zertifizierungen in Webentwicklung und Cybersecurity liefere ich innovative Lösungen, die den Anforderungen meiner Kunden gerecht werden.",
            "caption_btn": "Meine Projekte",
            't_professional_experience': "Berufliche Erfahrungen",
            "pro_exp_0_date": "April 2024 - Gegenwart",
            "pro_exp_0_title": "Wordpress Entwickler<i class=\"fas fa-map-marker-alt\"></i> Bright Leads Media",
            "pro_exp_1_title": "Freelancer <i class=\"fas fa-map-marker-alt\"></i> Fiverr.com",
            "pro_exp_1_date": "2022 - April 2024",
            "pro_exp_2_title": "Front-End Entwickler <i class=\"fas fa-map-marker-alt\"></i> Mostaql.com",
            "pro_exp_2_date": "2020 - 2022",
            "pro_exp_3_title": "Grafikdesigner <i class=\"fas fa-map-marker-alt\"></i> Freelance.com",
            "pro_exp_3_date": "2019 -  2020",
            "t_education": 'Bildung',
            "ed_1_title": "Teilnehmerin an der Internationalen Olympiade für Webtechnologie <i class=\"fas fa-map-marker-alt\"></i> WORLDKILLS 2019",
            "ed_1_date": "Juli 2019",
            "ed_2_title": "Bachelor of Science in Mathematik und Informatik<br><i class=\"fas fa-map-marker-alt\"></i> Faculté Polydisciplinaire de Ouarzazate",
            "ed_2_date": "Juli 2018",
            "ed_3_title": "Bachelor-Abschluss <i class=\"fas fa-map-marker-alt\"></i> Lycée ALWAHDA",
            "ed_3_date": "Juli 2014",
            "t_online_certifications" : "Online-Zertifikate Fähigkeiten",
            "t_skills": "Fähigkeiten",
            "t_projects": "Projekte",
            "filter_all": "Alle",
            "filter_uiux_design": "UI/UX Design",
            "filter_graphic_design": "Infografik",
            "filter_web_development": "Front-End-Entwicklung",
            "filter_games": "Spiele",
            "t_contact": "<span>Zögern Sie nicht,</span> <br>mich zu kontaktieren",
            "contact_nom": "Name <small>*</small>",
            "contact_email": "E-mail <small>*</small>",
            "contact_sujet": "Betreff <small>*</small>",
            "contact_message": "Nachricht <small>*</small>",
        },
        "en" : {
            "experience_education" : "Experience & Education",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "caption_title": "Abdellah Boussount",
            "caption_subtitle": "Front-End Developer",
            "caption_body": "I am a Front-End Developer and Graphic Designer with expertise in HTML, CSS, JavaScript, WordPress, Shopify, and UI/UX design. I create responsive websites and e-commerce stores, ensuring engaging user experiences across all devices. With a background in Mathematics and Computer Science, and certifications in web development and cybersecurity, I deliver high-quality, innovative solutions tailored to client needs.",
            "caption_btn": "My Projects",
            't_professional_experience': "Professional Experience","pro_exp_0_date": "April 2024 - Now",
            "pro_exp_0_title": "Wordpress Developer <i class=\"fas fa-map-marker-alt\"></i> Bright Leads Media",
            "pro_exp_1_title": "Freelancer <i class=\"fas fa-map-marker-alt\"></i> Fiverr.com",
            "pro_exp_1_date": "2022 - April 2024",
            "pro_exp_2_title": "Front-End  Developer <i class=\"fas fa-map-marker-alt\"></i> Mostaql.com",
            "pro_exp_2_date": "2020 - 2022",
            "pro_exp_3_title": "Graphic Designer <i class=\"fas fa-map-marker-alt\"></i> Freelance.com",
            "pro_exp_3_date": "2019 -  2020",
            "t_education": 'Education',
            "ed_2_date": "Mathematical & Computer sciences <i class=\"fas fa-map-marker-alt\"></i> Faculty Ibn ZOHR - FPO Ouarzazate",
            "ed_2_date": "July 2016",
            "ed_3_date": "High School degree <i class=\"fas fa-map-marker-alt\"></i> AL Wahda school - Tiznit",
            "ed_3_date": "July 2014",
            "t_online_certifications" : "Online Certificates",
            "t_skills": "Skills",
            "t_projects": "Projects",
            "filter_all": "All",
            "filter_uiux_design": "UI/UX Design",
            "filter_graphic_design": "Graphic Design",
            "filter_web_development": "Front-End Development",
            "filter_games":"Games",
            "t_contact": "<span>Now, You know me enough to</span> <br>Contact me",
            "contact_nom": "Name <small>*</small>",
            "contact_email": "Email <small>*</small>",
            "contact_sujet": "Subject <small>*</small>",
            "contact_message": "Message <small>*</small>",
        },
    },
    getLang: function(){
        return localStorage.getItem('lang');
    },
    setLang: function($local){
        localStorage.setItem('lang', this.data[$local] ? $local : this.currentLocal );
        this.currentLocal = $local;
        multilang = this;
    },
    getValue:function($key){
        return this.data[ this.currentLocal ][$key];
    },
    events: function () { 
        $(document).on('click', this.btn_selector , function (e) {
            e.preventDefault();
            
            var selected_local = $(e.target).attr('data-local');
            if (!multilang.data[selected_local] || selected_local == multilang.currentLocal) return false;
            multilang.setLang(selected_local);

            $('[data-lkey]').each(function (i, elem) {
                var lkey = $(elem).data('lkey');
                var key_value = multilang.getValue(lkey);
                if (key_value) $(elem).html( key_value );
            });

            // change active btn
            $(multilang.btn_selector).removeClass('active');
            $(e.target).addClass('active');
        });
    },
    oninit: function () { 
        var storage_local = localStorage.getItem('lang');
        this.setLang(storage_local);

        $('[data-lkey]').each(function (i, elem) {
            var lkey = $(elem).data('lkey');
            var key_value = multilang.getValue(lkey);
            if (key_value) $(elem).html( key_value );
        });

        // change active btn
        $(this.btn_selector).each(function (i, elem) {
            var selected_local = $(elem).attr('data-local');
            if ( selected_local != multilang.currentLocal){
                $(elem).removeClass('active');
            } else{ $(elem).addClass('active'); }
        });

        this.events();
    }
}
multilang.oninit();