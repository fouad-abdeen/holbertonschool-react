import './body.css';
import $ from 'jquery';
import _ from 'lodash';


let par= document.createElement('p');
let btn = document.createElement('button');
let ctn =  document.createElement('p');

par.innerHTML = 'Dashboard data for the students';
btn.innerHTML = 'Click here to get started';
ctn.setAttribute('id','count');

document.addEventListener('DOMContentLoaded', () => {
  $("body").append(par);
  $('body').append(btn);
  $('body').append(ctn);
});

let count = 0;

const counter = () => {
  count += 1;
  ctn.innerHTML = `${count} clicks on the button`;
}

btn.addEventListener('click', counter);

$('button').on('click', _.debounce(counter));
