import './style.css';

import { listscore, display } from './modules/lists.js';
import { addscore } from './modules/addscore.js';

const submit = document.querySelector('#submit');
const nameIn = document.querySelector('#name');
const scoreIn = document.querySelector('#score');

window.onload = async () => {
  display(await listscore());
};

const refresh = document.querySelector('.refresher');
refresh.addEventListener('click', async () => {
  const scorelist = await listscore();
  display(scorelist);
});

submit.addEventListener('click', async (e) => {
  e.preventDefault();
  const users = nameIn.value;
  const scores = scoreIn.value;
  const newScore = {
    user: users,
    score: scores,
  };
  addscore(newScore);
  nameIn.value = '';
  scoreIn.value = '';
});
