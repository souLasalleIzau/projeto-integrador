import $ from 'jquery';

import { suppliers } from '../__MOCK__/suppliers';
import { getParamsUrl } from '../helpers/getParamsUrl';
import { 
    getChallenge,
    registerResponse } from '../request/request';

export const viewRegisterResponse = () => {

  const $page = $('#page-register-response');

  if ($page.length) {

    const codeUrl = getParamsUrl().get('code');
    const challenge = getChallenge(codeUrl)[0];
    const userEmail = getParamsUrl().get('user');

    const $description = $page.find('#challenge-description');
    $description.empty();

    if (challenge) {
        $description.append(`<p>${challenge.description}</p>`)
    }

    if (suppliers.length) {
      const $blockLeft = $page.find('.block-left');
      const $blockRight = $page.find('.block-right');
      
      $blockLeft.empty();
      $blockRight.empty();
      
      suppliers.map((supplier, index) => {

        $blockLeft.append(`
          <label for="suppliers-${index}" class="single-user-name">
            ${supplier.name}
          </label>
        `);

        $blockRight.append(`
          <input type="checkbox" id="suppliers-${index}" class="user-list" value="${supplier.id}">
          <span class="single-user-name">
            ${supplier.name}
          </span>
        `);

      });
    }

    $('.form-register-response').on('submit', function (e) {
      e.preventDefault();
  
      const solution = $('#register-solution').val();
      const chosenSuppliers = [];
  
      $('input.user-list').each(function () {
        if ($(this).is(':checked')) {
          console.log($(this).val())
          chosenSuppliers.push($(this).val())
        }
      });
      
      registerResponse({ userEmail, code: challenge.code, solution, chosenSuppliers });
    });
  }
}