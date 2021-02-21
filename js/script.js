$(document).ready(function () {
  lightbox.option({
    resizeDuration: 300,
    wrapAround: true /* removed for spead sake 'resizeDuration': 200, */,
  });
  $(window).scroll(function () {
    let position = $(this).scrollTop();

    if (position >= 350) {
      $('.gallery').addClass('change');
    } else {
      $('.gallery').removeClass('change');
    }
  });
});
