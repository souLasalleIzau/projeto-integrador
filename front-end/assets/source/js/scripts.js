
import 'core-js';
import $ from 'jquery';

import { device } from './helpers/device'
import { screenHeight } from './commons/screen-height'
import { backgroundImage } from './commons/background-image'

let beforeDevice;
let currentDevice; 

$(document).ready(() => {
  
  currentDevice = device();
  screenHeight();
  backgroundImage();

});

$(window).on('resize', () => {
  
  currentDevice = device();
  screenHeight();
  backgroundImage();
  
  if (beforeDevice != currentDevice) {
    beforeDevice = currentDevice;
  }

});