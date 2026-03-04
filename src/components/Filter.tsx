type FilterValue = "all" | "income" | "expense";

type FilterProps = {
  value: FilterValue;
  onChange: (value: FilterValue) => void;
};

export default function Filter({ value, onChange }: FilterProps) {
  return (
    <div className="p-5">
      <div className="flex gap-2 text-sm">
        <button
          type="button"
          className={`px-3 py-2 border rounded-lg ${
            value === "all" ? "bg-indigo-500 text-white" : "bg-white"
          }`}
          onClick={() => onChange("all")}
        >
          Tous
        </button>
        <button
          type="button"
          className={`px-3 py-2 border rounded-lg ${
            value === "income" ? "bg-indigo-500 text-white" : "bg-white"
          }`}
          onClick={() => onChange("income")}
        >
          Revenus
        </button>
        <button
          type="button"
          className={`px-3 py-2 border rounded-lg ${
            value === "expense" ? "bg-indigo-500 text-white" : "bg-white"
          }`}
          onClick={() => onChange("expense")}
        >
          Dépenses
        </button>
      </div>
    </div>
  );
}

