

(function (window, document, $, undefined) {
    'use strict';

    var smkn2Kebumen = {
        i: function (e) {
            smkn2Kebumen.d();
            smkn2Kebumen.methods();
        },

        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html'),
            this.sideNav = $('.rbt-search-dropdown')
        },
        methods: function (e) {
            smkn2Kebumen.menuCurrentLink();
            smkn2Kebumen.eduBgCardHover();
            smkn2Kebumen.stickyHeader();
            smkn2Kebumen.radialProgress();
            smkn2Kebumen.marqueImage();
            smkn2Kebumen.popupMobileMenu();
            smkn2Kebumen.headerSticky();
            smkn2Kebumen.offCanvas();
            smkn2Kebumen.onePageNav();
            smkn2Kebumen.transparentHeader();
            smkn2Kebumen.categoryMenuHover();
            smkn2Kebumen.cartSidenav();
            smkn2Kebumen.headerTopActivation();
            smkn2Kebumen.showMoreBtn();
            smkn2Kebumen.sidebarVideoHidden();
            smkn2Kebumen.courseActionBottom();
            smkn2Kebumen.topbarExpend();
            smkn2Kebumen.categoryOffcanvas();
            smkn2Kebumen.moveAnimation();
        },

        offCanvas: function (params) {
            if ($('#rbt-offcanvas-activation').length) {
                $('#rbt-offcanvas-activation').on('click', function () {
                    $('.side-menu').addClass('side-menu-active'), 
                    $('body').addClass('offcanvas-menu-active')
                }),

                $('.close_side_menu').on('click', function () {
                    $('.side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('offcanvas-menu-active')
                }),

                $('.side-menu .side-nav .navbar-nav li a').on('click', function () {
                    $('.side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('offcanvas-menu-active')
                }), 
                
                $('#btn_sideNavClose').on('click', function () {
                    $('.side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('offcanvas-menu-active')
                });
            } 
        },

        cartSidenav: function (params) {
            if ($('.rbt-cart-sidenav-activation').length) {
                $('.rbt-cart-sidenav-activation').on('click', function () {
                    $('.rbt-cart-side-menu').addClass('side-menu-active'), 
                    $('body').addClass('cart-sidenav-menu-active')
                }),

                $('.minicart-close-button').on('click', function () {
                    $('.rbt-cart-side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('cart-sidenav-menu-active')
                }),

                $('.side-menu .side-nav .navbar-nav li a').on('click', function () {
                    $('.rbt-cart-side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('cart-sidenav-menu-active')
                }), 
                
                $('#btn_sideNavClose, .close_side_menu').on('click', function () {
                    $('.rbt-cart-side-menu').removeClass('side-menu-active'), 
                    $('body').removeClass('cart-sidenav-menu-active')
                });
            } 
        },


        menuCurrentLink: function () {
            var currentPage = location.pathname.split("/"),
            current = currentPage[currentPage.length-1];
            $('.mainmenu li a, .dashboard-mainmenu li a, .for-right-content .rbt-course-main-content li a').each(function(){
                var $this = $(this);
                if($this.attr('href') === current){
                    $this.addClass('active');
                    $this.parents('.has-menu-child-item').addClass('menu-item-open')
                }
            });
        },


        eduParalax: function () {
            var scene = document.getElementById('scene');
            var parallaxInstance = new Parallax(scene);
        },

        eduBgCardHover : function () {
            $('.rbt-hover-active').mouseenter(function() {
                var self = this;
                setTimeout(function() {
                    $('.rbt-hover-active.active').removeClass('active');
                    $(self).addClass('active');
                }, 0);
            });
        },


        stickyHeader:  function () {
            // Header Transparent
            if ($('header').hasClass('header-transparent')) {
                $('body').addClass('active-header-transparent')
            } else {
                $('body').removeClass('active-header-transparent')
            }
        },
        
        radialProgress: function () {
            $(window).scroll( function(){
                /* Check the location of each desired element */
                $('.radial-progress').each( function(i){
                    var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                    var bottom_of_window = $(window).scrollTop() + $(window).height();
                    /* If the object is completely visible in the window, fade it in */
                    if( bottom_of_window > bottom_of_object ){
                        $('.radial-progress').easyPieChart({
                            lineWidth: 10,
                            scaleLength: 0,
                            rotate: 0,
                            trackColor: false,
                            lineCap: 'round',
                            size: 180,
                            onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                    }
                }); 
            });
        },


        marqueImage: function () {
            $('.edumarque').each(function () {
                var t = 0;
                var i = 1;
                var $this = $(this);
                setInterval(function () {
                    t += i;
                    $this.css('background-position-x', -t + 'px');
                }, 10);
            });
        },


        popupMobileMenu: function (e) {
            $('.hamberger-button').on('click', function (e) {
                $('.popup-mobile-menu').addClass('active');
            });

            $('.close-button').on('click', function (e) {
                $('.popup-mobile-menu').removeClass('active');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400');
                $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open')
            });

            $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').on('click', function (e) {
                e.preventDefault();
                $(this).siblings('.submenu, .rbt-megamenu').toggleClass('active').slideToggle('400');
                $(this).toggleClass('open')
            })

            $('.popup-mobile-menu, .popup-mobile-menu .mainmenu.onepagenav li a').on('click', function (e) {
                e.target === this && $('.popup-mobile-menu').removeClass('active') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').siblings('.submenu, .rbt-megamenu').removeClass('active').slideUp('400') && $('.popup-mobile-menu .mainmenu .has-dropdown > a, .popup-mobile-menu .mainmenu .with-megamenu > a').removeClass('open');
            });
        },

        headerSticky: function () {
            $(window).on('scroll', function() {
                if ($('body').hasClass('rbt-header-sticky')) {
                    var stickyPlaceHolder = $('.rbt-sticky-placeholder'),
                        headerConainer = $('.rbt-header-wrapper'),
                        headerConainerH = headerConainer.outerHeight(),
                        topHeaderH = $('.rbt-header-top').outerHeight() || 0,
                        targrtScroll = topHeaderH + 200;
                    if ($(window).scrollTop() > targrtScroll) {
                        headerConainer.addClass('rbt-sticky');
                        stickyPlaceHolder.height(headerConainerH);
                    } else {
                        headerConainer.removeClass('rbt-sticky');
                        stickyPlaceHolder.height(0);
                    }
                }
            });
        },

        
        onePageNav: function () {
            $('.onepagenav').onePageNav({
                currentClass: 'current',
                changeHash: false,
                scrollSpeed: 500,
                scrollThreshold: 0.2,
                filter: '',
                easing: 'swing',
            });
        },

        transparentHeader: function () {
            if ($('.rbt-header').hasClass('rbt-transparent-header')) {
                var mainHeader = $('.rbt-header').outerHeight();
                $('body').addClass('rbt-header-transpernt-active');
                $('.header-transperent-spacer').css('padding-top', mainHeader + 'px');
            }
        },
        
        categoryMenuHover: function () {
            $('.vertical-nav-menu li.vertical-nav-item').mouseover(function () {
                $('.rbt-vertical-inner').hide();
                $('.vertical-nav-menu li.vertical-nav-item').removeClass('active');
                $(this).addClass('active');
                var selected_tab = $(this).find('a').attr("href");
                $(selected_tab).stop().fadeIn();
                return false;
            });
        },


        headerTopActivation: function () {
            $('.bgsection-activation').on('click', function () {
                $(this).parents('.rbt-header-campaign').addClass('deactive')
            })
        },

    

        showMoreBtn: function () {
            $.fn.hasShowMore = function () {
                return this.each(function () {
                    $(this).toggleClass('active');
                    $(this).text('Show Less');
                    $(this).parent('.has-show-more').toggleClass('active');
                    if ($(this).parent('.has-show-more').hasClass('active')) {
                        $(this).text('Show Less');
                    } else {
                        $(this).text('Show More');
                    }
                });
            };
            $(document).on('click', '.rbt-show-more-btn', function () {
                $(this).hasShowMore();
            });
        },

        sidebarVideoHidden: function () {
            var scrollTop = $('.sidebar-video-hidden');
            $(window).scroll(function () {
                // declare variable
                var topPos = $(this).scrollTop();
                // if user scrolls down - show scroll to top button
                if (topPos > 250) {
                    $(scrollTop).css('display', 'none');
                } else {
                    $(scrollTop).css('display', 'block');
                }
            });
        },

        courseActionBottom: function () {
            var scrollBottom = $('.rbt-course-action-bottom');
            $(window).scroll(function () {
                var topPos = $(this).scrollTop();
                var targetPossition = $(document).height() * 0.66; 
                var filled = (($(document).scrollTop() + window.innerHeight) / $(document).height());
                if (topPos > targetPossition && filled != 1) {
                    $(scrollBottom).addClass('rbt-course-action-active');
                } else {
                    $(scrollBottom).removeClass('rbt-course-action-active')
                }
            });
        },

        topbarExpend: function () {
            var windowWidth = $(window).width(); {
                if (windowWidth < 1199) {
                    $('.top-bar-expended').on('click', function () {
                        $('.top-expended-activation').hasClass('active') ? ( $('.top-expended-activation').removeClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: '32px' }) ) : ($('.top-expended-activation').addClass('active'), $('.top-expended-activation').find('.top-expended-wrapper').css({ height: ($('.top-expended-inner')).outerHeight() + 'px' }))
                    })
                    $(window).on('hresize', function() {
                        $('.top-expended-activation').hasClass('active') && $('.top-expended-activation').find('.top-expended-inner').css({
                            height: ($('.top-expended-inner')).outerHeight() + 'px'
                        })
                    })
                }
            }
        },

        categoryOffcanvas: function () {
            var windowWidth = $(window).width();
            if (windowWidth < 1200) {
                $('.rbt-side-offcanvas-activation').on('click', function () {
                    $('.rbt-offcanvas-side-menu').addClass('active-offcanvas')
                })
                $('.rbt-close-offcanvas').on('click', function () {
                    $('.rbt-offcanvas-side-menu').removeClass('active-offcanvas')
                })
                $('.rbt-offcanvas-side-menu').on('click', function (e) {
                    e.target === this && $('.rbt-offcanvas-side-menu').removeClass('active-offcanvas');
                });
                $('.rbt-vertical-nav-list-wrapper .vertical-nav-item a').on('click', function (e) {
                    e.preventDefault();
                    $(this).siblings('.vartical-nav-content-menu-wrapper').toggleClass('active').slideToggle('400');
                    $(this).toggleClass('active')
                })
            }
        },

        moveAnimation: function () {
            $('.scene').each(function () {
                new Parallax($(this)[0]);
            });
        },

        
    }
    smkn2Kebumen.i();


})(window, document, jQuery);







