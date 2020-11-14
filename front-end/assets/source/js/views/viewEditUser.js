import $ from 'jquery';

import { getParamsUrl } from '../helpers/getParamsUrl';
import { 
  getUser,
  editUser } from '../request/request';

export const viewEditUser = () => {

  const $editUser = $('#page-edit-user');

  if ($editUser.length) {
    const emailUrl = getParamsUrl().get('email');
    const user = getUser(emailUrl)[0];

    if (user) {
      const $name = $('#edit-name');
      const $email = $('#edit-email');
      const $profile = $('#edit-profile');
      const $password = $('#edit-password');
      const $skills = [
        $('#edit-skill-1'), 
        $('#edit-skill-2'), 
        $('#edit-skill-3')
      ];

      $name.val(user.name);
      $email.val(user.email);
      $profile.val(user.profile);
      $password.val(user.password);
      $skills.map(($skill, index) => $skill.val(user.skills[index]));

      $('.form-edit-user').on('submit', function (e) {
        e.preventDefault();
    
        editUser({ 
          name: $name.val(), 
          email: $email.val(), 
          profile: $profile.val(), 
          password: $password.val(), 
          skills: $skills.map($skill => $skill.val()),
          challenges: [...(user.challenges|| [])]
        });
      });
    }
  }
}