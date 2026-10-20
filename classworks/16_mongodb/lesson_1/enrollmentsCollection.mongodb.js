db.createCollection('enrollments', {
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: [
        'studentId',
        'courseId',
        'enrolledAt',
        'pricePaid',
        'progress',
      ],
      properties: {
        studentId: { bsonType: 'objectId' },
        courseId: { bsonType: 'objectId' },
        enrolledAt: { bsonType: 'date' },
        pricePaid: { bsonType: 'number', minimum: 0 },
        progress: { bsonType: 'number', minimum: 0, maximum: 100 },
        rating: { bsonType: 'number', minimum: 1, maximum: 5 },
      },
    },
  },
});
