'use client';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

// Temporary data for demonstration purposes
const data = [
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

const RevenueOverTimeChart = () => {
  return (
    <div>
      <h2>Revenue Over Time Chart</h2>
      <div>
        <LineChart
          responsive
          style={{
            width: '100%',
            height: 500,
          }}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          data={data}
        >
          <Line
            type="monotone"
            stroke="#3B82F6"
            strokeWidth="2"
            dot={{ fill: '#3B82F6', strokeWidth: 0 }}
            activeDot={{ fill: '#3B82F6', r: 5 }}
            dataKey="revenue"
          />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
        </LineChart>
      </div>
    </div>
  );
};

export default RevenueOverTimeChart;
