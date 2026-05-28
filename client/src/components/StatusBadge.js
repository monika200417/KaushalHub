function StatusBadge({ status }) {
  let color = "bg-gray-500";

  if (status === "open") {
    color = "bg-green-500";
  }

  if (status === "closed") {
    color = "bg-red-500";
  }

  if (status === "pending") {
    color = "bg-yellow-500";
  }

  if (status === "accepted") {
    color = "bg-green-500";
  }

  return (
    <span
      className={`${color} px-3 py-1 rounded-full text-white text-sm capitalize`}
    >
      {status}
    </span>
  );
}

export default StatusBadge;