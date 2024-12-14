import { useQuery } from '@apollo/client';
import { GET_EXERCISES } from '../queries/exercises';
import { Exercise } from '../types';

export const useExercises = () => {
  const { loading, error, data } = useQuery<{ exercises: Exercise[] }>(
    GET_EXERCISES
  );

  return {
    loading,
    error,
    exercises: data?.exercises || [],
  };
};
