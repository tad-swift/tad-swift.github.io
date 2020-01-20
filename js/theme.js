/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var tadreik_window = jQuery(window),
	tadreik_html = jQuery('html');
jQuery(document).ready(function () {
    if (jQuery('.tadreik_album_post_loading').length) {
        tadreik_albums_preload();
    }
    if (jQuery('#wpadminbar').length) {
        tadreik_html.addClass('has_admin_bar');
    }
	//Preloader
	if (jQuery('.tadreik_preloader_wrapper').length) {
		jQuery('.tadreik_preloader_wrapper').addClass('run_preloader');
	}
	
    //Menu
	jQuery('.tadreik_mobile_menu').html(jQuery('.tadreik_main_nav').html());
	jQuery('.tadreik_menu_toggler').on('click', function(){
		if (!jQuery(this).hasClass('tadreik_menu_toggler_mobile')) {
			jQuery('header.tadreik_header').toggleClass('tadreik_menu_opened');
			if (jQuery('.tadreik_aside_menu_wrapper').length) {
				tadreik_html.toggleClass('tadreik_aside_menu_opened');
			}
		}
	});
	jQuery('.tadreik_menu_toggler_mobile').on('click', function(){
		jQuery('header.tadreik_mobile_header').toggleClass('tadreik_menu_opened');
		jQuery('.tadreik_mobile_menu_wrapper').slideToggle(400);
	});

	//Complex Menu Scroll
	if (jQuery('.tadreik_aside_menu_wrapper').length && tadreik_window.width() > 960) {
		var menu_top = 0,
			menu_ground = jQuery('nav.tadreik_main_nav').height() - jQuery('ul.tadreik_menu').height(),
			menu_step = -200,
			deltaY = 0,
			this_obj = jQuery('ul.tadreik_menu'); 
		jQuery('ul.tadreik_menu').on('mousewheel', function (event) {
			var menu_top = 0,
				menu_ground = jQuery('nav.tadreik_main_nav').height() - jQuery('ul.tadreik_menu').height(),
				menu_step = -200,
				deltaY = 0,
				this_obj = jQuery('ul.tadreik_menu'); 
			
			deltaY = event.originalEvent.deltaY;
			if (jQuery('nav.tadreik_main_nav').height() < jQuery('ul.tadreik_menu').height()) {	 	
				var current_top = parseInt(jQuery('ul.tadreik_menu').css('top'), 10);
				if (deltaY > 0) {
					if ((current_top - deltaY) > menu_ground) {
						this_obj.css('top', current_top - deltaY + 'px');
					} else {
						this_obj.css('top', menu_ground + 'px');
					}
				}
				if (deltaY < 0) {
					if (current_top - deltaY < 0) {
						this_obj.css('top', current_top - deltaY + 'px');
					} else {
						this_obj.css('top', '0px');
					}
				}
				event.preventDefault();
			} else {
				jQuery('ul.tadreik_menu').css('top', '0px');
			}
		});
	}
	
    tadreik_theme_setup();
    jQuery(".tadreik_menu > li").on('mouseenter', function () {
		jQuery(this).addClass('tadreik_menu_active');
    });
	jQuery(".tadreik_menu > li").on('mouseleave', function () {
		jQuery(this).removeClass('tadreik_menu_active');
	});
	if(jQuery('.tadreik_js_transition').length) {
		jQuery('.tadreik_js_transition').each(function(){
			var transition_time = jQuery(this).attr('data-transition') + 'ms';
			jQuery(this).css({'transition-duration': transition_time});
		});
	}	
    if (jQuery('.tadreik_js_bg_color').length) {
        jQuery('.tadreik_js_bg_color').each(function () {
			if (jQuery(this).attr('data-bgcolor') !== '') {
            	jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
			}
        });
    }
    if (jQuery('.tadreik_js_bg_image').length) {
        jQuery('.tadreik_js_bg_image').each(function () {
            jQuery(this).css('background-image', 'url(' + jQuery(this).attr('data-src') + ')');
        });
    }
    if (jQuery('.tadreik_js_color').length) {
        jQuery('.tadreik_js_color').each(function () {
			if (jQuery(this).attr('data-color') !== '') {
            	jQuery(this).css('color', jQuery(this).attr('data-color'));
			}
        });
    }

    if (jQuery('.tadreik_js_height').length) {
        jQuery('.tadreik_js_height').each(function () {
			if (jQuery(this).attr('data-height') !== '') {
            	jQuery(this).css('height', jQuery(this).attr('data-height'));
			}
        });
    }

    if (jQuery('.tadreik_js_margin').length) {
        jQuery('.tadreik_js_margin').each(function () {
			if (jQuery(this).attr('data-marTop') !== '') {
            	jQuery(this).css('margin-top', jQuery(this).attr('data-marTop') + 'px');
			}
			if (jQuery(this).attr('data-marBottom') !== '') {
            	jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottom') + 'px');
			}
			if (jQuery(this).attr('data-marLeft') !== '') {
            	jQuery(this).css('margin-left', jQuery(this).attr('data-marLeft') + 'px');
			}
			if (jQuery(this).attr('data-marRight') !== '') {
            	jQuery(this).css('margin-right', jQuery(this).attr('data-marRight') + 'px');
			}
			if (tadreik_window.width() < 960) {
				if (jQuery(this).attr('data-marTopTablet') !== '') {
					jQuery(this).css('margin-top', jQuery(this).attr('data-marTopTablet') + 'px');
				}
				if (jQuery(this).attr('data-marBottomTablet') !== '') {
					jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottomTablet') + 'px');
				}
				if (jQuery(this).attr('data-marLeftTablet') !== '') {
					jQuery(this).css('margin-left', jQuery(this).attr('data-marLeftTablet') + 'px');
				}
				if (jQuery(this).attr('data-marRightTablet') !== '') {
					jQuery(this).css('margin-right', jQuery(this).attr('data-marRightTablet') + 'px');
				}
			}
			if (tadreik_window.width() < 760) {
				if (jQuery(this).attr('data-marTopMobile') !== '') {
					jQuery(this).css('margin-top', jQuery(this).attr('data-marTopMobile') + 'px');
				}
				if (jQuery(this).attr('data-marBottomMobile') !== '') {
					jQuery(this).css('margin-bottom', jQuery(this).attr('data-marBottomMobile') + 'px');
				}
				if (jQuery(this).attr('data-marLeftMobile') !== '') {
					jQuery(this).css('margin-left', jQuery(this).attr('data-marLeftMobile') + 'px');
				}
				if (jQuery(this).attr('data-marRightMobile') !== '') {
					jQuery(this).css('margin-right', jQuery(this).attr('data-marRightMobile') + 'px');
				}
			}
        });
    }

    if (jQuery('.tadreik_js_padding').length) {
        jQuery('.tadreik_js_padding').each(function () {
			if (jQuery(this).attr('data-padTop') !== '') {
            	jQuery(this).css('padding-top', jQuery(this).attr('data-padTop') + 'px');
			}
			if (jQuery(this).attr('data-padBottom') !== '') {
            	jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottom') + 'px');
			}
			if (jQuery(this).attr('data-padLeft') !== '') {
            	jQuery(this).css('padding-left', jQuery(this).attr('data-padLeft') + 'px');
			}
			if (jQuery(this).attr('data-padRight') !== '') {
            	jQuery(this).css('padding-right', jQuery(this).attr('data-padRight') + 'px');
			}
			if (tadreik_window.width() < 960) {
				if (jQuery(this).attr('data-padTopTablet') !== '') {
					jQuery(this).css('padding-top', jQuery(this).attr('data-padTopTablet') + 'px');
				}
				if (jQuery(this).attr('data-padBottomTablet') !== '') {
					jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottomTablet') + 'px');
				}
				if (jQuery(this).attr('data-padLeftTablet') !== '') {
					jQuery(this).css('padding-left', jQuery(this).attr('data-padLeftTablet') + 'px');
				}
				if (jQuery(this).attr('data-padRightTablet') !== '') {
					jQuery(this).css('padding-right', jQuery(this).attr('data-padRightTablet') + 'px');
				}				
			}
			if (tadreik_window.width() < 760) {
				if (jQuery(this).attr('data-padTopMobile') !== '') {
					jQuery(this).css('padding-top', jQuery(this).attr('data-padTopMobile') + 'px');
				}
				if (jQuery(this).attr('data-padBottomMobile') !== '') {
					jQuery(this).css('padding-bottom', jQuery(this).attr('data-padBottomMobile') + 'px');
				}
				if (jQuery(this).attr('data-padLeftMobile') !== '') {
					jQuery(this).css('padding-left', jQuery(this).attr('data-padLeftMobile') + 'px');
				}
				if (jQuery(this).attr('data-padRightMobile') !== '') {
					jQuery(this).css('padding-right', jQuery(this).attr('data-padRightMobile') + 'px');
				}				
			}
        });
    }

    if (jQuery('a.swipebox').length) {
        tadreik_html.addClass('tadreik_swipe_box');
        jQuery('.swipebox').swipebox({
			selector: '.swipebox',
            afterOpen: function () {
                tadreik_setup_box();
            }
        });
    }
	if (jQuery('.tadreik_blog_carousel').length) {
		jQuery('.tadreik_blog_carousel').each(function(){
			jQuery(this).on("initialized.owl.carousel", function(e) {
				jQuery(".tadreik_owlCarousel").css("opacity", "1");
			});
			jQuery(this).owlCarousel(
				{
					items:1,
					lazyLoad:true,
					loop:true,
					autoplay:false,
					autoplayTimeout:5000,
					autoplayHoverPause:true,
					autoHeight:true
				}
			);			
		});
	}
    if (jQuery('.tadreik_image_carousel').length) {
        jQuery(".tadreik_image_carousel").each(function () {
            var setPad = parseInt(jQuery(this).attr('data-padding'), 10),
                autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'),10),
                onScreen = parseInt(jQuery(this).attr('data-onScreen'),10);
            jQuery(this).css({
                'padding-top': setPad + 'px',
                'padding-bottom': setPad + 'px'
            });
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
                    margin: setPad,
                    responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: 1.5
                        },
                        760: {
                            items: onScreen
                        }
                    }
                }
            );
        });
    }
    if (jQuery('.tadreik_testimonials_slider').length) {
        jQuery(".tadreik_testimonials_slider").each(function () {
            var autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'), 10);
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    items: 3,
                    autoHeight: true,
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
					margin: 60,
					responsive: {
                        // breakpoint from 0 up
                        0: {
                            items: 1
                        },
						760: {
							items: 3,
							margin: 20
						},
                        960: {
                            items: 3
                        }
                    }
                }
            );
        });
    }
    if (jQuery('.tadreik_works_slider').length) {
        jQuery(".tadreik_works_slider").each(function () {
            var autoplay = jQuery(this).attr('data-autoplay'),
                speed = parseInt(jQuery(this).attr('data-speed'), 10);
            jQuery(this).on("initialized.owl.carousel", function (e) {
                jQuery(this).css("opacity", "1");
            });
            jQuery(this).owlCarousel(
                {
                    items: 1,
                    autoHeight: true,
                    center: true,
                    lazyLoad: true,
                    loop: true,
                    autoplay: autoplay,
                    autoplayTimeout: speed,
                    autoplayHoverPause: true,
                    navigation: false,
                    margin: 30
                }
            );
        });
    }
    if (jQuery('.tadreik_single_album_head').length) {
        setup_tadreik_single_album();
        tadreik_html.addClass('tadreik_single_album');

        if (tadreik_window.scrollTop() > 10) {
            tadreik_html.addClass('header_scrolled');
        }
        tadreik_window.on('scroll', function () {
            if (tadreik_window.scrollTop() > 10) {
                tadreik_html.addClass('header_scrolled');
            } else {
                tadreik_html.removeClass('header_scrolled');
            }
        });
        jQuery('a.tadreik_album_down_arrow').on('click', function () {
            if (jQuery('#wpadminbar').length) {
                var tadreik_album_featured_height = tadreik_window.height() - jQuery('#wpadminbar').height();
            } else {
                var tadreik_album_featured_height = tadreik_window.height();
            }

            jQuery('html, body').stop().animate({scrollTop: tadreik_album_featured_height + 'px'}, 600);
        });
    }
	
	if (jQuery('.tadreik_skill_block').length) {
		jQuery('.tadreik_skill_block').each(function(){
			var setVal = jQuery(this).attr('data-value');
			jQuery(this).find('.tadreik_skill_bar').width(setVal+'%').css('left', -1*setVal + '%').animate(
				{'left' : '0%'}, 
				{duration: 5000, step: function(now) {
						var data = Math.ceil(now) + parseInt(setVal, 10);
						jQuery(this).find('.tadreik_skill_value').html(data+'%');
					}
				}
			);
		});
	}
	if (jQuery('.personal_preloader').length) {
		tadreik_init_personal_preloader();
	}
	if (jQuery('.tadreik_aside_menu_wrapper').length) {
		tadreik_html.on('mousewheel', function (event) {
			if(tadreik_html.hasClass('tadreik_aside_menu_opened')) {
				event.preventDefault();
				tadreik_window.scrollTop(0);
			}
		});
	}

	//Back To Top
	jQuery('.tadreik_back_to_top').attr('data-bottom', parseInt(jQuery('.tadreik_back_to_top').css('bottom'), 10));
	if (tadreik_window.scrollTop() > tadreik_window.height()) {
		jQuery('.tadreik_back_to_top').addClass('tadreik_show_me');
	} else {
		jQuery('.tadreik_back_to_top').removeClass('tadreik_show_me');
		if (jQuery('.tadreik_footer').length) {
			var footer_offset = jQuery('.tadreik_footer').offset().top,
				check_footer_state = tadreik_window.scrollTop() + tadreik_window.height(),
				tadreik_footer_showed = 'no',
				tadreik_b2t_fixer = 0;
				
			if ( check_footer_state >= footer_offset) {
				tadreik_b2t_fixer = check_footer_state - footer_offset;
				tadreik_footer_showed = 'yes';
			} else {
				tadreik_footer_showed = 'no';
				tadreik_b2t_fixer = 0;
			}
			jQuery('.tadreik_back_to_top').css('bottom', parseInt(jQuery('.tadreik_back_to_top').attr('data-bottom'), 10) + tadreik_b2t_fixer + 'px');
		}
	}
	tadreik_window.on('scroll', function(){
		if (tadreik_window.scrollTop() > tadreik_window.height()) {
			jQuery('.tadreik_back_to_top').addClass('tadreik_show_me');
		} else {
			jQuery('.tadreik_back_to_top').removeClass('tadreik_show_me');
		}
		if (jQuery('.tadreik_footer').length) {
			var footer_offset = jQuery('.tadreik_footer').offset().top,
				check_footer_state = tadreik_window.scrollTop() + tadreik_window.height(),
				tadreik_footer_showed = 'no',
				tadreik_b2t_fixer = 0;
				
			if ( check_footer_state >= footer_offset) {
				tadreik_b2t_fixer = check_footer_state - footer_offset;
				tadreik_footer_showed = 'yes';
			} else {
				tadreik_footer_showed = 'no';
				tadreik_b2t_fixer = 0;
			}
			jQuery('.tadreik_back_to_top').css('bottom', parseInt(jQuery('.tadreik_back_to_top').attr('data-bottom'), 10) + tadreik_b2t_fixer + 'px');
		}
	});
	jQuery('.tadreik_back_to_top').on('click', function(){
		jQuery('html, body').stop().animate({scrollTop: 0}, 400, function(){
			jQuery('.tadreik_back_to_top').removeClass('tadreik_show_me');
		});
	});
	
	if (jQuery('.tadreik_content_under_header').length) {
		tadreik_push_content_under_header();
	}
	
	if (jQuery('.tadreik_projects_inner').length) {
		tadreik_projects_listing_setup();
	}

	//Flickr
	if (jQuery('.tadreik_flickr_widget_wrapper').length) {
		tadreik_flickr_widget();
	}
	
	//Coming Soon
	if (jQuery('.tadreik_cs_content_wrapper').length) {
		jQuery("time").countDown({
			with_separators: false
		});
	}
	
	//Contact Form
	jQuery('#tadreik_contact_form input[type=submit]').on('click', function(){
		var this_contact = jQuery(this).parents('form');
		jQuery.post('mail.php', {
			send_mail: 'true',
			form_name: this_contact.find('input[name=name]').val(),
			form_email: this_contact.find('input[name=email]').val(),
			form_text: this_contact.find('textarea[name=message]').val(),
		}).done(function (data) {
			alert(data);
		});

		return false;
	});
	
	// Isotope Activation
    if (jQuery('.tadreik_blog_grid_inner').length) {
		jQuery('.tadreik_blog_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    if (jQuery('.tadreik_projects_grid_inner').length) {
		jQuery('.tadreik_projects_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    if (jQuery('.tadreik_albums_grid_inner').length) {
		jQuery('.tadreik_albums_grid_inner').isotope({
			layoutMode: 'masonry'
		});			
	}
    
	// Filter
    jQuery('.tadreik_filter_block li').eq(0).find('a').click();
    jQuery('.tadreik_filter_block li a').on('click', function(){
		var $this = jQuery(this),
			$this_filter = jQuery(this).parents('div.tadreik_filter_block'),
			$this_parent = $this_filter.parent('div');
		if ($this_parent.find('.tadreik_projects_grid_inner').length) {
			var $this_isotope = $this_parent.find('.tadreik_projects_grid_inner');
		}
		if ($this_parent.find('.tadreik_albums_grid_inner').length) {
			var $this_isotope = $this_parent.find('.tadreik_albums_grid_inner');
		}
		if ($this_parent.find('.tadreik_blog_grid_inner').length) {
			var $this_isotope = $this_parent.find('.tadreik_blog_grid_inner');
		}
        $this_filter.find('a').removeClass('is-checked');
        $this_filter.find('li').removeClass('is-checked');
        $this.addClass('is-checked');
        $this.parent().addClass('is-checked');
        var filterSelector = $this.attr('data-option-value');

		$this_isotope.isotope({
			filter: filterSelector
		});
		return false;
    });
});

jQuery(window).on('load', function () {
	if (jQuery('.tadreik_preloader_wrapper').length) {
		jQuery('.tadreik_preloader_wrapper').addClass('remove_preloader');
		setTimeout("jQuery('.tadreik_preloader_wrapper').remove()", 600);
	}	
    if (jQuery('.tadreik_image_carousel').length) {
        jQuery('.tadreik_image_carousel').trigger('refresh.owl.carousel');
    }
    if (jQuery('.tadreik_single_album_head').length) {
        setup_tadreik_single_album();
    }
    tadreik_theme_setup();
    setTimeout("tadreik_theme_setup()", 500);
});

jQuery(window).on('resize', function () {
    if (jQuery('.swipebox').length) {
        if (jQuery.swipebox.isOpen) {
            tadreik_setup_box();
            setTimeout("tadreik_setup_box()", 500);
        }
    }
    if (jQuery('.tadreik_single_album_head').length) {
        setup_tadreik_single_album();
    }
	if (jQuery('.tadreik_projects_inner').length) {
		tadreik_projects_listing_setup();
	}
    tadreik_theme_setup();
	if (tadreik_html.hasClass('tadreik_content_under_header')) {
		tadreik_push_content_under_header();
	}
});

function tadreik_init_personal_preloader() {
	if (jQuery('.tadreik_ribbon_block2preload').length) {
		tadreik_init_pp4ribbon_slider();
	}
}

function tadreik_init_pp4ribbon_slider() {
	if (jQuery('.tadreik_ribbon_block2preload:first').length) {
		var $this_obj = jQuery('.tadreik_ribbon_block2preload:first');
		(function (img, src) {
			img.src = src;			
			img.onload = function () {
				$this_obj.removeClass('tadreik_ribbon_block2preload').addClass('tadreik_block_loaded').animate({					
					'z-index': '3'
				}, 100, function() {					
					tadreik_init_pp4ribbon_slider();
				});
			};                
		}(new Image(), $this_obj.find('img').attr('src')));

		if ($this_obj.parents('.tadreik_ribbon_slider_wrapper').find('.tadreik_ribbon_slide1').hasClass('tadreik_block_loaded') && !$this_obj.parents('.tadreik_ribbon_slider_wrapper').find('.tadreik_ribbon_slider').hasClass('started')) {
			$this_obj.parents('.tadreik_ribbon_slider_wrapper').find('.tadreik_ribbon_slider').addClass('started');
		}
	}
}

function tadreik_theme_setup() {
    jQuery(".tadreik_owlCarousel").each(function () {
        jQuery(this).trigger('refresh.owl.carousel');
    });
	if (jQuery('.tadreik_pf_video_16x9').length) {
		jQuery('.tadreik_pf_video_16x9').each(function(){
			jQuery(this).find('iframe').height((jQuery(this).width()/16)*9);
		});
	}
	
    if (jQuery('.search_container').length) {
        if (jQuery('#wpadminbar').length) {
            var search_min_height = tadreik_window.height() - jQuery('.tadreik_header').height() - jQuery('.tadreik_footer').height() - jQuery('#wpadminbar').height();
        } else {
            var search_min_height = tadreik_window.height() - jQuery('.tadreik_header').height() - jQuery('.tadreik_footer').height();
        }
        jQuery('.search_container').css('min-height', search_min_height + 'px');
    }
    if (jQuery('.tadreik_price_table').length) {
        jQuery('.tadreik_price_table').each(function () {
            var set_price_width = 100 / jQuery(this).find('.tadreik_price_table_item').length;
            jQuery(this).find('.tadreik_price_table_item').css('width', set_price_width + '%');
        });
    }
    if (jQuery('.tadreik_blog_grid_ratio').length) {
        jQuery('.tadreik_blog_grid_ratio').each(function () {
            var setHeight = Math.floor(jQuery(this).width() * jQuery(this).attr('data-ratio'));
            jQuery(this).height(setHeight);
        });
    }
	
	//Complex Menu Setup
	if (jQuery('.tadreik_aside_menu_wrapper').length && tadreik_window.width() > 960) {
		var tadreik_main_level = jQuery('.tadreik_aside_menu_wrapper').find('.tadreik_menu').children('li'),
			tadreik_sub_level1 = tadreik_main_level.children('ul'),
			tadreik_sub_level1_li = tadreik_main_level.children('ul').children('li'),
			tadreik_sub_level2 = tadreik_sub_level1_li.children('ul'),
			tadreik_sub_level2_li = tadreik_sub_level2.children('li'),
			tadreik_nav_width = jQuery('.tadreik_main_nav').width(),
			set_w1 = Math.floor(tadreik_nav_width*0.35),
			set_w2 = Math.floor(tadreik_nav_width*0.22),
			set_space = Math.floor(tadreik_nav_width*0.09);
			
		tadreik_main_level.width(set_w1);
		tadreik_sub_level1.width(set_w2).css('left', set_w1 + 'px').css('padding-left', set_space + 'px');
		tadreik_sub_level2.width(set_w2).css('left', set_w2 + 'px').css('padding-left', set_space + 'px');
	}
	
	//Content Under the Header
	if (jQuery('.tadreik_content_under_header').length) {
		tadreik_push_content_under_header();
	}
}

function pm_load_blog_posts() {
	
    if (jQuery('.tadreik_grid_post_loading').length) {
        jQuery('.tadreik_grid_post_loading:first').removeClass('tadreik_grid_post_loading').animate({
            'z-index': '3'
        }, 200, function () {
            pm_load_blog_posts();
        });
    }

}
function tadreik_setup_box() {
    var swipe_slider = jQuery('#swipebox-slider'),
        swipe_title = jQuery('#swipebox-top-bar'),
        swipe_bottom = jQuery('#swipebox-bottom-bar'),
        setHeight = 0;
    setHeight = jQuery(window).height() - swipe_title.height() - swipe_bottom.height();
    swipe_slider.height(setHeight).css('top', swipe_title.height());
}

jQuery(document).on("click", "#swipebox-container .slide.current img", function (e) {
    jQuery('#swipebox-next').trigger('click');
    e.stopPropagation();
});

jQuery(document).on("click", "#swipebox-container", function (e) {
    jQuery('#swipebox-close').trigger('click');
});

function tadreik_ajax_query_posts(tadreik_ajax_query_posts_this, tadreik_ajax_query_posts_first_load) {
    var tadreik_return_to = tadreik_ajax_query_posts_this.attr('data-return-to');
	if (tadreik_ajax_query_posts_this.hasClass('tadreik_ajax_with_isotope')) {
		var tadreik_is_isotope = true;
	}
    jQuery('.' + tadreik_return_to).addClass('tadreik_ajax_query_posts_active_preloader');
    jQuery('.' + tadreik_return_to).parent('div').addClass('tadreik_ajax_query_posts_active_preloader');
    var tadreik_ajax_query_posts_data_args = tadreik_ajax_query_posts_this.data('args');
    tadreik_ajax_query_posts_this.removeClass('tadreik_ajax_query_posts').addClass('tadreik_ajax_query_posts_disabled');
    if (tadreik_ajax_query_posts_first_load == true) {
        var tadreik_ajax_query_posts_per_page = parseInt(tadreik_ajax_query_posts_data_args['posts_first_load'], 10);
        var tadreik_ajax_query_posts_per_page_old = tadreik_ajax_query_posts_data_args['posts_per_page'];
        tadreik_ajax_query_posts_data_args['posts_per_page'] = tadreik_ajax_query_posts_per_page;
    } else {
        var tadreik_ajax_query_posts_per_page = parseInt(tadreik_ajax_query_posts_data_args['posts_per_page'], 10);
    }

    jQuery.post(tadreik_ajaxurl, {
        action: 'tadreik_ajax_query_posts',
        tadreik_ajax_query_posts: '' + JSON.stringify(tadreik_ajax_query_posts_data_args) + '',
    }).done(function (data) {
       	jQuery('.' + tadreik_return_to).append(data);
        if (tadreik_ajax_query_posts_first_load == true) {
            tadreik_ajax_query_posts_data_args['posts_per_page'] = tadreik_ajax_query_posts_per_page_old;
        }
        tadreik_ajax_query_posts_data_args['offset'] = parseInt(tadreik_ajax_query_posts_data_args['offset'], 10) + tadreik_ajax_query_posts_per_page;
        tadreik_ajax_query_posts_data_args['posts_counter'] = parseInt(tadreik_ajax_query_posts_data_args['posts_counter'], 10) + tadreik_ajax_query_posts_per_page;
        tadreik_ajax_query_posts_this.attr('data-args', JSON.stringify(tadreik_ajax_query_posts_data_args));
        tadreik_ajax_query_posts_this.addClass('tadreik_ajax_query_posts').removeClass('tadreik_ajax_query_posts_disabled');
        if (tadreik_ajax_query_posts_data_args['ajax_callback_function']) {
            window[tadreik_ajax_query_posts_data_args['ajax_callback_function']]();
        }
        var all_posts_this = jQuery('.' + tadreik_return_to).find('input[name="count_posts"]'),
            last_post_this = jQuery('.' + tadreik_return_to).find('input[name="posts_counter"]'),
            all_posts = parseInt(all_posts_this.attr('value'), 10),
            last_post = parseInt(last_post_this.attr('value'), 10);

        all_posts_this.remove();
        last_post_this.remove();

        if (last_post > all_posts) {
            tadreik_ajax_query_posts_this.fadeOut();
        }
        jQuery('.' + tadreik_return_to).removeClass('tadreik_ajax_query_posts_active_preloader');
		jQuery('.' + tadreik_return_to).parent('div').removeClass('tadreik_ajax_query_posts_active_preloader');
    });
}
if (jQuery('.tadreik_ajax_query_posts').length) {
    jQuery('.tadreik_ajax_query_posts').each(function () {
        tadreik_ajax_query_posts(jQuery(this), true);
    });

    jQuery(document).on("click", ".tadreik_ajax_query_posts", function () {
        tadreik_ajax_query_posts(jQuery(this), false);
    });
}

function tadreik_preloader() {
    if (jQuery('.tadreik_split_showcase').length) {
        //Split Showcase Slides
        if (jQuery('.tadreik_preload_slide:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.tadreik_preload_slide:first').removeClass('tadreik_preload_slide').addClass('tadreik_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        tadreik_preloader();
                    });
                };
            }(new Image(), jQuery('.tadreik_preload_slide:first').attr('data-src')));
        } else {
            tadreik_split_gallery.removeClass('wait4load');
        }

        if ((jQuery('.tadreik_odd_slide1').hasClass('tadreik_slide_loaded') && jQuery('.tadreik_even_slide1').hasClass('tadreik_slide_loaded')) && !tadreik_split_gallery.hasClass('started')) {
            run_tadreik_split_slider();
        }
    }

    if (jQuery('.tadreik_ribbon_slider_wrapper').length) {
        //Ribbon Slides
        if (jQuery('.tadreik_preload_slide:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.tadreik_preload_slide:first').removeClass('tadreik_preload_slide').addClass('tadreik_slide_loaded').animate({
                        'z-index': '15'
                    }, 100, function () {
                        tadreik_preloader();
                    });
                };
            }(new Image(), jQuery('.tadreik_preload_slide:first').find('img').attr('src')));
        } else {
            tadreik_ribbon_slider.removeClass('wait4load');
        }

        if (jQuery('.tadreik_ribbon_slide1').hasClass('tadreik_slide_loaded') && !tadreik_ribbon_slider.hasClass('started')) {
            run_tadreik_ribbon_slider();
        }
    }
}

function tadreik_albums_preload() {
    jQuery('.tadreik_album_post_loading:first')
    if (jQuery('.tadreik_album_post_loading').length) {
        //Fullscreen Slideshow Slides
        if (jQuery('.tadreik_album_post_loading:first').length) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.tadreik_album_post_loading:first').removeClass('tadreik_album_post_loading').animate({
                        'z-index': '15'
                    }, 200, function () {
                        tadreik_albums_preload();
                    });
                };
            }(new Image(), jQuery('.tadreik_album_post_loading:first').find('img').attr('src')));
        }
    }
}

function tadreik_albums_listing_setup() {
    tadreik_albums_preload();
}

function setup_tadreik_single_album() {
    if (jQuery('#wpadminbar').length) {
        var tadreik_album_featured_height = tadreik_window.height() - jQuery('#wpadminbar').height();
    } else {
        var tadreik_album_featured_height = tadreik_window.height();
    }

    jQuery('.tadreik_single_album_head').css('margin-top', -1 * jQuery('header.tadreik_header').height() + 'px').height(tadreik_album_featured_height);
}

function tadreik_masonry_blog_setup() {
	tadreik_theme_setup();
	setTimeout('tadreik_theme_setup()', 300);
}

jQuery(document).on('mouseenter', '.tadreik_project_image_part', function(){
	if (tadreik_window.width() > 760)  {
		jQuery(this).parents('.tadreik_project_post_inner').addClass('tadreik_project_hovered');
	}
});
jQuery(document).on('mouseleave', '.tadreik_project_image_part', function(){
	jQuery(this).parents('.tadreik_project_post_inner').removeClass('tadreik_project_hovered');
});

function tadreik_projects_listing_setup() {
	jQuery('.tadreik_project_post_wrapper').each(function(){
		var img_part = jQuery(this).find('.tadreik_project_image_part'),
			content_part = jQuery(this).find('.tadreik_project_content_part'),
			set_height = img_part.width()*2 * parseInt(jQuery(this).attr('data-height'), 10)/parseInt(jQuery(this).attr('data-width'), 10);
		if (set_height < content_part.find('.tadreik_project_post_content').height()) {
			set_height = content_part.find('.tadreik_project_post_content').height();
		}
		img_part.height(set_height);
		content_part.height(set_height);
		img_part.find('.tadreik_stand_fi_project_listing').css('background-image', 'url(' + img_part.find('.tadreik_stand_fi_project_listing').attr('data-src') + ')');
	});
	if (jQuery('.tadreik_project_loading').length) {
		tadreik_projects_listing_loading();
	}
}

function tadreik_projects_listing_loading() {
	if (jQuery('.tadreik_project_loading:first').length) {
		var $this_obj = jQuery('.tadreik_project_loading:first');
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				$this_obj.removeClass('tadreik_project_loading').addClass('tadreik_project_loaded').animate({
					'z-index': '3'
				}, 100, function() {
					tadreik_projects_listing_loading();
				});
			};
		}(new Image(), $this_obj.find('.tadreik_stand_fi_project_listing').attr('data-src')));
	}	
}

function tadreik_push_content_under_header() {
	var header_height = jQuery('header.tadreik_header').height(),
		mobile_header_height = jQuery('header.tadreik_mobile_header').height();
	jQuery('header.tadreik_header').css('margin-bottom', -1*header_height+'px');
	jQuery('header.tadreik_mobile_header').css('margin-bottom', -1*mobile_header_height+'px');
	jQuery('.tadreik_mobile_menu_wrapper').css('margin-bottom', mobile_header_height+'px');
	
}

// PM Flicker Widget
function tadreik_flickr_widget () {
	jQuery('.tadreik_flickr_widget_wrapper').each(function () {
		var flickrid = jQuery(this).attr('data-flickrid'),
			widget_id = jQuery(this).attr('data-widget_id'),
			widget_number = jQuery(this).attr('data-widget_number');
		
		jQuery(this).addClass('tadreik_flickr_widget_wrapper'+flickrid);

		jQuery.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?id="+widget_id+"&lang=en-us&format=json&jsoncallback=?", function(data){
			jQuery.each(data.items, function(i,item){
				if(i<widget_number){
					jQuery("<img/>").attr("src", item.media.m).appendTo(".tadreik_flickr_widget_wrapper"+flickrid).wrap("<div class=\'tadreik_flickr_badge_image\'><a href=\'" + item.link + "\' target=\'_blank\' title=\'Flickr\'></a></div>");
				}
			});
		});
	});
}