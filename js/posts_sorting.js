/*
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
if (jQuery('.tadreik_projects_grid_inner').length > 0) {
	var $tadreik_projects_container = jQuery('.tadreik_projects_grid_inner');
}
if (jQuery('.tadreik_albums_grid_inner').length > 0) {
	var $tadreik_albums_container = jQuery('.tadreik_albums_grid_inner');
}
if (jQuery('.tadreik_blog_grid_inner').length > 0) {
	var $tadreik_blog_container = jQuery('.tadreik_blog_grid_inner');
}

jQuery(document).ready(function(){
	if (jQuery('.tadreik_projects_grid_inner').length > 0) {
		setTimeout("tadreik_animateListProjects()", 500);
		tadreik_setup_projects_grid();
	}
	if (jQuery('.tadreik_albums_grid_inner').length > 0) {
		setTimeout("tadreik_animateListAlbums()", 500);
		tadreik_setup_albums_grid();
	}
	if (jQuery('.tadreik_blog_grid_inner').length > 0) {
		setTimeout("tadreik_animateListBlog()", 500);
		tadreik_setup_blog_grid();
	}
});

jQuery(window).on('load', function () {
	if (jQuery('.tadreik_projects_grid_inner').length > 0) {
		$tadreik_projects_container.isotope('layout');
		setTimeout("jQuery('.tadreik_projects_grid_inner').isotope('layout')",500);
	}
	if (jQuery('.tadreik_albums_grid_inner').length > 0) {
		$tadreik_albums_container.isotope('layout');
		setTimeout("jQuery('.tadreik_albums_grid_inner').isotope('layout')",500);
	}
	if (jQuery('.tadreik_blog_grid_inner').length > 0) {
		$tadreik_blog_container.isotope('layout');
		setTimeout("jQuery('.tadreik_blog_grid_inner').isotope('layout')",500);
	}
});
jQuery(window).resize(function () {
	if (jQuery('.tadreik_projects_grid_inner').length > 0) {
		$tadreik_projects_container.isotope('layout');
		setTimeout("jQuery('.tadreik_projects_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.tadreik_projects_grid_inner').isotope('layout')",1000);
	}
	if (jQuery('.tadreik_albums_grid_inner').length > 0) {
		$tadreik_albums_container.isotope('layout');
		setTimeout("jQuery('.tadreik_albums_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.tadreik_albums_grid_inner').isotope('layout')",1000);
	}
	if (jQuery('.tadreik_blog_grid_inner').length > 0) {
		$tadreik_blog_container.isotope('layout');
		setTimeout("jQuery('.tadreik_blog_grid_inner').isotope('layout')",500);
		setTimeout("jQuery('.tadreik_blog_grid_inner').isotope('layout')",1000);
	}
});

function tadreik_setup_blog_grid() {
	jQuery('.tadreik_blog_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (tadreik_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (tadreik_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}
		jQuery(this).parents('.tadreik_blog_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px',
		});
		jQuery(this).find('.tadreik_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	if (jQuery('.tadreik_grid_post_loading').length > 0) {
		jQuery(".tadreik_owlCarousel").on("initialized.owl.carousel", function (e) {
			jQuery(".tadreik_owlCarousel").css("opacity", "1");
		});
		jQuery(".tadreik_owlCarousel").owlCarousel(
			{
				items: 1,
				lazyLoad: true,
				loop: true,
				autoplay: false,
				autoplayTimeout: 5000,
				autoplayHoverPause: true,
				autoHeight: false
			}
		);
	}
	tadreik_theme_setup();
	
	setTimeout("tadreik_animateListBlog()",300);
}
function tadreik_setup_projects_grid() {	
	jQuery('.tadreik_projects_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (tadreik_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (tadreik_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}

		jQuery(this).parents('.tadreik_projects_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px'
		});
		jQuery(this).find('.tadreik_project_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	setTimeout("tadreik_animateListProjects()",300);
}

function tadreik_setup_albums_grid() {	
	jQuery('.tadreik_albums_grid_inner').each(function(){
		var setPad = Math.floor(parseInt(jQuery(this).attr('data-pad'))/2);
		if (tadreik_window.width() < 1200 && setPad > 20) {
			setPad = setPad/2;
		}
		if (tadreik_window.width() < 760 && setPad > 10) {
			setPad = 10;
		}

		jQuery(this).parents('.tadreik_albums_grid').css({
			'margin-left' : setPad+'px',
			'margin-top' : -1*setPad+'px',
			'margin-right' : setPad+'px',
		});
		jQuery(this).find('.tadreik_album_grid_post_inner').css({
			'margin-left' : setPad+'px',
			'margin-top' : setPad+'px',
			'margin-right' : setPad+'px',
			'margin-bottom' : setPad+'px'
		});
	});
	setTimeout("tadreik_animateListAlbums()",300);
}

function tadreik_animateListProjects() {
	if (tadreik_html.find('.tadreik_project_loading:first').length > 0) {
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				jQuery('.tadreik_project_loading:first').removeClass('tadreik_project_loading').animate({
					'z-index': '15'
				}, 200, function() {
					jQuery('.tadreik_projects_grid_inner').isotope('layout');
					tadreik_animateListProjects();
				});
			};
		}(new Image(), jQuery('.tadreik_project_loading:first').find('img').attr('src')));
	}
}
function tadreik_animateListAlbums() {
	if (tadreik_html.find('.tadreik_album_loading:first').length > 0) {
		(function (img, src) {
			img.src = src;
			img.onload = function () {
				jQuery('.tadreik_album_loading:first').removeClass('tadreik_album_loading').animate({
					'z-index': '15'
				}, 200, function() {
					jQuery('.tadreik_albums_grid_inner').isotope('layout');
					tadreik_animateListAlbums();
				});
			};
		}(new Image(), jQuery('.tadreik_album_loading:first').find('img').attr('src')));
	}
}
function tadreik_animateListBlog() {
	if (tadreik_html.find('.tadreik_grid_post_loading:first').length > 0) {
		jQuery('.tadreik_grid_post_loading:first').removeClass('tadreik_grid_post_loading').animate({
			'z-index': '15'
		}, 200, function() {
			jQuery('.tadreik_blog_grid_inner').isotope('layout');
			tadreik_animateListBlog();
		});
	}
}

function tadreik_ajax_query_posts_isotope(tadreik_ajax_query_posts_this, tadreik_ajax_query_posts_first_load) {
    var tadreik_return_to = tadreik_ajax_query_posts_this.attr('data-return-to');
	if (tadreik_ajax_query_posts_this.hasClass('tadreik_ajax_with_isotope')) {
		var tadreik_is_isotope = true;
	}
	jQuery('.' + tadreik_return_to).parent('div').addClass('tadreik_ajax_query_posts_active_preloader');
    var tadreik_ajax_query_posts_data_args = tadreik_ajax_query_posts_this.data('args');
    tadreik_ajax_query_posts_this.removeClass('tadreik_ajax_query_posts').addClass('tadreik_ajax_query_posts_disabled');
    if (tadreik_ajax_query_posts_first_load == true) {
        var tadreik_ajax_query_posts_per_page = parseInt(tadreik_ajax_query_posts_data_args['posts_first_load']);
        var tadreik_ajax_query_posts_per_page_old = tadreik_ajax_query_posts_data_args['posts_per_page'];
        tadreik_ajax_query_posts_data_args['posts_per_page'] = tadreik_ajax_query_posts_per_page;
    } else {
        var tadreik_ajax_query_posts_per_page = parseInt(tadreik_ajax_query_posts_data_args['posts_per_page']);
    }

    jQuery.post(tadreik_ajaxurl, {
        action: 'tadreik_ajax_query_posts',
        tadreik_ajax_query_posts: '' + JSON.stringify(tadreik_ajax_query_posts_data_args) + '',
    }).done(function (data) {
		var tadreik_items_to_append = jQuery(data);
		jQuery('.' + tadreik_return_to).isotope('insert', tadreik_items_to_append, function () {
			jQuery('.' + tadreik_return_to).ready(function () {
				jQuery('.' + tadreik_return_to).isotope('layout');
			});
		});			

        if (tadreik_ajax_query_posts_first_load == true) {
            tadreik_ajax_query_posts_data_args['posts_per_page'] = tadreik_ajax_query_posts_per_page_old;
        }
        tadreik_ajax_query_posts_data_args['offset'] = parseInt(tadreik_ajax_query_posts_data_args['offset']) + tadreik_ajax_query_posts_per_page;
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
        jQuery('.' + tadreik_return_to).parent('div').removeClass('tadreik_ajax_query_posts_active_preloader');
    });
}
if (jQuery('.tadreik_ajax_query_posts_isotope').length > 0) {
    jQuery('.tadreik_ajax_query_posts_isotope').each(function () {
        tadreik_ajax_query_posts_isotope(jQuery(this), true);
    });

    jQuery(document).on("click", ".tadreik_ajax_query_posts_isotope", function () {
        tadreik_ajax_query_posts_isotope(jQuery(this), false);
    });
}