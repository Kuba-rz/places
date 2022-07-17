import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Jakub Rzeszutko',
      image:
        'https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000',
      places: 3
    },
    {
      id: 'u2',
      name: 'Klaudia Klis',
      image:
        'https://img.freepik.com/free-photo/indoor-shot-beautiful-happy-african-american-woman-smiling-cheerfully-keeping-her-arms-folded-relaxing-indoors-after-morning-lectures-university_273609-1270.jpg',
      places: 3
    },
    {
      id: 'u3',
      name: 'Oskar Rzeszutko',
      image:
        'https://www.parentmap.com/images/article/7877/BOY_feature_credit_will_austin_848x1200.jpg',
      places: 3
    },
    {
      id: 'u4',
      name: 'Wiola Rzeszutko',
      image:
        'https://static01.nyt.com/images/2019/11/17/books/review/17Salam/Salam1-superJumbo.jpg',
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
