'use client';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const UserGrowthChart = ({ data }) => {
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
