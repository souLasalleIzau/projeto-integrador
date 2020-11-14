import $ from 'jquery';

import { getParamsUrl } from '../helpers/getParamsUrl';
import { getUser } from '../request/request';

export const viewProfile = () => {
  const $profile = $('#page-profile');
    
  if ($profile.length) {
    const emailUrl = getParamsUrl().get('email');
    const user = getUser(emailUrl)[0];

    const $content = $profile.find('.text-default');
    
    $content.empty();

    if (user) {
      const href = $profile.find('#edit-profile').attr('href');

      $profile.find('.username').text(user.name);
      $profile.find('#edit-profile').attr('href', `${href}?email=${user.email}`);

      const data_model = {
        nome: user.name,
        email: user.email,
        habilidade_1: user.skills[0],
        habilidade_2: user.skills[1],
        habilidade_3: user.skills[2],
      }

      Object.entries(data_model).map(data => $content.append(`
        <p>
          <small>${(data[0]).replace('_', ' ')}: </small>
          ${data[1]}
        </p>`
      ));
    }
  }
}