import $ from 'jquery';

import { 
  getCurrentUser, 
  getChallenge } from '../request/request';

export const viewUserChallengesTable = () => {
  const $challengesTable = $('#user-challenges-table');

  if ($challengesTable.length) {

    const $body = $challengesTable.find('tbody');
    const $trClone = $body.find('tr:first-child').clone();
    $challengesTable.find('tbody').empty();
    
    const user = getCurrentUser()[0];
    const challenges = user.challenges.map(challenge => getChallenge(challenge.code))[0];    
    
    challenges.map(challenge => {
      const $tr = $trClone.clone();
      
      const href = $tr.find('td:nth-child(1) a').attr('href');
      $tr.find('td:nth-child(1) a').attr('href', `${href}?user=${user.email}&code=${challenge.code}`);
      $tr.find('td:nth-child(1) span').text(challenge.name);
      $tr.find('td:nth-child(2)').text(challenge.code);
      $tr.find('td:nth-child(3)').text(challenge.description);
      $tr.find('td:nth-child(4)').text(challenge.time);
      $tr.find('td:nth-child(5)').text(challenge.status ? "ativo" : "inativo");

      $body.append($tr);
    });
  }
}