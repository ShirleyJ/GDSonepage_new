$(function(){

$("#transparent").draggable();

				$("#droppablediv").droppable({

				accept:"#transparent",
				drop:function(event, ui){ 

						
						alert();


						$(this).html("").addClass("dropped");
						$("#draggablediv").html(" <style> padding-bottom: -30px;</style>")
						$(".button1").hide(); 
						$(".button2").hide(); 
						$(".button3").hide(); 
						$(".button4").hide(); 
						

			}
		});
				$('#dropContainer').droppable({
       			drop: function(e,ui) {
            		$(ui.draggable).attr('src','images/crossblock0201.png');
       			}
  });

});