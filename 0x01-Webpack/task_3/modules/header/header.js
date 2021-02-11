import './header.css';
import $ from 'jquery';

let div = document.createElement('div');
let h1 = document.createElement('h1');

div.setAttribute('id','logo');
h1.innerHTML = 'Holberton Dashboard';

document.addEventListener('DOMContentLoaded', () => {
    $('body').append(div);
    $('body').append(h1);
  });

console.log('Init header');
