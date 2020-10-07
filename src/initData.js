const idGenerator = () => (Math.floor(Math.random() * 100) + 1);

const initData = {
  movies: [
    {
      id: idGenerator(),
      title: 'The time machine',
      category: 'Sci-Fi',
    },
    {
      id: idGenerator(),
      title: 'JavaScript for Dummies',
      category: 'Learning',
    },
    {
      id: idGenerator(),
      title: 'Catching Fire',
      category: 'Action',
    },
  ],
};

export { initData, idGenerator };
