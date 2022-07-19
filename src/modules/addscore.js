/* eslint-disable import/prefer-default-export */
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/8EW0UYxLIrzBlDheiDxi/scores';

export const addscore = async (data) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};
