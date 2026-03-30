import RevenueOverTimeChart from '@/components/charts/RevenueOverTimeChart';
import UserGrowthChart from '@/components/charts/UserGrowthChart';
import KpiCard from '@/components/ui/KpiCard';
import { type } from 'os';

// Temporary KPI data for demonstration purposes
const kpiData = [
  {
    label: 'Revenue',
    type: 'currency',
    value: 54321,
    change: 10.2,
  },
  {
    label: 'Active Users',
    type: 'number',
    value: 1234,
    change: 7.5,
  },
  {
    label: 'Coversion Rate',
    type: 'percentage',
    value: 4.5,
    change: -1.2,
  },
  {
    label: 'Sessions',
    type: 'number',
    value: 17135,
    change: 5.6,
  },
];

// Temporary revenue over time data for demonstration purposes
const revenueOverTimeData = [
  {
    revenue: 45000,
    month: 'Jan',
  },
  {
    revenue: 48000,
    month: 'Feb',
  },
  {
    revenue: 52000,
    month: 'Mar',
  },
  {
    revenue: 49000,
    month: 'Apr',
  },
  {
    revenue: 55000,
    month: 'May',
  },
  {
    revenue: 58000,
    month: 'Jun',
  },
  {
    revenue: 54000,
    month: 'Jul',
  },
  {
    revenue: 61000,
    month: 'Aug',
  },
  {
    revenue: 59000,
    month: 'Sep',
  },
  {
    revenue: 64000,
    month: 'Oct',
  },
  {
    revenue: 68000,
    month: 'Nov',
  },
  {
    revenue: 72000,
    month: 'Dec',
  },
];

// Temporary user growth data for demonstration purposes
const userGrowthData = [
  {
    users: 850,
    month: 'Jan',
  },
  {
    users: 920,
    month: 'Feb',
  },
  {
    users: 1050,
    month: 'Mar',
  },
  {
    users: 980,
    month: 'Apr',
  },
  {
    users: 1120,
    month: 'May',
  },
  {
    users: 1250,
    month: 'Jun',
  },
  {
    users: 1180,
    month: 'Jul',
  },
  {
    users: 1340,
    month: 'Aug',
  },
  {
    users: 1290,
    month: 'Sep',
  },
  {
    users: 1420,
    month: 'Oct',
  },
  {
    users: 1510,
    month: 'Nov',
  },
  {
    users: 1620,
    month: 'Dec',
  },
];

const OverviewPage = () => {
  return (
    <div>
      <main>
        <h2>Overview Page</h2>
        <p>Welcome to the analytics overview page!</p>
        <div>
          <h3>Key Performance Indicators</h3>
          {kpiData.map(({ label, type, value, change }) => (
            <KpiCard
              key={label}
              label={label}
              type={type}
              value={value}
              change={change}
            />
          ))}
        </div>
        <div>
          <RevenueOverTimeChart data={revenueOverTimeData} />
        </div>
        <div>
          <UserGrowthChart data={userGrowthData} />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
