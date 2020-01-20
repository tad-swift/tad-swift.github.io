/*
 * Grid Gallery
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";
var $tadreik_container = jQuery('.tadreik_grid_inner'),
	tadreik_grid_array = [],
	$tadreik_grid_gallery_array = jQuery('.tadreik_grid_gallery_array'),
	$tadreik_grid_wrapper = jQuery('.tadreik_grid_wrapper');
	
// Isotope Activation
if ($tadreik_container.length) {
	if ($tadreik_container.hasClass('masonry_is_on')) {
		$tadreik_container.isotope({
			layoutMode: 'masonry'
		});			
	} else {
		$tadreik_container.isotope({
			layoutMode: 'fitRows'
		});			
	}
}

$tadreik_grid_wrapper.each(function() {
	var $this_obj = jQuery(this);
	tadreik_grid_array["tadreik_grid_" + $this_obj.attr('data-uniqid')] = {};
	var this_array = tadreik_grid_array["tadreik_grid_" + $this_obj.attr('data-uniqid')];
	this_array.id = jQuery(this).attr('data-uniqid');
	this_array.showed = 0;
	this_array.items = [];
	
	var this_items_array = this_array.items;
	if ($this_obj.find('.tadreik_grid_gallery_array').length) {
		$this_obj.find('.tadreik_grid_gallery_array').each(function() {
			jQuery(this).find('.tadreik_grid_array_item').each(function() {
				var $this = jQuery(this),
					tadreik_grid_item = {};
				tadreik_grid_item.slide_type = $this.attr('data-type');
				tadreik_grid_item.img = $this.attr('data-img');
				tadreik_grid_item.thmb = $this.attr('data-thmb');
				tadreik_grid_item.title = $this.attr('data-title');
				tadreik_grid_item.alt = $this.attr('data-alt');
				tadreik_grid_item.overlay = $this.attr('data-overlay');
				tadreik_grid_item.counter = $this.attr('data-counter');
				tadreik_grid_item.size = $this.attr('data-size');
				this_items_array.push(tadreik_grid_item);
			});
			jQuery(this).remove();
		});
	}
	this_array.obj = jQuery('.tadreik_grid_'+this_array.id);
    
	this_array.init = function () {
		var this_obj = this;
		this.obj.find('.grid_load_more').on("click", function () {
			this_obj.loadmore.call(this_obj);
		});
		this.setup.call(this);
		this.preloader.call(this);
	}
	
	this_array.preloader = function() {
		var this_obj = this,
			$this_dom = this.obj;
        $this_dom.find('.tadreik_grid_inner').isotope('layout');
		if ($this_dom.find('.load_anim:first').length > 0) {
            (function (img, src) {
                img.src = src;
                img.onload = function () {
                    jQuery('.load_anim:first').removeClass('anim_el2').removeClass('anim_el').removeClass('load_anim').animate({
                        'z-index': '15'
                    }, 200, function() {
                        this_obj.preloader.call(this_obj);
                    });
                };
            }(new Image(), jQuery('.load_anim:first').find('img').attr('src')));
		} else {
			this_obj.setup.call(this_obj);
		}
	}
	
	this_array.setup = function() {
		var this_obj = this,
			$this_dom = this.obj;
		if ($this_dom.find('.tadreik_js_bg_color').length) {
			$this_dom.find('.tadreik_js_bg_color').each(function () {
				jQuery(this).css('background-color', jQuery(this).attr('data-bgcolor'));
			});
		}
        
		var side_padding = Math.floor(parseInt($this_dom.find('.tadreik_grid_inner').attr('data-pad'))/2,10);
		if (tadreik_window.width() < 1200 && side_padding > 20) {
			side_padding = side_padding/2;
		}
		if (tadreik_window.width() < 760 && side_padding > 10) {
			side_padding = 10;
		}
		if (jQuery('.tadreik_single_gallery_grid').length) {
			$this_dom.find('.tadreik_grid_inner').css('margin', side_padding+'px').css('margin-bottom', '0px');
			jQuery('.tadreik_single_gallery_grid').css('padding-bottom', side_padding+'px');
		} else {
			$this_dom.find('.tadreik_grid_inner').css('margin', side_padding+'px').css('margin-top', -1*side_padding+'px');
		}
		if ($this_dom.find('.tadreik_grid_inner').hasClass('side_paddings_on')) {
			$this_dom.find('.tadreik_grid_inner').css('margin-left', -1*side_padding+'px').css('margin-right', -1*side_padding+'px');
		}
		$this_dom.find('.grid-item-inner').css({
			'margin-left' : side_padding+'px',
			'margin-top' : side_padding+'px',
			'margin-right' : side_padding+'px',
			'margin-bottom' : side_padding+'px'
		});
		$this_dom.find('.tadreik_grid_inner').isotope('layout');
		setTimeout("jQuery('.tadreik_grid_inner').isotope('layout')",1000);
	}
							   
	this_array.loadmore = function() {
		var this_obj = this,
			$this_dom = this.obj,
			tadreik_what_to_append = '',		
			tadreik_grid_post_per_page = $this_dom.attr('data-perload'),
			tadreik_uniqid = this.id,
			tadreik_allposts = this.items.length,
			tadreik_count = $this_dom.find('.grid-item').length,
			tadreik_ins_container = $this_dom.find('.tadreik_grid_inner'),
			tadreik_load_more_button = $this_dom.find('.grid_load_more'),
            tadreik_overlay = tadreik_ins_container.attr('data-overlay');
	
		if (this.showed >= tadreik_allposts) {
			tadreik_load_more_button.slideUp(300);
		} else {
			var tadreik_now_step = this.showed + parseInt(tadreik_grid_post_per_page) - 1;
			if ((tadreik_now_step + 1) < tadreik_allposts) {
				var tadreik_limit = tadreik_now_step;
			} else {
				var tadreik_limit = tadreik_allposts - 1;
				tadreik_load_more_button.slideUp(300);
			}
			
			var tadreik_swipebox_class = '';
			if (jQuery('.tadreik_single_gallery_wrapper ').length > 0) {
				tadreik_swipebox_class = 'swipebox';
			}
			for (var i = this.showed; i <= tadreik_limit; i++) {
				var tadreik_thishref = this.items[i].img,
				tadreik_what_to_append = tadreik_what_to_append +'\
                <div class="grid-item element anim_el load_anim grid_b2p">\
                    <div class="grid-item-inner">\
                        <a href="' + tadreik_thishref +'" class="swipebox" rel="grid_gallery'+ this.id +'" title="'+ this.items[i].title +'"></a>\
                        <img src="'+ this.items[i].thmb +'" alt="' + this.items[i].alt + '" class="grid_thmb"/>\
                        <div class="grid_overlay" style="background-color:'+ tadreik_overlay +'"></div>\
                        <div class="tadreik-img-preloader"></div>\
                    </div>\
				</div>';
                
				tadreik_count++;
				this.showed++;
			}

			var $tadreik_newItems = jQuery(tadreik_what_to_append);

			if (tadreik_ins_container.data('isotope')) {
				tadreik_ins_container.isotope('insert', $tadreik_newItems, function() {
                    tadreik_ins_container.isotope('layout');
				});
			}
            tadreik_ins_container.isotope('layout');
            this_obj.preloader.call(this_obj);
			this_obj.setup.call(this_obj);
		}
		jQuery('.tadreik_grid_inner').isotope("layout");
	}
    
});

if (jQuery('.tadreik_grid_inner').length > 0) {
	var $tadreik_container = jQuery('.tadreik_grid_inner');
}

jQuery(document).ready(function(){
	$tadreik_grid_wrapper.each(function() {
		var $this_obj = jQuery(this),
			this_obj = tadreik_grid_array["tadreik_grid_" + $this_obj.attr('data-uniqid')];
		this_obj.init.call(this_obj);
	});
});

jQuery(window).on('load', function () {
	$tadreik_grid_wrapper.each(function() {
		var $this_obj = jQuery(this),
			this_obj = tadreik_grid_array["tadreik_grid_" + $this_obj.attr('data-uniqid')];
		this_obj.setup.call(this_obj);
	});
});

jQuery(window).resize(function () {
	$tadreik_grid_wrapper.each(function() {
		var $this_obj = jQuery(this),
			this_obj = tadreik_grid_array["tadreik_grid_" + $this_obj.attr('data-uniqid')];
		this_obj.setup.call(this_obj);
	});
});