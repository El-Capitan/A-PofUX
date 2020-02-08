//sticky navbar
$(document).ready(function() {
                  $(".navbar").sticky({
                        topSpacing: 0
});
});
// smooth scroll
$(document).ready(function () {
	$('.scrollto a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 50
				}, 1000);
				return false;
			}
		}
	});
});
// scroll to top
$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 800) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});

function validate(F){
var fromName, email, message, robot1, robot2, robot3;
G= F.name;
if (G==="reynaldoForm"){
    fromName=document.reynaldoForm.nameo.value;
    email=document.reynaldoForm.replyto.value;
    message=document.reynaldoForm.message.value;
    robot1=document.reynaldoForm.security1;
    robot2=document.reynaldoForm.security2;
    robot3=document.reynaldoForm.security3;
}
if (G==="sereneForm"){
    fromName=document.sereneForm.nameo.value;
    email=document.sereneForm.replyto.value;
    message=document.sereneForm.message.value;
    robot1=document.sereneForm.security1;
    robot2=document.sereneForm.security2;
    robot3=document.sereneForm.security3;
}
if (G==="kseniyaForm"){
    fromName=document.kseniyaForm.nameo.value;
    email=document.kseniyaForm.replyto.value;
    message=document.kseniyaForm.message.value;
    robot1=document.kseniyaForm.security1;
    robot2=document.kseniyaForm.security2;
    robot3=document.kseniyaForm.security3;
}
if (G==="patrickForm"){    
    fromName=document.patrickForm.nameo.value;
    email=document.patrickForm.replyto.value;
    message=document.patrickForm.message.value;
    robot1=document.patrickForm.security1;
    robot2=document.patrickForm.security2;
    robot3=document.patrickForm.security3;
}

var validFailed = [
	"And who are you again?",
	"Oops looks like you forgot your email address.",
	"Can you double-check that email address again, please",
	"Well, if you don't have anything to say, why bother?",
	"I knew it, you ARE a robot, I'm running to the hills!",
    "Now how in the hell did you submit without a form?"
	];
	if (fromName=== "" || fromName === null){
		window.alert(validFailed[0]);
		return false;
	}
	else if (email==="" || email=== null){
		window.alert(validFailed[1]);
		return false;
	}
	else if (message ==="" || message=== null){
		window.alert(validFailed[3]);
		return false;
	}
	else if (
		robot1.checked === true ||
		robot2.checked === false ||
		robot3.checked === true 
		){
			window.alert(validFailed[4]);
			return false;
			}
	else {
        if (G==="reynaldoForm"){
            document.reynaldoForm.submit();
            }
        else if (G==="sereneForm"){
            document.sereneForm.submit();
            }
        else if (G==="kseniyaForm"){
            document.kseniyaForm.submit();
            }
		else if (G==="patrickForm"){
            document.patrickForm.submit();
            }
        else {
            window.alert(validFailed[5]);
        }
    }
}