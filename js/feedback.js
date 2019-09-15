$(() => {

  $('.form-group').each((i, e) => {
    $('.form-control', e).
    focus(function () {
      e.classList.add('not-empty');
    }).
    blur(function () {
      this.value === '' ? e.classList.remove('not-empty') : null;
    });

  });

});
