$(document).ready(function(){

	// ---------------------------------------- home starting

	$(".message-box").hide();

	// message button animation
	

	$(".message-bt").click(function(){

    $(".message-box").toggle(2000);
    $(".html,.css,.js").slideUp(1000).slideDown(1000);
    $("p").hide(3000);


	});

	//------------------------------------------------- end message button animation


	//-------------------------------------------------- start send button 

	$("#send").click(function(){
		
		$(".message-box").slideUp(1000);
		$("p").show(1000);



		

	});

	//--------------------------------------------- end send button


	//----------------------------------------------------------- end home 


	
});