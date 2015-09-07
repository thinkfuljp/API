$(function() {
	$.getJSON('https://www.googleapis.com/youtube/v3/search', function(data) {
	myData = data.Search;
	showResults(data.Search);
	$.each(myData, function(index, value) {
		console.log(value.Title)
	});
});