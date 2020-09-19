import $ from 'jquery';
import 'select2'

export const select2 = () => {
 const $selects = $('.select-field');
  if ($selects.length) {

    $selects.each(function () {
      if ($(this).hasClass("select2-hidden-accessible")) {
        $(this).select2('destroy');
      }
      
      $(this).select2();
    });
  }
}