const platform = db.getSiblingDB('platform');

const maria = platform.instructors.insertOne({
  name: 'Maria Smith',
  email: 'maria@example.com',
  bio: 'Frontend Dveloper',
}).insertedId;

const c = platform.courses.insertOne({
  title: 'JavaScript Foundations',
  price: 49.99,
  instructorId: maria,
  published: true,
  lessons: [
    {
      title: 'Variables',
      minutes: 20,
    },
    {
      title: 'Functions',
      minutes: 60,
    },
  ],
});

const c2 = platform.courses.insertMany([
  {
    title: 'C++ Foundations',
    price: 449.99,
    instructorId: maria,
    published: true,
    lessons: [
      {
        title: 'Variables',
        minutes: 20,
      },
      {
        title: 'Functions',
        minutes: 60,
      },
    ],
  },
  {
    title: 'Python Foundations',
    price: 19.99,
    instructorId: maria,
    published: true,
    lessons: [
      {
        title: 'Variables',
        minutes: 20,
      },
      {
        title: 'Functions',
        minutes: 60,
      },
    ],
  },
]);
