window.onload = function(){
	window.addEventListener("resize", function() {
		var positionTopStart = -8;
		var image = document.getElementById('imageid');
		var startInnerWidth = 100;
		var currentWidth = innerWidth/1536*100;
		var count = startInnerWidth-innerWidth/1536*100;
			if (count>0){
				imageid.style.top = (positionTopStart+0.55*count)+"%";
			}      
	    }, false);

	var navBtn = document.getElementById('menubtn');
	var myNav = getComputedStyle(nav);
	  menubtn.onclick = function(){
		if (myNav.display == 'none'){
	     nav.classList.add ('active');
		}
		else{
		 nav.classList.remove ('active');	
		}
	}




	var marketChange1 = document.getElementById('market1');
	var marketChange2 = document.getElementById('market2');
	var marketChange3 = document.getElementById('market3');
	var newM = document.getElementById('new');
	var popularM = document.getElementById('popular');
	var picksM = document.getElementById('picks');
     
        popular.onclick = function(){
        	if (marketChange1.style.display == 'grid'){
        	    TweenMax.to('#market1', 2, {opacity:0}); 	    
            }
            else if(marketChange3.style.display == 'grid'){
            	TweenMax.to('#market3', 2, {opacity:0});        	    
            }
        	    marketChange1.style.opacity=('0');	
        	    marketChange3.style.opacity=('0');	
        	    marketChange2.style.display=('grid');
        	    marketChange3.style.display=('none');
        	    marketChange1.style.display=('none');
        	    TweenMax.to('#market2', 3, {opacity:1});
        	    popularM.style.color = '#623232';
        	    newM.style.color = '#bdb9b5';
        	    picksM.style.color = '#bdb9b5';
        }
        picks.onclick = function(){
        	if (marketChange1.style.display == 'grid'){
        	    TweenMax.to('#market1', 2, {opacity:0});
            }
            else if(marketChange2.style.display == 'grid'){
            	TweenMax.to('#market1', 2, {opacity:0});
            }
        	    marketChange1.style.opacity=('0');	
        	    marketChange2.style.opacity=('0');
        	     marketChange2.style.display=('none');
        	    marketChange3.style.display=('grid');
        	    marketChange1.style.display=('none');
        	    TweenMax.to('#market3', 3, {opacity:1});
        	    popularM.style.color = '#bdb9b5';
        	    newM.style.color = '#bdb9b5';
        	    picksM.style.color = '#623232';	
        }
        newM.onclick = function(){
        	if (marketChange2.style.display == 'grid'){
        	TweenMax.to('#market2', 2, {opacity:0});
	        }
	        else{
        	TweenMax.to('#market3', 2, {opacity:0});
            }
        	    marketChange2.style.opacity=('0');	
        	    marketChange3.style.opacity=('0');
        	     marketChange2.style.display=('none');
        	    marketChange3.style.display=('none');
        	    marketChange1.style.display=('grid');
        	    TweenMax.to('#market1', 3, {opacity:1});
        	    popularM.style.color = '#bdb9b5';
        	    newM.style.color = '#623232';
        	    picksM.style.color = '#bdb9b5';		
        }

    


    var btnOpen = document.getElementById('btn');
	var btnHide = document.getElementById('hide');
	var formShow = document.getElementById('form_help');
	    btn.onclick = function() {
	    	TweenMax.to('#form_help', 0.6, {left:"-=365px"});
	    	form_help.style.position = 'fixed';
	    	btnOpen.style.display = 'none';
	    	btnHide.style.display = 'block';
	    }
	 
	    btnHide.onmouseover = function() {
            TweenMax.to('#hide', 0.6, {x:10, repeat:1, yoyo:true});
	    }
        hide.onclick = function() {
	    	TweenMax.to('#form_help', 0.6, {left:"+=365px"});
	    	btnHide.style.display = 'none';
	    	btnOpen.style.display = 'block';
	    }
	    
    
}
