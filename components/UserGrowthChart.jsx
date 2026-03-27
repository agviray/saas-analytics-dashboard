'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

// Temporary data for demonstration purposes
const data = [
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

const UserGrowthChart = () => {
  return (
    <div>
      <h2>User Growth Chart</h2>
      <div>
        <BarChart
          responsive
          style={{ width: '100%', height: 500 }}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          data={data}
        >
          <Bar dataKey="users" fill="#3B82F6" radius={5} />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis dataKey="users" width="auto" />
          <Tooltip contentStyle={{ borderRadius: '7px' }} />
        </BarChart>
      </div>
    </div>
  );
};

export default UserGrowthChart;
