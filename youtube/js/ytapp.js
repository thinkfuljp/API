var requestURL = 'https://www.googleapis.com/youtube/v3/search';

$(function() {
    console.log('ready');

    $('#search-term').submit(function(event) {
        event.preventDefault();
        var searchTerm = $('#query').val();


        function getRequest(searchTerm) {
            $.getJSON('https://www.googleapis.com/youtube/v3/search' + searchTerm + '&r=json', function(data) {
                getRequest(searchTerm);
                console.log($(this).find('input').val());
            });
            var params = {
                s: searchTerm,
                r: 'json'
            };
            url = 'https://www.googleapis.com/youtube/v3/searchs';

            $.getJSON(requestURL, params, function(data) {
                value = data.val;
                myData = data.Search;
                showResults(data.Search);
                $.each(myData, function(index, value) {
                    console.log(value.Title);
                });
            });
        };

        $.getJSON('https://www.googleapis.com/youtube/v3/search', {
                part: 'snippet',
                key: 'AIzaSyD27ABFHFCuTG5zoQd_9D0Yx3KmUMY_TWI',
                q: searchTerm,

            },

            function showResults(results) {
                var html = "";
                $.each(results, function(index, value) {
                    html += '<p>' + value.Title + '</p>';

                });
                $('#search-results').html(html);

            });

    });
});