import $ from 'jquery';

import { registerUser } from '../request/request';

export const viewRegisterUser = () => {
  $('.form-register-user').on('submit', function (e) {
    e.preventDefault();

    const name = $('#register-name').val();
    const email = $('#register-email').val();
    const profile = $('#register-profile').val();
    const password = $('#register-password').val();
    const skills = [
      $('#register-skill-1').val(), 
      $('#register-skill-2').val(), 
      $('#register-skill-3').val()
    ];

    registerUser({ name, email, profile, password, skills });
  });
}