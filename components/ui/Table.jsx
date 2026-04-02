const Table = ({ columns, data }) => {
  const renderTableData = (data, columns) => {
    return data.map((item) => (
      <tr
        key={item.id}
        className="flex justify-center items-start border-b border-gray-200 w-full "
      >
        {columns.map((col) => (
          <td
            key={`${item.id}-${col.key}`}
            className="flex shrink-0 flex-1 p-6 py-[19.5px]  color-[#101828] text-sm font-normal leading-5 tracking-[-0.15px] w-full"
          >
            {item[col.key]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="w-full">
      <thead className="shrink-0 bg-gray-50 border-b border-gray-200 w-full">
        <tr className="flex shrink-0 w-full">
          {columns.map((col) => (
            <th
              key={col.key}
              className="flex-1 p-6 py-3 text-left color-[#6a7282] text-xs font-medium leading-4 tracking-[.6px]"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="flex flex-col justify-center items-start shrink-0 bg-white w-full">
        {renderTableData(data, columns)}
      </tbody>
    </table>
  );
};

export default Table;
