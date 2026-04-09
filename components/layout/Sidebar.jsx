import { LayoutDashboard, ChartColumn, FileText, Settings } from 'lucide-react';
const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-4 w-64 h-screen bg-white border-r border-[#E5E7EB] ">
      <div className="p-6 border-b border-[#E5E7EB]">
        <div className="flex items-center gap-2 h-8">
          <div className="inline-flex items-center">
            <span className="inline-flex justify-center items-center w-8 h-8 px-[6px] border border-none rounded-[10px] bg-[#155DFC]">
              <ChartColumn color="white" />
            </span>
          </div>
          <h2 className="text-[#0a0a0a] text-lg font-semibold leading-7 tracking-[-0.439px]">
            SaaS Product
          </h2>
        </div>
      </div>
      <nav className="flex justify-center">
        <ul className="flex flex-col gap-2 w-56">
          <li>
            <a
              href="#"
              className="flex items-center gap-3 h-12 pl-4 text-[#364153] text-base"
            >
              <LayoutDashboard color="#364153" />
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 h-12 pl-4 text-[#364153] text-base"
            >
              <ChartColumn color="#364153" />
              Analytics
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 h-12 pl-4 text-[#364153] text-base"
            >
              <FileText color="#364153" />
              Reports
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center gap-3 h-12 pl-4 text-[#364153] text-base"
            >
              <Settings color="#364153" />
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
