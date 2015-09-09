$(function() {

	$.getJSON('https://www.googleapis.com/youtube/v3/searchs', function(data) {
		myData = data.Search;
		showResults(data.Search);
		$.each(myData, function(index,value) {
		console.log(value.Title);
		});
	});

	$('#search-term').submit(function(event){
		event.preventDefault();
		var searchTerm = $('#query').val();
		console.log($(this).find('input').val());

		$.getJSON('https://www.googleapis.com/youtube/v3/search', {
		part:'snippet', 
		key: 'AIzaSyD27ABFHFCuTG5zoQd_9D0Yx3KmUMY_TWI',
		q: searchTerm='',
		}, 

		// function(data) {
		// 	myData = data.snippet;
		// 	$.each(myData, function(index, value) {
		// 		console.log(value.snippet);
		// 	});

		function showResults(results) {
			var html = "";
			$.each(results, function(index, value) {
       		html += '<p>' + value.Title + '</p>';
       		console.log(value.Title);

			
		// }
			});

		});

	});
});