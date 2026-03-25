import RevenueOverTimeChart from '@/components/RevenueOverTimeChart';

const OverviewPage = () => {
  return (
    <div>
      <main>
        <h2>Overview Page</h2>
        <p>Welcome to the analytics overview page!</p>
        <div>
          <RevenueOverTimeChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
