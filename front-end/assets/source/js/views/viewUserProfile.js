import $ from 'jquery';

import { getCurrentUser } from '../request/request';

export const viewUserProfile = () => {
  const $profile = $('#page-user-profile');
    
  if ($profile.length) {
    const user = getCurrentUser()[0];

    const $content = $profile.find('.text-default');
    
    $content.empty();

    if (user) {
      $profile.find('.username').text(user.name);

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