import $ from 'jquery';

import { 
  registerChallenge,
  listUsers } from '../request/request';

export const viewRegisterChallenge = () => {

  const $page = $('#page-register-challenge');

  if ($page.length) {
    const users = listUsers();

    if (users.length) {
      const $blockLeft = $page.find('.block-left');
      const $blockRight = $page.find('.block-right');
      
      $blockLeft.empty();
      $blockRight.empty();
      
      users.map((user, index) => {

        $blockLeft.append(`
          <label for="user-${index}" class="single-user-name">
            ${user.name}
          </label>
        `);

        $blockRight.append(`
          <input type="checkbox" id="user-${index}" class="user-list" value="${user.email}">
          <span class="single-user-name">
            ${user.name}
          </span>
        `);

      });
    }
  }


  $('.form-register-challenge').on('submit', function (e) {
    e.preventDefault();

    const name = $('#register-challenge-name').val();
    const time = $('#register-challenge-time').val();
    const code = $('#register-challenge-code').val();
    const description = $('#register-challenge-description').val();
    const luck = $('#register-challenge-luck').val();
    const bad_luck = $('#register-challenge-bad-luck').val();
    const players = [];

    $('input.user-list').each(function () {
      if ($(this).is(':checked')) {
        players.push($(this).val())
      }
    });

    const status = $('#register-challenge-status').is(':checked');
    
    registerChallenge({ name, time, code, description, luck, bad_luck, players, status });
  });
}