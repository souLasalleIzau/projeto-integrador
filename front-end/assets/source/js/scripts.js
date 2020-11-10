
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

import { 
  getAllUsers,
  validateLogin
} from './request/request';

let beforeDevice;
let currentDevice; 

$(document).ready(() => {
  
  // helpers
  currentDevice = device();
  
  // commons
  screenHeight();
  backgroundImage();

  // lib
  masked();
  select2();
  validate();
  dataTables();

  // components
  input();
  moduleTabs();

  // Request
  getAllUsers();

  $('.form-login').on('submit', function (e) {
    if ($(this).valid()) {
      e.preventDefault();

      const email = $(this).find('#login-email').val();
      const password = $(this).find('#login-password').val();
      const profile = $(this).find('#login-profile').val();

      validateLogin({ email, password, profile });
    }
  });
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