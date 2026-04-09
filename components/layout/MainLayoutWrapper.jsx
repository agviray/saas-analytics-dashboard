import Sidebar from './Sidebar';

const MainLayoutWrapper = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
};

export default MainLayoutWrapper;
