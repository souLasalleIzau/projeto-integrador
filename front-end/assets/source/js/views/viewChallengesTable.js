import $ from 'jquery';

import { listChallenges } from '../request/request';

export const viewChallengesTable = () => {
  const $challengesTable = $('#challenges-table');

  if ($challengesTable.length) {

    const $body = $challengesTable.find('tbody');
    const $trClone = $body.find('tr:first-child').clone();
    $challengesTable.find('tbody').empty();
    
    const challenges = listChallenges();
    
    challenges.map(challenge => {
      const $tr = $trClone.clone();
      
      const href = $tr.find('td:nth-child(1) a').attr('href');
      $tr.find('td:nth-child(1) a').attr('href', `${href}?code=${challenge.code}`);
      $tr.find('td:nth-child(1) span').text(challenge.name);
      $tr.find('td:nth-child(2)').text(challenge.code);
      $tr.find('td:nth-child(3)').text(challenge.description);
      $tr.find('td:nth-child(4)').text(challenge.time);
      $tr.find('td:nth-child(5)').text(challenge.status ? "ativo" : "inativo");

      $body.append($tr);
    });
  }
}