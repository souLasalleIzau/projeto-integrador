
import 'core-js';
import $ from 'jquery';

import { device } from './helpers/device';

import { screenHeight } from './commons/screen-height';
import { backgroundImage } from './commons/background-image';

import { masked } from './lib/masked';
import { select2 } from './lib/select-2';
import { validate } from './lib/validate';
import { dataTables } from './lib/dataTables';

import { input } from './components/input';
import { moduleTabs } from './components/module-tabs';

// USERS
import { viewLogin } from './views/viewLogin';
import { viewUsersTable } from './views/viewUsersTable';
import { viewProfile } from './views/viewProfile';
import { viewRegisterUser } from './views/viewRegisterUser';
import { viewEditUser } from './views/viewEditUser';
import { viewUserChallengesTable } from './views/viewUserChallengesTable';
import { viewUserProfile } from './views/viewUserProfile';
import { viewRegisterResponse } from './views/viewRegisterResponse';
import { viewRegisterLuck } from './views/viewRegisterLuck';

// CHALLENGES
import { viewRegisterChallenge } from './views/viewRegisterChallenge';
import { viewChallengesTable } from './views/viewChallengesTable';
import { viewEditChallenge } from './views/viewEditChallenge';
import { viewChallenge } from './views/viewChallenge';

import { logout } from './request/request';

let beforeDevice;
let currentDevice; 

$(document).ready(() => {
  
  // helpers
  currentDevice = device();
  
  // commons
  screenHeight();
  backgroundImage();

  // Backend integration 
  viewLogin();
  viewUsersTable();
  viewProfile();
  viewRegisterUser();
  viewEditUser();
  viewUserChallengesTable();
  viewUserProfile();
  viewRegisterResponse();
  viewRegisterLuck();

  viewRegisterChallenge();
  viewChallengesTable();
  viewEditChallenge();
  viewChallenge();

  $('#logout').on('click', function (e) {
    e.preventDefault();

    logout();
  });

  // components
  input();
  moduleTabs();

  // lib
  masked();
  select2();
  validate();
  dataTables();
});

$(window).on('resize', () => {
  
  // helpers
  currentDevice = device();
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice;
  }

  // commons
  screenHeight();
  backgroundImage();

});