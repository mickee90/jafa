import { gql } from '@apollo/client';

export const GET_EXERCISES = gql`
  query GetExercises {
    exercises {
      id
      name
      description
      instructions
      metadata {
        equipment
        difficulty
      }
    }
  }
`;
