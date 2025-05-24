const InputCheckBox = ({ defaultCondition, content, setter }) => {
  return (
    <div className="flex items-center gap-2 sm:gap-3 mx-2 sm:mx-4">
      <input
        type="checkbox"
        defaultChecked={defaultCondition}
        id="numberInput"
        onChange={() => setter(prev => !prev)}
        className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer"
      />
      <label className="text-lg sm:text-xl font-semibold">
        {content}
      </label>
    </div>
  );
};

export default InputCheckBox;
