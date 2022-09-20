const Pagenation = ({ nextPage }) => {
  return (
    <div className='bg-white p-4 mb-4'>
      <button onClick={() => nextPage(1)}>1</button>
      <button onClick={() => nextPage(2)}>2</button>
      <button onClick={() => nextPage(3)}>3</button>
      <button onClick={() => nextPage(4)}>4</button>
      <button onClick={() => nextPage(5)}>5</button>
    </div>
  );
};

export default Pagenation;
