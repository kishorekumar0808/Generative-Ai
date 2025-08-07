export default function HistoryPanel({ history }) {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold">History</h3>
      <ul className="list-disc pl-5 mt-2 text-sm text-gray-600">
        {history.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
