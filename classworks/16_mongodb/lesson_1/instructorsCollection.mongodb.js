db.createCollection('instructors', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['name', 'email'],
      properties: {
        name: { bsonType: 'string' },
        email: { bsonType: 'string', pattern: '^.+@.+\\..+$' },
        bio: { bsonType: 'string' },
      },
    },
  },
});
