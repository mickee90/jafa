import { Card } from '../Card/Card';
import { Dropdown } from '../../dropdown/Dropdown';

type Props = {
  title: string;
  children: string | JSX.Element | JSX.Element[] | '() => JSX.Element';
};

export enum FilterValues {
  '7_days' = '7 Days',
  '14_days' = '14 Days',
  '30_days' = '30 Days',
  'max' = 'Max',
}

export const FilterCard = ({ title, children }: Props) => {
  const filterDropdown = () => (
    <Dropdown
      label="The last 7 days"
      options={[
        { label: '7 days', value: FilterValues['7_days'] },
        { label: '14 days', value: FilterValues['14_days'] },
        { label: '30 days', value: FilterValues['30_days'] },
        { label: 'Max', value: FilterValues['max'] },
      ]}
    />
  );

  return (
    <Card title={title} headerRight={filterDropdown()}>
      {children}
    </Card>
  );
};
