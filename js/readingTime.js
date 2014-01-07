$(function() {
    var text = $('#content').text();
	var wordsCount = text.split(/\s+/).length;
    var readingtime = Math.round( wordsCount / 600) ;
    console.log(wordsCount);
    $('#readingTime').html(readingtime + ' min read');
});