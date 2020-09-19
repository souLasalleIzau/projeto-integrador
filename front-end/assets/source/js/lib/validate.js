import $ from 'jquery';
import 'jquery-validation';

export const validate = () => {
  
  $('.form-login').validate({
    rules: {
      login_email: {
        required: true,
        email: true,
      },
      login_password: {
        required: true,
      }
    }
  });

  $.extend($.validator.messages, {
    required: "Campo obrigatório.",
    email: "Por favor, informe um email válido."
  });

}
