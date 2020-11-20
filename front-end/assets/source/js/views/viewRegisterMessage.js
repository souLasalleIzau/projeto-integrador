import $ from 'jquery';

import { 
    listUsers,
    registerMessageUser } from '../request/request';

export const viewRegisterMessage = () => {

  const $page = $('#page-register-message'); 
  
  if ($page.length) {
    const $form = $page.find('.form-register-message');
    const $textarea =$page.find('#register-message');

    $form.on('submit', function (e) {
        e.preventDefault();
        const users = listUsers();

        console.log('usuarios', users);

        users.map(user => {
            registerMessageUser({ message: $textarea.val(), email: user.email })
        });
    });
  }
  
}   