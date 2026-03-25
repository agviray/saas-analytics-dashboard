const KpiCard = ({ label, value, change }) => {
  return (
    <div>
      <h3>{label}</h3>
      <div>
        <span>{value}</span>
        <span>{change}</span>
      </div>
    </div>
  );
};

export default KpiCard;
