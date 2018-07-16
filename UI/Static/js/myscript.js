var addContent ='<div class = "roundedCorner entry">'+
					'<div class = "rowInrow">'+
						'<button class = "deleteContentButton">Delete</button><button class = "editContentButton">Edit</button>'+
					'</div>'+
						'<p>Content 4</p>'+
					'</div>';
var nameAddedContent = '';



$(document).ready(function() {
	$("body").on('click', ".addEntryButton", function(e){
		$('.firstRow').append(addContent);
	});
});
$(document).ready(function() {
	$("body").on('click', ".deleteContentButton", function(e){
		$(this).closest('.entry').remove();
	});
});
// Used to open a popup window
$(document).ready(function() {
	$("body").on('click', "#popUpRoundedCorner", function(){
		$("#popUpRoundedCorner").popUpRoundedCorner({
			autoOpen: false
		});
		$('#showpopUpRoundedCorner').on("click", function(){
			$("#popUpRoundedCorner").popUpRoundedCorner("open")
		});
	});
});


