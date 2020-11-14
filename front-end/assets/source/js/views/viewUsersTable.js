import $ from 'jquery';

import { listUsers } from '../request/request';

export const viewUsersTable = () => {
  const $usersTable = $('#users-table');
  if ($usersTable.length) {
    
    const $body = $usersTable.find('tbody');
    const $trClone = $body.find('tr:first-child').clone();
    $usersTable.find('tbody').empty();
    
    const users = listUsers();
    
    users.map(user => {
      const $tr = $trClone.clone();
      
      const href = $tr.find('td:nth-child(1) a').attr('href');
      $tr.find('td:nth-child(1) a').attr('href', `${href}?email=${user.email}`);
      $tr.find('td:nth-child(1) span').text(user.name);
      $tr.find('td:nth-child(2)').text(user.email);
      $tr.find('td:nth-child(3)').text(user.skills[0]);
      $tr.find('td:nth-child(4)').text(user.skills[1]);
      $tr.find('td:nth-child(5)').text(user.skills[2]);

      $body.append($tr);
    });
  }
}