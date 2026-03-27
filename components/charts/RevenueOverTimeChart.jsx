'use client';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

const RevenueOverTimeChart = ({ data }) => {
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
          <Tooltip contentStyle={{ borderRadius: '7px' }} />
        </LineChart>
      </div>
    </div>
  );
};

export default RevenueOverTimeChart;
