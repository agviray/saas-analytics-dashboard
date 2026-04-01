const Table = ({ columns, data }) => {
  const renderTableData = (data, columns) => {
    return data.map((item) => (
      <tr key={item.id}>
        {columns.map((col) => (
          <td key={`${item.id}-${col.key}`}>{item[col.key]}</td>
        ))}
      </tr>
    ));
  };

  return (
    <table>
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>{renderTableData(data, columns)}</tbody>
    </table>
  );
};

export default Table;
