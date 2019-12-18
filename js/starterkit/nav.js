(function($) {
    $(".top-brand .link, .dropdown-menu, .mb-menu-header").click(function(e) {
        e.stopPropagation();
    });

    $('.dropdown-menu a.nav-link.dropdown-toggle').on('click', function(e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(".nav-sub-menu .nav-item").removeClass('active');
        $(this).parent('.nav-item').toggleClass('active');

        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {});

        $(document).on('click', '.primary-nav-wrapper .nav-link', function(e) {
            e.stopPropagation();
        });
        return false;
    });
    $(".header-menu").click(function() {
        $(this).toggleClass("active");
    });
    $('.navbar-collapse').on('hidden.bs.collapse', function(e) {
        e.stopPropagation();
        collapseNav();
    });

    /*$(".primary-nav-wrapper .navbar-nav > .nav-item > a").click(function(){
        var navHeight = $(this).parents(".nav-item").height();
        $(this).next(".dropdown-menu").css("top", navHeight);
    })*/

    function collapseNav() {
        $(".dropdown-menu ").removeClass("show").fadeOut();
        var mainMenuTxt = $(".menu-head-js").text();
        $(".mb-menu-header").text(mainMenuTxt);
        $(".mb-menu-back").hide();
        $(".nav-item").removeClass('active');
    }
    $(".mega-dropdown > .dropdown-toggle").click(function(){
        var checkExpanded = $(this).attr("aria-expanded");
        var window_size = window.matchMedia('(max-width: 768px)');
        if (checkExpanded == 'false' && !window_size.matches) {
            collapseNav();
        }
    });

    $('.mega-dropdown .nav-link.dropdown-toggle').click(function(e) {
        var prevText = $(".mega-dropdown.show > .nav-link").text();

        if ($(this).next().length > 0) {
            $(".mb-menu-header").text($(this).text());
            $(".mb-menu-back").attr("dlavel", $(this).attr("dlavel")).show();


            if ($(".dropdown-menu-sub").hasClass('show')) {
                $(".mb-menu-back span").text(prevText);
            } else {
                var mainMenuTxt = $(".menu-head-js").text();
                $(".mb-menu-back span").text(mainMenuTxt);
            }

            var window_size = window.matchMedia('(max-width: 768px)');
            if (window_size.matches) {
                $(this).next().css("display", "block").fadeIn();
            }

        }

    });

    $(".demo-icon a").click(function() {
        if (!$(this).closest(".demo-icon").find(".dropdown-menu").hasClass('show') && $(this).next().length > 0) {
            $(".mb-menu-header").text($(this).find("span").text());
            $(".mb-menu-back").attr("dlavel", $(this).attr("dlavel")).show();
            var mainMenuTxt = $(".menu-head-js").text();
            $(".mb-menu-back span").text(mainMenuTxt);
            $(this).find(".dropdown-menu").css("display", "block").fadeIn();
        }

    });

    $(".mb-menu-back").click(function() {
        var dlavel = $(this).attr("dlavel");
        if ($(".dropdown-menu[dlavel='" + dlavel + "'] ").hasClass('show')) {
            $(".dropdown-menu[dlavel='" + dlavel + "'] ").removeClass("show");
            $(".dropdown-menu[dlavel='" + dlavel + "'] ").fadeOut();
            if (dlavel == 1) {
                var prevText = $(".mega-dropdown.show > .nav-link").text();
                $('.mb-menu-header').text(prevText);
                var mainMenuTxt = $(".menu-head-js").text();
                $(this).find('span').text(mainMenuTxt);
            }
            $(this).attr("dlavel", "0");
            if ($(".dropdown-menu").hasClass('show') == false) {
                $(".mb-menu-back").hide();
                var mainMenuTxt = $(".menu-head-js").text();
                $(".mb-menu-header").text(mainMenuTxt);
            }
        } else {
            $(".dropdown-menu[dlavel='" + dlavel + "'] ").fadeOut();

            $(".mb-menu-back").hide();
            var mainMenuTxt = $(".menu-head-js").text();
            $(".mb-menu-header").text(mainMenuTxt);
        }
        return false;
    });

$(".search-toggle").on("click", "a", function(){
    $(".global-search-mb").toggleClass("d-none");
});
})(jQuery);