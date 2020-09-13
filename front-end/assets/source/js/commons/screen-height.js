import $ from 'jquery';

export const screenHeight = () => {
  const $elements = $('.screen-height');
  const _height = $(window).height();

  $elements.each(function() {
    $(this).css('min-height', `${_height}px`);
  });
}
