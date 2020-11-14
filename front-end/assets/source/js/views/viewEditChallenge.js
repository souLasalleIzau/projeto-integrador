import $ from 'jquery';

import { getParamsUrl } from '../helpers/getParamsUrl';
import { 
  listUsers,
  getChallenge,
  editChallenge } from '../request/request';

export const viewEditChallenge = () => {

  const $editChallenge = $('#page-edit-challenge');

  if ($editChallenge.length) {
    const codeUrl = getParamsUrl().get('code');
    const challenge = getChallenge(codeUrl)[0];

    if (challenge) {
      const $name = $('#edit-challenge-name');
      const $time = $('#edit-challenge-time');
      const $code = $('#edit-challenge-code');
      const $description = $('#edit-challenge-description');
      const $luck = $('#edit-challenge-luck');
      const $badLuck = $('#edit-challenge-bad-luck');
      const $status = $('#edit-challenge-status');

      $name.val(challenge.name);
      $time.val(challenge.time);
      $code.val(challenge.code);
      $description.val(challenge.description);
      $luck.val(challenge.luck);
      $badLuck.val(challenge.bad_luck);

      const users = listUsers();

      if (users.length) {
        const $blockLeft = $editChallenge.find('.block-left');
        const $blockRight = $editChallenge.find('.block-right');
        
        $blockLeft.empty();
        $blockRight.empty();
        
        users.map((user, index) => {
  
          $blockLeft.append(`
            <label for="user-${index}" class="single-user-name">
              ${user.name}
            </label>
          `);
          
          $blockRight.append(`
            <input type="checkbox" id="user-${index}" class="user-list" value="${user.email}" ${challenge.players.includes(user.email) && "checked"}>
            <span class="single-user-name">
              ${user.name}
            </span>
          `);
        });
      }

      $status.prop('checked', challenge.status);

      $('.form-edit-challenge').on('submit', function (e) {
        e.preventDefault();

        const players = [];
        $('input.user-list').each(function () {
          if ($(this).is(':checked')) {
            players.push($(this).val())
          }
        });

        const status = $('#edit-challenge-status').is(':checked');
    
        editChallenge({ 
          name: $name.val(), 
          time: $time.val(), 
          code: $code.val(), 
          description: $description.val(),
          luck: $luck.val(), 
          bad_luck: $badLuck.val(),
          players,
          status,
        });
      });
    }
  }
}