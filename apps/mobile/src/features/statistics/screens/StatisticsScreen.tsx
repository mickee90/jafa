import React from 'react';
import { ScreenComponent, SpacerComponent } from '@jafa/jafa-ui';
import { StatisticsCard } from '../components/StatisticsCard/StatisticsCard';
import { WorkoutAverageCard } from '../components/WorkoutAverageCard/WorkoutAverageCard';
import { WeeklyAverageCard } from '../components/WeeklyAverageCard/WeeklyAverageCard';

export const StatisticsScreen = () => {
  return (
    <ScreenComponent>
      <StatisticsCard />
      <SpacerComponent size={16} />
      <WorkoutAverageCard />
      <SpacerComponent size={16} />
      <WeeklyAverageCard />
    </ScreenComponent>
  );
};
