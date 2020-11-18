import $ from 'jquery';

import { getParamsUrl } from '../helpers/getParamsUrl';
import { 
    getChallenge,
    registerLuck } from '../request/request';

export const viewRegisterLuck = () => {

  const $page = $('#page-register-luck');

  if ($page.length) {
    const codeUrl = getParamsUrl().get('code');
    const challenge = getChallenge(codeUrl)[0];
    const userEmail = getParamsUrl().get('user');

    const $luck = $page.find('#content-luck');
    const $badLuck = $page.find('#content-bad-luck');

    $luck.empty();
    $badLuck.empty();

    const href = $page.find('.back-button').attr('href');
    $page.find('.back-button').attr('href', `${href}?user=${userEmail}&code=${codeUrl}`);

    if (challenge) {
        $luck.text(challenge.luck);
        $badLuck.text(challenge.bad_luck);
    }
    
    $('.form-register-luck').on('submit', function (e) {
      e.preventDefault();
  
      const solution_luck = $('#register-challenge-luck').val();
      const solution_bad_luck = $('#register-challenge-bad-luck').val();
      
      registerLuck({ userEmail, code: challenge.code, solution_luck, solution_bad_luck });
    });
  }
}