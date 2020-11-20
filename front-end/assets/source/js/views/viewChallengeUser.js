import $ from 'jquery';

import { 
  getCurrentUser,
  clearMessageUser } from '../request/request';

export const viewChallengeUser = () => {
  const $page = $('#page-challenges-user'); 
    
  
  if ($page.length) {
    const user = getCurrentUser(); 

    if (user) {
      if (user[0].message) {
        alert(user[0].message);
        clearMessageUser({ email: user[0].email });
      }

    }
  }
}   