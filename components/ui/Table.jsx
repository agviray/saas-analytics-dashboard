const Table = ({ columns, data }) => {
  const renderTableData = (data, columns) => {
    return data.map((item) => (
      <tr key={item.id} className="border-b border-gray-200">
        {columns.map((col) => (
          <td
            key={`${item.id}-${col.key}`}
            className="px-6 py-[19.5px] text-[#101828] text-sm font-normal leading-5 tracking-[-0.15px]"
          >
            {col.render ? col.render(item) : item[col.key]}
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <table className="w-full">
      <thead className="bg-gray-50 border-b border-gray-200">
        <tr>
          {columns.map((col) => (
            <th
              key={col.key}
              className="px-6 py-3 text-left text-[#6a7282] text-xs font-medium leading-4 tracking-[.6px]"
            >
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">{renderTableData(data, columns)}</tbody>
    </table>
  );
};

export default Table;
