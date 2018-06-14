//questions as an array 

const questions =[
    {question: 'enter your first name '},
        { question: 'enter your last name '},
        { question: 'enter your email ', pattern: /\S+@\S+\.\S+/},
        {question: 'Create Password ', type: 'password'}
];

//Transition times
const shakeTime = 100;// shake transition time 
const switchTime = 200;// transition b/n questions

let position =0;

// initialize dom elements 
const formBox = document.querySelector ('#form-box');
const formBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const progress = document.querySelector('#progress-bar');