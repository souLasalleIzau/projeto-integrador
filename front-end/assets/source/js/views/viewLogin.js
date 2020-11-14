import $ from 'jquery';

import { validateLogin } from '../request/request';

export const viewLogin = () => {
  $('.form-login').on('submit', function (e) {
    if ($(this).valid()) {
      e.preventDefault();

      const email = $(this).find('#login-email').val();
      const password = $(this).find('#login-password').val();
      const profile = $(this).find('#login-profile').val();

      validateLogin({ email, password, profile });
    }
  });
}