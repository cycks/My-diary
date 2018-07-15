var addContent ='<div class = "roundedCorner entry">'+
					'<div class = "rowInrow">'+
						'<button class = "deleteContentButton">Delete</button><button class = "editContentButton">Edit</button>'+
					'</div>'+
						'<p>Content 4</p>'+
					'</div>';
var nameAddedContent = '';



$(document).ready(function() {
	$("body").on('click', ".addEntryButton", function(e){
		alert($(".firstRow").children().length);
		$('.firstRow').append(addContent);
	});});