import $ from 'jquery';
import 'jquery-mask-plugin';

export const masked = () => { 
  
  $('input[data-masked="phone"]').mask("(99) 9 9999-9999")
    .focusout(function (event) {  
      var target, phone, element;  
      target = (event.currentTarget) ? event.currentTarget : event.srcElement;  
      phone = target.value.replace(/\D/g, '');
      element = $(target);  
      element.unmask();  
      
      if(phone.length > 10) {  
        element.mask("(99) 9 9999-9999");  
      } else {  
        element.mask("(99) 9999-9999");  
      }  
    });
    
  $('input[data-masked="date"]').mask('00/00/0000');

  $('input[data-masked="cpf"]').mask('000.000.000-00', { reverse: true });
  
  $('input[data-masked="rg"]').mask("00.000.000-99");

  $('input[data-masked="cep"]').mask('00000-000');

  $('input[data-masked="number"]').mask('99999');
}