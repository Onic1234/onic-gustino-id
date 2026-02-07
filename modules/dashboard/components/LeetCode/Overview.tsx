import OverviewItem from "./OverviewItem";

interface OverviewProps {
  data: any;
}

const Overview = ({ data }: OverviewProps) => {
  if (!data) return null;

  const totalSolved =
    (data.easy?.solved || 0) +
    (data.medium?.solved || 0) +
    (data.hard?.solved || 0);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <OverviewItem
          label="Easy"
          value={`${data.easy?.solved || 0}/${data.easy?.total || 0}`}
          color="text-green-400"
        />
        <OverviewItem
          label="Medium"
          value={`${data.medium?.solved || 0}/${data.medium?.total || 0}`}
          color="text-yellow-400"
        />
        <OverviewItem
          label="Hard"
          value={`${data.hard?.solved || 0}/${data.hard?.total || 0}`}
          color="text-red-400"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <OverviewItem
          label="Total Solved"
          value={totalSolved}
          color="text-blue-400"
        />
        <OverviewItem
          label="Acceptance Rate"
          value={`${(data.acceptanceRate || 0).toFixed(2)}%`}
          color="text-purple-400"
        />
      </div>
    </div>
  );
};

export default Overview;
