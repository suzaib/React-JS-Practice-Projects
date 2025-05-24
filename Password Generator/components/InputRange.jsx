const InputRange = ({ value, setLength }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 w-full sm:w-auto mx-2">
      <input
        className="w-full sm:w-56 cursor-pointer"
        type="range"
        min={6}
        max={20}
        value={value}
        onChange={(e) => setLength(e.target.value)}
      />
      <label className="text-lg sm:text-xl font-medium">
        Length: {value}
      </label>
    </div>
  );
};

export default InputRange;
