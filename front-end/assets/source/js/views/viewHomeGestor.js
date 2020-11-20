import $ from 'jquery';

import { getCurrentUser } from '../request/request';

export const viewHomeGestor = () => {

  const $page = $('#page-home-manager'); 
  
  if ($page.length) {
    const user = getCurrentUser();

    if (user) {
      $('#username-login').text(user[0].name);
    }
  }
}   