import './footer.css';
import $ from 'jquery';

let ftr = document.createElement('p');

ftr.innerHTML = 'Copyright - Holberton School';

document.addEventListener('DOMContentLoaded', () => {
  $('body').append(ftr);
});
