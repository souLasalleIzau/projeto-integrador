import $ from 'jquery';

export const input = () => {
  
  const $inputPrimary = $('.input-field');
  
  $inputPrimary.on('focusin', function () {
    const $label = $(this).prev();
    $label.addClass('active');
  });

  $inputPrimary.on('focusout', function () {
    const $label = $(this).prev();

    if (!$(this).val()) {
      $label.removeClass('active');
    }
  });
}