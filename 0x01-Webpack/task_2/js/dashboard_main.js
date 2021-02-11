import '../css/main.css';
import $ from 'jquery';
import _ from 'lodash';

let p1 = document.createElement('p');
let p2 = document.createElement('p');
let btn = document.createElement('button');
let p3 = document.createElement('p');
let p4 = document.createElement('p');

p1.innerHTML = 'Holberton Dashboard';
p2.innerHTML = 'Dashboard data for the students';
btn.innerHTML = 'Click here to get started';
p3.setAttribute('id', 'count');
p4.innerHTML = 'Copyright - Holberton School';

document.addEventListener('DOMContentLoaded', () => {
  $('body').append(p1);
  $('body').append(p2);
  $('body').append(btn);
  $('body').append(p3);
  $('body').append(p4);
});

let count = 0;

const counter = () => {
  count += 1;
  p3.innerHTML = `${count} clicks on the button`;
};

btn.addEventListener('click', counter);

$('button').on('click', _.debounce(counter));
