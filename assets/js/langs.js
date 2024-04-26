var multilang = {
    langs: [ 'fr' , 'en' ],
    currentLocal: 'en',
    btn_selector: ".local_selector",
    data : {
        "fr" : {
            "experience_education" : "Formations & Éxpériences",
            "skills": "Compétences",
            "projects": "Projcts",
            "contact": "Contact",
            "caption_title": "Front-End Developer",
            "caption_subtitle": "& Graphic Designer",
            "caption_body": "Salut, <br> Je suis <strong class=\"bold-text\">ABDELLAH BOUSSOUNT</strong> Développeur front-end et Graphic designer Marocaine, Veuillez vérifier mes projets et je serai heureuse de rendre vos idées plus belles",
            "caption_btn": "Mes Projets",
            't_professional_experience': "Éxpériences professionnelles",
            "pro_exp_0_date": "Avril 2024 - Présent",
            "pro_exp_0_title": "Wordpress Developer<i class=\"fas fa-map-marker-alt\"></i> Bright Leads Media",
            "pro_exp_1_title": "Freelancer <i class=\"fas fa-map-marker-alt\"></i> Fiverr.com",
            "pro_exp_1_date": "2022 - Avril 2024",
            "pro_exp_2_title": "Développeur Front-End <i class=\"fas fa-map-marker-alt\"></i> Mostaql.com",
            "pro_exp_2_date": "2020 - 2022",
            "pro_exp_3_title": "Graphique designer <i class=\"fas fa-map-marker-alt\"></i> Freelance.com",
            "pro_exp_3_date": "2019 -  2020",
            "t_education": 'Éducation',
            "ed_1_title": "Compétitrice au Olympiades internationales aux Technologies Web <i class=\"fas fa-map-marker-alt\"></i> WORLDKILLS 2019",
            "ed_1_date": "Juillet 2019",
            "ed_2_title": "Licence en sciences Mathématiques et Informatiques<br><i class=\"fas fa-map-marker-alt\"></i> Faculté Polydisciplinaire de Ouarzazate",
            "ed_2_date": "Juillet 2018",
            "ed_3_title": "Baccalauréat <i class=\"fas fa-map-marker-alt\"></i> Lycée ALWAHDA",
            "ed_3_date": "Juillet 2014",
            "t_online_certifications" : "Certificats en ligne",
            "t_skills": "Compétences",
            "t_projects": "Projets",
            "filter_all": "Tout",
            "filter_uiux_design": "UI/UX Design",
            "filter_graphic_design": "Infographie",
            "filter_web_development": "Développement Front-End",
            "filter_games": "Jeux",
            "t_contact": "<span>N'hésitez pas à</span> <br>Me contacter",
            "contact_nom": "Nom <small>*</small>",
            "contact_email": "Email <small>*</small>",
            "contact_sujet": "Sujet <small>*</small>",
            "contact_message": "Message <small>*</small>",
        },
        "en" : {
            "experience_education" : "Experience & Education",
            "skills": "Skills",
            "projects": "Projects",
            "contact": "Contact",
            "caption_title": "Front-End Developer",
            "caption_subtitle": "& Graphic Designer",
            "caption_body": "Hi There, <br> I'm <strong class=\"bold-text\">ABDELLAH BOUSSOUNT</strong> a Moroccan Front-End Developer and Graphic designer, Check my projects and I will be glad to make your ideas look beautiful",
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