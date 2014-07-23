(function($) {
  $('#url').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      $('#submit').click();
    }
  });

  $('#submit').on('click', function (e) {
    e.preventDefault();

    $('#error, #success').hide();

    var url = $('#url');
    if (url.val() === '' || url.val() === url.data('placeholder')) {
      $('#error').text('Please enter in a URL.').show();
      return;
    }

    url = url.val();
    $.getJSON($(this).data('href'), {
      url: url
    }).done(function (data) {
      $('#success').text(data.url).show();
    }).fail(function (data) {
      if (typeof data.responseJSON.error !== 'undefined') {
        $('#error').text(data.responseJSON.error).show();
      } else {
        $('#error').text('An unknown error occured.').show();
      }
    });
  })
})(jQuery);
