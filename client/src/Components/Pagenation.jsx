const Pagenation = ({ pagenum, nextPage }) => {
  return (
    <div className="flex justify-end mb-4 ml-auto">
      <button
        className={`${
          pagenum === 1
            ? 'text-sm text-blue-50 font-semibold ml-2 bg-grey-10'
            : 'text-xs ml-2 border-[0.5px] p-[0.1rem] rounded-sm bg-white active:bg-grey-10 focus-ring focus:ring-grey-10'
        }`}
        onClick={() => nextPage(1)}
      >
        1
      </button>
      <button
        className={`${
          pagenum === 2
            ? 'text-sm text-blue-50 font-semibold ml-2 bg-grey-10'
            : 'text-xs ml-2 border-[0.5px] p-[0.1rem] rounded-sm bg-white active:bg-grey-10 focus-ring focus:ring-grey-10'
        }`}
        onClick={() => nextPage(2)}
      >
        2
      </button>
      <button
        className={`${
          pagenum === 3
            ? 'text-sm text-blue-50 font-semibold ml-2 bg-grey-10'
            : 'text-xs ml-2 border-[0.5px] p-[0.1rem] rounded-sm bg-white active:bg-grey-10 focus-ring focus:ring-grey-10'
        }`}
        onClick={() => nextPage(3)}
      >
        3
      </button>
      <button
        className={`${
          pagenum === 4
            ? 'text-sm text-blue-50 font-semibold ml-2 bg-grey-10'
            : 'text-xs ml-2 border-[0.5px] p-[0.1rem] rounded-sm bg-white active:bg-grey-10 focus-ring focus:ring-grey-10'
        }`}
        onClick={() => nextPage(4)}
      >
        4
      </button>
      <button
        className={`${
          pagenum === 5
            ? 'text-sm text-blue-50 font-semibold ml-2 bg-grey-10'
            : 'text-xs ml-2 border-[0.5px] p-[0.1rem] rounded-sm bg-white active:bg-grey-10 focus-ring focus:ring-grey-10'
        }`}
        onClick={() => nextPage(5)}
      >
        5
      </button>
    </div>
  );
};

export default Pagenation;
