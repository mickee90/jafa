import { ObjectId } from 'mongodb';

export const exercises = [
  {
    _id: new ObjectId(),
    name: 'Crunches',
    description: 'Basic abdominal exercise',
    instructions: [
      'Lie on your back with knees bent and feet flat on the floor',
      'Place hands behind your head, supporting your neck',
      'Lift your shoulders off the ground by contracting your abs',
      'Lower back down with control',
      'Repeat for desired reps',
    ],
    metadata: {
      equipment: ['none'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Sit-up',
    description: 'Full range abdominal exercise',
    instructions: [
      'Lie on your back with knees bent and feet anchored',
      'Place hands across chest or behind head',
      'Using your abs, lift your entire upper body off the ground',
      'Touch your elbows to your knees',
      'Lower back down with control',
    ],
    metadata: {
      equipment: ['none'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Plank',
    description: 'Static core strengthening exercise',
    instructions: [
      'Start in a push-up position with forearms on the ground',
      'Keep your body in a straight line from head to heels',
      'Engage your core and hold the position',
      'Maintain normal breathing',
      'Hold for prescribed time',
    ],
    metadata: {
      equipment: ['none'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Deadlift',
    description: 'Compound back exercise',
    instructions: [
      'Stand with feet hip-width apart, barbell over mid-foot',
      'Bend at hips and knees to grasp the bar',
      'Keep back straight, chest up, and core engaged',
      'Drive through heels to stand up with the weight',
      'Return bar to ground with controlled movement',
    ],
    metadata: {
      equipment: ['barbell'],
      difficulty: 'advanced',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Barbell Row',
    description: 'Compound back exercise',
    instructions: [
      'Bend at hips and knees, holding barbell with overhand grip',
      'Keep back straight and chest up',
      'Pull barbell to lower chest/upper abs',
      'Squeeze shoulder blades together at top',
      'Lower weight with control',
    ],
    metadata: {
      equipment: ['barbell'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Chins',
    description: 'Upper body pulling exercise',
    instructions: [
      'Grasp pull-up bar with underhand grip',
      'Hang with arms fully extended',
      'Pull yourself up until chin is over the bar',
      'Lower yourself with control',
      'Repeat for desired reps',
    ],
    metadata: {
      equipment: ['pull-up bar'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Barbell Curl',
    description: 'Bilateral bicep exercise',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Hold barbell with underhand grip',
      'Keep elbows close to sides',
      'Curl weight up to shoulders',
      'Lower with control',
    ],
    metadata: {
      equipment: ['barbell'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Dumbbell Curl',
    description: 'Bilateral bicep exercise',
    instructions: [
      'Stand with dumbbells at sides',
      'Keep elbows close to body',
      'Curl weights up to shoulders',
      'Lower with control',
      'Maintain proper posture throughout',
    ],
    metadata: {
      equipment: ['dumbbells'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Hammer Curl',
    description: 'Neutral grip bicep exercise',
    instructions: [
      'Stand with dumbbells at sides, neutral grip',
      'Keep elbows close to body',
      'Curl weights up while maintaining neutral grip',
      'Focus on bicep contraction at top',
      'Lower with control',
    ],
    metadata: {
      equipment: ['dumbbells'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Bench Press',
    description: 'Compound chest exercise',
    instructions: [
      'Lie on bench with feet flat on floor',
      'Grip barbell slightly wider than shoulder width',
      'Lower bar to mid-chest with control',
      'Press bar up until arms are extended',
      'Maintain stable shoulder position throughout',
    ],
    metadata: {
      equipment: ['barbell', 'bench'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Dips',
    description: 'Compound pushing exercise',
    instructions: [
      'Mount yourself on parallel bars',
      'Lower body by bending elbows',
      'Keep slight forward lean for chest focus',
      'Push back up to starting position',
      'Maintain controlled movement throughout',
    ],
    metadata: {
      equipment: ['dip bars'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Push-up',
    description: 'Bodyweight chest exercise',
    instructions: [
      'Start in plank position with hands shoulder-width apart',
      'Lower chest to ground by bending elbows',
      'Keep body in straight line',
      'Push back up to starting position',
      'Maintain core engagement throughout',
    ],
    metadata: {
      equipment: ['none'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Air Squats',
    description: 'Bodyweight leg exercise',
    instructions: [
      'Stand with feet shoulder-width apart',
      'Send hips back and down',
      'Keep chest up and core engaged',
      'Lower until thighs are parallel to ground',
      'Stand back up by driving through heels',
    ],
    metadata: {
      equipment: ['none'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Front Squat',
    description: 'Compound lower body exercise',
    instructions: [
      'Hold barbell in front rack position',
      'Keep elbows high and torso upright',
      'Squat down while maintaining upright position',
      'Drive through heels to stand',
      'Maintain core tension throughout',
    ],
    metadata: {
      equipment: ['barbell'],
      difficulty: 'advanced',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Hip Thruster',
    description: 'Glute isolation exercise',
    instructions: [
      'Sit with upper back against bench',
      'Place barbell across hips',
      'Drive hips up by squeezing glutes',
      'Hold at top for brief pause',
      'Lower with control',
    ],
    metadata: {
      equipment: ['barbell', 'bench'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Military Press',
    description: 'Overhead pressing movement',
    instructions: [
      'Stand with barbell at shoulders',
      'Press weight overhead while maintaining tight core',
      'Fully extend arms at top',
      'Lower bar back to shoulders with control',
      'Keep strict form throughout',
    ],
    metadata: {
      equipment: ['barbell'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Arnold Press',
    description: 'Shoulder pressing variation',
    instructions: [
      'Start with dumbbells at shoulders, palms facing you',
      'Press weights up while rotating palms forward',
      'Fully extend arms overhead',
      'Return to start position with reverse motion',
      'Maintain control throughout movement',
    ],
    metadata: {
      equipment: ['dumbbells'],
      difficulty: 'intermediate',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Machine Tricep Press',
    description: 'Isolation tricep exercise',
    instructions: [
      'Adjust seat height appropriately',
      'Grip handles with neutral grip',
      'Press weight down by extending elbows',
      'Hold brief contraction at bottom',
      'Return to start with control',
    ],
    metadata: {
      equipment: ['machine'],
      difficulty: 'beginner',
    },
  },
  {
    _id: new ObjectId(),
    name: 'Tricep Kickback',
    description: 'Isolation tricep exercise',
    instructions: [
      'Hinge at hips with dumbbell in hand',
      'Keep upper arm parallel to torso',
      'Extend arm straight back',
      'Hold contraction briefly',
      'Return to start position with control',
    ],
    metadata: {
      equipment: ['dumbbells'],
      difficulty: 'beginner',
    },
  },
];

// module.exports = {
//   exercises,
// };
