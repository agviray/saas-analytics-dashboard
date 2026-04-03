const badgeStyles = {
  success: 'text-[#00A63E] bg-[#F0FDF4]',
  failed: 'text-[#E7000B] bg-[#FEF2F2]',
  pending: 'text-[#D08700] bg-[#FEFCE8]',
};

const Badge = ({ children, theme }) => {
  return (
    <span
      className={`inline-block px-2 py-1 border border-0 rounded-full ${badgeStyles[theme.toLowerCase()]}`}
    >
      {children}
    </span>
  );
};

export default Badge;
