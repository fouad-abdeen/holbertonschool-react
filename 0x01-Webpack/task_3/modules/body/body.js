import './body.css';
import $ from 'jquery';
import _ from 'lodash';

let btn = document.createElement('button');
let ctn =  document.createElement('p');

btn.innerHTML = 'Click here to get started';
ctn.setAttribute('id','count');

document.addEventListener('DOMContentLoaded', () => {
  $('body').append(btn);
  $('body').append(ctn);
});

let count = 0;
btn.addEventListener('click', () => {
  count += 1;
  ctn.innerHTML = `${count} clicks on the button`;
});
