$(function() {

  $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data) {
    myData = data.Search;
    $.each(myData, function(index, value) {
      console.log(value.Title);
    });
  });

  $(function() {
    $.getJSON('http://www.omdbapi.com/?s=Star%20Wars&r=json', function(data) {
      showResults(data.Search);
    });
  });
  
  $(function(){
  	$('#search-term').submit(function(event) {
  		event.preventDefault();
  		var searchTerm = $('#query').val();
  		$.getJSON('http://www.omdbapi.com/?s=' + searchTerm + '&r=json', function(data) {
  			showResults(data.Search);	
  		});
  	});
  })

  function showResults(results) {
  	var html = "";
    $.each(results, function(index, value) {
    	html += '<p>' + value.Title + '</p>';
      	console.log(value.Title);
    });      	
    $('#search-results').html(html);

  };

})






