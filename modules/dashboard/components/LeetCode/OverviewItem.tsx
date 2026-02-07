interface OverviewItemProps {
  label: string;
  value: string | number;
  color?: string;
}

const OverviewItem = ({
  label,
  value,
  color = "text-yellow-400",
}: OverviewItemProps) => {
  return (
    <div className="rounded-lg border border-neutral-800 p-4">
      <p className="text-sm text-neutral-400">{label}</p>
      <p className={`text-2xl font-bold ${color}`}>{value}</p>
    </div>
  );
};

export default OverviewItem;
