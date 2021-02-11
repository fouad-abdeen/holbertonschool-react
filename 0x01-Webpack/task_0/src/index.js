import $ from 'jquery';

let p1= document.createElement('p');
let p2= document.createElement('p');
let p3= document.createElement('p');

p1.innerHTML = 'Holberton Dashboard';
p2.innerHTML = 'Dashboard data for the students';
p3.innerHTML = 'Copyright - Holberton School';

document.addEventListener('DOMContentLoaded', () => {
  $("body").append(p1);
  $("body").append(p2);
  $("body").append(p3);
});
