/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8EW0UYxLIrzBlDheiDxi/scores';

export const listscore = async () => {
  const response = await fetch(url);
  const { result } = await response.json().catch((error) => new Error(error));
  return result;
};

export const display = (list) => {
  const listcontainer = document.querySelector('#listitems');
  listcontainer.innerHTML = '';
  if (list.length === 0) {
    listcontainer.innerHTML = '<li>NO SCORES YET</li>';
  }
  list.sort((a, b) => b.score - a.score).forEach((score) => {
    listcontainer.innerHTML += ` <li>${score.user} : ${score.score}</li>`;
  });
};