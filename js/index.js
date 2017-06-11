$(document).ready(function() {
  
  var quote;
  var author;
  
  function newQuote() {
    $.ajax({
      url: 'https://api.forismatic.com/api/1.0/',
      jsonp: 'jsonp',
      dataType: 'jsonp',
      data: {
      method: 'getQuote',
      lang: 'en',
      format: 'jsonp'
    },
    success: function(response) {
      quote = response.quoteText;
      author = response.quoteAuthor;
      $('.quote').html('"' + quote + '"');
      if (author) {
        $('.author').html('- ' + author);
      } else {
        $('.author').html('- ' + 'Unknown');
      }; 
    }
    });  
  }
  
  newQuote();
  
  $('.circle').on('click', function(event) {
    event.preventDefault();
    newQuote();
  });
  
  $('.twitter').on('click', function(event) {
    event.preventDefault();
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -' + author));
  });
});