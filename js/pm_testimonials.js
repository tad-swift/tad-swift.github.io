/*
 * Testimonials Flow
 * Created by Pixel-Mafia
 * www.pixel-mafia.com
*/
"use strict";

var tadreik_ft_array = [],
	$tadreik_testimonials_flow = jQuery('.tadreik_testimonials_flow');

$tadreik_testimonials_flow.each(function() {
	var $this = jQuery(this);
	tadreik_ft_array['tadreik_ft_'+$this.attr('data-uniqid')] = {};
	var tadreik_ft_object = tadreik_ft_array['tadreik_ft_'+$this.attr('data-uniqid')];
	
	tadreik_ft_object.id = $this.attr('data-uniqid');
	tadreik_ft_object.obj = $this;
	tadreik_ft_object.size = $this.find('.tadreik_testimonials_flow_item').length;
	tadreik_ft_object.active_slide = 0;
	
	// Core Object Functions
	tadreik_ft_object.init = function() {
		
		// Init Counter
		var counter = 1;
		this.obj.find('.tadreik_testimonials_flow_item').each(function(){
			jQuery(this).attr('data-count', counter).addClass('tadreik_testimonials_flow_slide' + counter);
			counter++;
		});
		this.obj.addClass('module_loaded');
		
		// Init Controls
		var this_object = this;
		this.obj.find('.tadreik_testimonials_flow_prev').on('click', function(){		
			this_object.move.call(this_object, -1);
		});
		this.obj.find('.tadreik_testimonials_flow_next').on('click', function(){		
			this_object.move.call(this_object, 1);
		});

		// Init Touch Events
		this.obj.on("swiperight", function () {
			this_object.move.call(this_object, -1);
		});
		this.obj.on("swipeleft", function () {
			this_object.move.call(this_object, 1);
		});
		
        // Init Dots
        var $dots_container = this.obj.find('.tadreik_testimonials_flow_dots'),
            counter = 1;
        this.obj.find('.tadreik_testimonials_flow_item').each(function(){
            var $this = jQuery(this);
            $this.attr('data-count', counter).addClass('tadreik_testimonials_flow_slide' + counter);
            $dots_container.append('<a href="javascript:void(0)" class="tadreik_testimonials_flow_dot tadreik_testimonials_flow_dot'+ counter +'" data-count="'+ counter +'"></a>');
            counter++;
        });
        jQuery(this).addClass('module_loaded');

		this.move.call(this,1);
	}
	
	tadreik_ft_object.update = function() {
		if (jQuery('.tadreik_ts_flow_current').length) {
			jQuery('.tadreik_ts_flow_current').each(function(){
				jQuery(this).parents('.tadreik_testimonials_flow_inner').css('min-height', jQuery(this).height()+'px');
			});
		}
	}
	
	tadreik_ft_object.move = function(dir) {
		dir = parseInt(dir,10);
		if (dir > 0)
			this.active_slide++;
		if (dir < 0)
			this.active_slide--;
		this.active_slide = this.check.call(this,this.active_slide);
		this.set.call(this,this.active_slide);
	}
	
	tadreik_ft_object.check = function(this_val) {
		this_val = parseInt(this_val,10);
		if (this_val < 1) 
			this_val = this.size;
		if (this_val > this.size) 
			this_val = 1;
		return this_val;
	}
	
	tadreik_ft_object.set = function(item_id) {
		
		item_id = parseInt(item_id,10);
		
		this.obj.find('.tadreik_ts_flow_prev').removeClass('tadreik_ts_flow_prev');
		this.obj.find('.tadreik_ts_flow_current').removeClass('tadreik_ts_flow_current');
		this.obj.find('.tadreik_ts_flow_next').removeClass('tadreik_ts_flow_next');
		
		var this_prev = item_id - 1,
			this_next = item_id + 1;
		
		this_prev = this.check.call(this,this_prev);
		this_next = this.check.call(this,this_next);
		
		this.obj.find('[data-count='+ this_prev +']').addClass('tadreik_ts_flow_prev');
		this.obj.find('[data-count='+ item_id +']').addClass('tadreik_ts_flow_current');
		this.obj.find('[data-count='+ this_next +']').addClass('tadreik_ts_flow_next');
		
		this.update.call(this);
	}
});

jQuery(document).ready(function(){
	$tadreik_testimonials_flow.each(function(){
		var $this = jQuery(this),
			this_object = tadreik_ft_array['tadreik_ft_'+$this.attr('data-uniqid')];

		this_object.init.call(this_object);
	});
});

jQuery(window).on('load', function () {
	$tadreik_testimonials_flow.each(function(){
		var $this = jQuery(this),
			this_object = tadreik_ft_array['tadreik_ft_'+$this.attr('data-uniqid')];

		this_object.update.call(this_object);
	});
});

jQuery(window).resize(function(){
	$tadreik_testimonials_flow.each(function(){
		var $this = jQuery(this),
			this_object = tadreik_ft_array['tadreik_ft_'+$this.attr('data-uniqid')];

		this_object.update.call(this_object);
	});
});

jQuery(document).on('click', '.tadreik_testimonials_flow_dot', function(){
    var $parent = jQuery(this).parents('.tadreik_testimonials_flow'),
        this_object = tadreik_ft_array['tadreik_ft_'+$parent.attr('data-uniqid')];
    
    this_object.active_slide = jQuery(this).attr('data-count');
    this_object.set.call(this_object,this_object.active_slide);
});
