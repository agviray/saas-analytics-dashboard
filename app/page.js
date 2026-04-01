import RevenueOverTimeChart from '@/components/charts/RevenueOverTimeChart';
import KpiCard from '@/components/ui/KpiCard';
import UserGrowthChart from '@/components/charts/UserGrowthChart';
import Table from '@/components/ui/Table';

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

// Temporary labels for Recent Transactions table
const recentTransactionsColumns = [
  {
    key: 'id',
    label: 'ID',
  },
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'date',
    label: 'DATE',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
  {
    key: 'amount',
    label: 'AMOUNT',
  },
];

// Temporary recent transactions data for demonstration purposes
const recentTransactionsData = [
  {
    id: 'TXN-001',
    name: 'John Doe',
    date: '2026-03-18',
    status: 'Success',
    amount: 1250,
  },
  {
    id: 'TXN-002',
    name: 'Sarah Smith',
    date: '2026-03-18',
    status: 'Pending',
    amount: 890,
  },
  {
    id: 'TXN-003',
    name: 'Michael Johnson',
    date: '2023-03-17',
    status: 'Success',
    amount: 2340,
  },
  {
    id: 'TXN-004',
    name: 'Emily Davis',
    date: '2026-03-17',
    status: 'Failed',
    amount: 450,
  },
  {
    id: 'TXN-005',
    name: 'David Wilson',
    date: '2026-03-16',
    status: 'Success',
    amount: 3120,
  },
  {
    id: 'TXN-006',
    name: 'Jessica Brown',
    date: '2026-03-16',
    status: 'Pending',
    amount: 670,
  },
  {
    id: 'TXN-007',
    name: 'Daniel Martinez',
    date: '2026-03-15',
    status: 'Success',
    amount: 1890,
  },
  {
    id: 'TXN-008',
    name: 'Lisa Anderson',
    date: '2026-03-15',
    status: 'Success',
    amount: 540,
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
        <div>
          <h3>Recent Transactions</h3>
          <Table
            columns={recentTransactionsColumns}
            data={recentTransactionsData}
          />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
