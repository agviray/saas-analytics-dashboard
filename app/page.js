import { redirect } from 'next/navigation';

// No home page content. Main focus is to display the dashboard as the main landing page.
const HomePage = () => {
  redirect('/dashboard');
};

export default HomePage;
