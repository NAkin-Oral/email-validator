// It must have the username@websitename.extension format type.
// The maximum length of the extension is 3.
// Write a function that takes email variable and return true or false and write console invalid or valid.
// Please note that, extension length can be 2 or 3 letters( For example: .co, com. )
// Pseudocode:
// hepsi string olmalı
// includes veya startsWith@ olmalı
// if ext > 3 --> false olmalı

// let a = `username@websitename.extension`;

// let userName = function () {};

// let kAdı = prompt('Email adresini giriniz: ');
// const result = kAdı.includes('@');
// const result2 = kAdı.length - kAdı.indexOf('.') - 1 <= 3;
// console.log(result && result2);

// const email = document.querySelector('input[name=email]');
// const button = document.querySelector('#btn');

// if (mail.includes('@')) {
//   let splitMail = mail.split('@');
//   let username = splitMail[0];
//   let last = splitMail[1].split('.');
//   let webname = last[0];
//   let extension = last[1];
//   console.log(username);
//   console.log(extension);
//   console.log(webname);
//   if (
//     username.length > 0 &&
//     webname.length > 0 &&
//     extension.length > 1 &&
//     extension.length < 4
//   ) {
//     console.log('Valid Mail Adress');
//   } else {
//     console.log('Invalid Mail Adress');
//   }
// } else {
//   console.log('Invalid Mail Adress');
// }

const email = document.querySelector('#email');
const button = document.querySelector('#btn');
const text = document.querySelector('#message');

const validateEmail = email => {
  let regex = /^\w+([A.Z],[a.z]?\w+)*@\w+([A.Z],[a.z]?\w+)*(\.\w{2,3})+$/;
  return regex.test(String(email).toLowerCase());
};

button.addEventListener('click', () => {
  if (validateEmail(email.value)) {
    text.innerText = 'Valid email';
  } else {
    text.innerText = 'Invalid email';
  }
});
