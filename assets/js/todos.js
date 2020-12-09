$('ul').on('click', 'li', function() {
	$(this).toggleClass('completed');
});
$('ul').on('click', 'span', function(event) {
	$(this).parent().remove();
	// $(this).parent().fadeOut(500, function() {
	// 	$(this).remove();
	// });
	event.stopPropagation();
});

$('input[type="text"]').keypress(function(e) {
	// console.log(e.which);
	if (e.which == '13') {
		//13 = enter
		var value = $(this).val();
		// console.log(e.which);
		$(this).val('');
		$('ul').append('<li><span class="remove"><i class="fa fa-trash"></i></span>' + value + '</li>');
	}
});
