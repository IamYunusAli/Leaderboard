const list = [
  {
    Name: 'Yunus',
    Score: '200',
  },
  {
    Name: 'Hamza',
    Score: '2000',
  },
  {
    Name: 'Amanuel',
    Score: '2',
  },
  {
    Name: 'Hirpo',
    Score: '20',
  },
  {
    Name: 'ushindi',
    Score: '150',
  },
  {
    Name: 'Ernest',
    Score: '1150',
  },
  {
    Name: 'Ghazanfar',
    Score: '650',
  },
  {
    Name: 'Tarek',
    Score: '950',
  },
];

export default function renderlist() {
  const lists = document.getElementById('listitems');
  list.forEach((score) => {
    lists.innerHTML += ` <li class="listitem">${score.Name} : ${score.Score}</li>`;
  });
}
