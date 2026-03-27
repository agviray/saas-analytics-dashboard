import RevenueOverTimeChart from '@/components/charts/RevenueOverTimeChart';
import UserGrowthChart from '@/components/charts/UserGrowthChart';

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
