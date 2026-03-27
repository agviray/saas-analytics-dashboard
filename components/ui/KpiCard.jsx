const KpiCard = ({ label, value, change }) => {
  return (
    <div className="flex flex-col p-[25px] items-start gap-2 self-stretch col-start-1 col-span-1 row-start-1 row-span-1 justify-self-stretch rounded-[10px] border border-gray-200 bg-white p-4 shadow-sm">
      <h3 className="flex pr-[186px] items-center self-stretch text-sm text-[#4A5565] leading-5  tracking-[-0.15px]">
        {label}
      </h3>
      <div className="h-[36px] flex justify-between flex-end self-stretch">
        <span className="inline-block w-[116.125px] h-[36px] text-[#101828] text-3xl font-semibold tracking-wide">
          {value}
        </span>
        <span className="inline-block text-[#00A63E] text-sm tracking-[-0.15px]">
          {change}
        </span>
      </div>
    </div>
  );
};

export default KpiCard;
