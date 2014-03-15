<script>



			// cover startsite
			
			$('.teaser').each(function() {
	           var teaserclass = $(this).children().attr('class');
	           teaserclean = teaserclass.replace(/\s+/g, '-').replace('/[^a-zA-Z-]/g', '').toLowerCase();
	            console.log(teaserclean);	          
	            $(this).children().attr('class', teaserclean);	
	            $(this).children().css('display', 'none');           
	        });
	        
	        $('li a').hover(function(){  // mouseover 
		          var title = ('.'+$(this).attr('title'));
		          clean = title.replace(/\s+/g, '-').replace('/[^a-zA-Z-]/g', '').toLowerCase();
		          teasercover = '.teaser ' + clean;
		          console.log(teasercover); 
		          $(teasercover).fadeIn(100);
	        }, function(){  // mouseout 
	         	  $(teasercover).fadeOut(100);	         
	        });
	        
	        // cover startsite - end
	       
	        
	        
	        // navigation
	        
	        $('.menu').hover(function(){  // mouseover 
	               $('.menu').css('margin-top', '0px'); 
	               $('.rightnav').css('top', '50px');
	        }, function(){  // mouseout 
	         	  	
	         	  	 if ($('.logo').is(':hover')) {
	         	  	        $('.menu').css('margin-top', '0px'); 
	         	  	        $('.rightnav').css('top', '50px');
	         	  	     }  
	         	  	 else {
	         	  	 	setTimeout(function() {
	         	  	 	      $('.menu').css('margin-top', '-200px');
	         	  	 	      $('.rightnav').css('top', '-80px');  
	         	  	 		}, 150); 
	         	  	 }     
	        });
	        
	        $('.logo').mouseover(function(){
	               $('.menu').css('margin-top', '0px'); 
	               $('.rightnav').css('top', '50px');
	            });
	        
	        
	        // navigation - end
	        
	        
	        
	    	// bottom navigation
	    	
	    	$("#naviMenu").navi({
	    	  hash: "#!/",
	    	  content: $("#naviContent"),
	    	  useAjax: false,
	    	  animationType: "fade",
	    	  usePageTitle: true,
	    	  defaultPageTitle: ""
	    	 
	    	});
	    	
	    	// bottom navigation - end
	    	
	    	
	        // thumb #href linking
	    	
	    	$("#overview #series a").each(function(index) {
	    	    $(this).attr("href", "#photo" + (index + 1));
	    	});
	    	
	    	$("#campaigns #series a").each(function(index) {
	    	    $(this).attr("href", "#photo" + (index + 1));
	    	});
	    	
	    	$("#editorial #series a").each(function(index) {
	    	    $(this).attr("href", "#photo" + (index + 1));
	    	});
	    	
	    	$("#our-projects #series a").each(function(index) {
	    	    $(this).attr("href", "#photo" + (index + 1));
	    	});
	    	
	    	$("#film #series a").each(function(index) {
	    	    $(this).attr("href", "#photo" + (index + 1));
	    	});
	    	
	    	// thumb #href linking - end
	    	
	    		    		
	    	// detail slider
	    	
	    	$('#overview #series img').click(function(){
	    	
	    				/*$.get('/koken/storage/themes/brigittahorvat/ajax/detail_overview.html', function(data) {
		    					$('#ajax-overview').html(data); 
		    					console.log('ajax');  
            			})*/
            			
            			$(window).on('k-image-loaded', function() {	
	            			//$(window).trigger("resize");
	            			$('.iosSlider').iosSlider('update');
	            			            			
	            		});
	            		
   		    	  
	    		    	  $('#overview').hide();
	    		    	  $('#naviMenu li').removeClass('active');	
	    		    	  $('.iosSlider .slider').css('margin-top', 0); 
	
    		    
	    		    	  
	    		    	  function loaded() {
	    		    	  	 $(window).trigger("resize");
	    		    	  	 /*setTimeout(function() {
	    		    	       $('#detail').css('visibility', 'visible');	    		   	             
	    		    	  	}, 200);*/
	    		    	  	 $('#detail').css('visibility', 'visible');
	    		    	 	
	    		    	  }
	    		    	  
	    		    	 function slideChange(args) {
		    		    	 $('#detail img').removeClass('current');
		    		    	 $(args.currentSlideObject).addClass('current');
		    		    	 	
		    		    	 }
		    		    	 
		    		    function slideComplete(args) {
		    		    	 $(window).trigger("resize");	
		    		    	 $('#detail').css('visibility', 'visible');
		    		    	 }
	    		    	  
    		    	
	    		    	  /*setTimeout(function() {
	    		    	       $('#detail').css('visibility', 'visible');	    		   	             
	    		    	  	}, 200);*/
	    		    	  	
	    		    	  
	    		    	
	    		  
	    		    	  $('.iosSlider').iosSlider({ 
		    		    	    	desktopClickDrag: false,
		    		    	    	keyboardControls: true,
		    		    	    	infiniteSlider: true,
		    		    	    	snapToChildren: true,
		    		    	    	snapSlideCenter: true,
		    		    	    	navSlideSelector: $("#overview #series a"),
		    		    	    	onSliderLoaded: loaded,
		    		    	    	navNextSelector: $("#detail img"),
		    		    	    	navPrevSelector: $("#prev-slide"),
		    		    	    	onSlideChange: slideChange,
		    		    	    	unselectableSelector: '.unselectable',
		    		    	    	onSlideComplete: slideComplete
		    		    	    	});
		    		    	  });
		    		    	 
	    	     
    	    	    
	    	 $('#naviMenu li ').click(function(){ 
	    	 	$('#detail, #detail-campaign, #detail-editorial, #detail-film, #detail-our-projects').css('visibility', 'hidden');
	    	 	 
	    	 	$('.iosSlider').iosSlider('destroy');
	    	 	setTimeout(function() {
	    	 		    $(window).trigger("resize");   	 	      
	    	 		}, 200);	    	 	   
	    	    	});  
	    	    	
	    	    	  
	    	 // detail slider - end	  
	    		    	  
	 
	    	 // categories hide
		    	  
		   if ($('#filmcategory').hasClass('filmcontent')) {
			   	 $('.film').css('display', 'block');
			   	 console.log('visible');
			   	}
			   	
		   if ($('#editorialcategory').hasClass('editorialcontent')) {
			   	 $('.editorial').css('display', 'block');
			   	 console.log('visible');
			   	} 
			   	
		   if ($('#campaignscategory').hasClass('campaignscontent')) {
			   	 $('.campaigns').css('display', 'block');
			   	 console.log('visible');
			   	}  	
	    	  
	    	  
	    	  // categories hide - end
	    	 
	    	  	
	    	  // thumbnail layout
	    	  
	    	  function layout() {
	    	  			divbreite = $('#overview, #our-projects').width();
	    	  			//console.log(divbreite);
	    	  			
	    	  			bildverhaeltnis = 6.3333333333333;
	    	  						
	    	  		
	    	  			$('#series img').css('height',divbreite/bildverhaeltnis);
	    	  			
	    	  			//console.log($('#series img').first().css('height'));			
	    	  			
	    	  		}
	    	  
	    	  		layout();
	    	  
	    	  		$(window).resize(function(){
	    	  
	    	  			layout();
	    	  		});	
	    	  		
	    	  	// thumbnail layout - end
	    	
	    	 </script>