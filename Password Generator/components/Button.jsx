const Button = ({ text }) => {
  return (
    <button
      className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white bg-red-700 rounded-lg px-4 py-2 transition hover:bg-red-800">
      {text}
    </button>
  );
};

export default Button;
