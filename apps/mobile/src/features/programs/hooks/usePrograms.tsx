import { useMemo } from 'react';
import { Program, ProgramType, GroupedPrograms } from '../models/Programs';

export const usePrograms = () => {
  // TODO: Fetch from db
  // const [programs, setPrograms] = useState<Program[]>([
  //   {
  //     id: '1',
  //     name: 'Squat & Accessory Exercise 2 days/week',
  //     isPremium: true,
  //     typeId: '1',
  //   },
  //   { id: '2', name: 'Squat Only - 2 days/week', isPremium: true, typeId: '1' },
  //   { id: '3', name: '3 days/week', isPremium: false, typeId: '2' },
  //   { id: '4', name: '4 days/week', isPremium: false, typeId: '3' },
  //   { id: '5', name: '4 days/week', isPremium: false, typeId: '4' },
  //   { id: '6', name: '2 days/week', isPremium: false, typeId: '4' },
  //   { id: '7', name: '5 days/week', isPremium: false, typeId: '4' },
  //   { id: '7', name: '3 days/week', isPremium: false, typeId: '4' },
  // ]);
  const programs = useMemo<Program[]>(
    () => [
      {
        id: '1',
        name: 'Squat & Accessory Exercise 2 days/week',
        typeId: '1',
      },
      {
        id: '2',
        name: 'Squat Only - 2 days/week',
        typeId: '1',
      },
      { id: '3', name: '3 days/week', typeId: '2' },
      { id: '4', name: '4 days/week', typeId: '3' },
      { id: '5', name: '4 days/week', typeId: '4' },
      { id: '6', name: '2 days/week', typeId: '4' },
      { id: '7', name: '5 days/week', typeId: '4' },
      { id: '7', name: '3 days/week', typeId: '4' },
    ],
    []
  );

  // TODO: Fetch from db
  // const [programTypes, setProgramTypes] = useState<ProgramType[]>([
  //   {
  //     id: '1',
  //     name: 'Beginner Squat Program',
  //   },
  //   {
  //     id: '2',
  //     name: 'Beginner Strength Training Program',
  //   },
  //   {
  //     id: '3',
  //     name: 'Bench Press Program',
  //   },
  //   {
  //     id: '4',
  //     name: 'Bodybuilding 313',
  //   },
  // ]);
  const programTypes = useMemo<ProgramType[]>(
    () => [
      {
        id: '1',
        name: 'Beginner Squat Program',
        isPremium: false,
      },
      {
        id: '2',
        name: 'Beginner Strength Training Program',
        isPremium: false,
      },
      {
        id: '3',
        name: 'Bench Press Program',
        isPremium: true,
      },
      {
        id: '4',
        name: 'Bodybuilding 313',
        isPremium: true,
      },
    ],
    []
  );

  const groupedPrograms = useMemo<GroupedPrograms[]>(() => {
    return programTypes.map((type) => ({
      type,
      programs: programs.filter((program) => program.typeId === type.id),
    }));
  }, [programs, programTypes]);

  return {
    groupedPrograms,
  };
};
