import RevenueOverTimeChart from '@/components/RevenueOverTimeChart';
import UserGrowthChart from '@/components/UserGrowthChart';

const OverviewPage = () => {
  return (
    <div>
      <main>
        <h2>Overview Page</h2>
        <p>Welcome to the analytics overview page!</p>
        <div>
          <RevenueOverTimeChart />
        </div>
        <div>
          <UserGrowthChart />
        </div>
      </main>
    </div>
  );
};

export default OverviewPage;
