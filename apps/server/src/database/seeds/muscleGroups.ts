// import { ObjectId } = require('mongodb');
// const { exercises } = require('./exercises');
import { ObjectId } from 'mongodb';
import { exercises } from './exercises';

export const muscleGroups = [
  {
    _id: new ObjectId(),
    name: 'Abs',
    description: 'Core/Abdominal muscles',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Crunches')._id,
        primaryMuscle: true,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Sit-up')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Plank')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Core', 'Abdominals'],
      category: 'Core muscles',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Back',
    description: 'Back muscles including lats and erector spinae',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Deadlift')._id,
        primaryMuscle: true,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Barbell Row')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Chins')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Lats', 'Upper back'],
      category: 'Pull muscles',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Biceps',
    description: 'Front of upper arm',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Barbell Curl')._id,
        primaryMuscle: true,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Dumbbell Curl')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Hammer Curl')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Arms'],
      category: 'Pull muscles',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Chest',
    description: 'Pectoral muscles',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Bench Press')._id,
        primaryMuscle: true,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Dips')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Push-up')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Pecs', 'Pectorals'],
      category: 'Push muscles',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Glutes',
    description: 'Gluteal muscles',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Air Squats')._id,
        primaryMuscle: true,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Front Squat')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Hip Thruster')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Buttocks'],
      category: 'Lower body',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Shoulders',
    description: 'Deltoid muscles',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Bench Press')._id,
        primaryMuscle: false,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Military Press')._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Arnold Press')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Delts', 'Deltoids'],
      category: 'Push muscles',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Triceps',
    description: 'Back of upper arm',
    exercises: [
      {
        exerciseId: exercises.find((e) => e.name === 'Dips')._id,
        primaryMuscle: false,
        order: 1,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Machine Tricep Press')
          ._id,
        primaryMuscle: true,
        order: 2,
      },
      {
        exerciseId: exercises.find((e) => e.name === 'Tricep Kickback')._id,
        primaryMuscle: true,
        order: 3,
      },
    ],
    metadata: {
      aliases: ['Arms'],
      category: 'Push muscles',
    },
  },
];

// module.exports = {
//   muscleGroups,
// };
