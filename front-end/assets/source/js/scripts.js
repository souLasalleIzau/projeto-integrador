
import 'core-js';
import $ from 'jquery';

import { device } from './helpers/device'

import { screenHeight } from './commons/screen-height'
import { backgroundImage } from './commons/background-image'

import { input } from './components/input'

let beforeDevice;
let currentDevice; 

$(document).ready(() => {
  
  // helpers
  currentDevice = device();
  
  // commons
  screenHeight();
  backgroundImage();

  // components
  input();

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