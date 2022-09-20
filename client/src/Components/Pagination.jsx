function Pagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <nav className="flex justify-end items-center gap-1 m-4">
        <button className="border-none rounded-lg p-2 m-0 bg-white color text-sm shadow-md text-black hover:bg-grey-70 text-center" 
          onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </button>
        {Array(numPages)
          .fill()
          .map((x, idx) => (
            <button className="border-none rounded-lg p-2 m-0 bg-white color text-sm shadow-md text-black hover:bg-grey-70 text-center"
              key={idx + 1}
              onClick={() => setPage(idx + 1)}
              aria-current={page === idx + 1 ? "page" : null}
            >
              {idx + 1}
            </button>
          ))}
        <button className="border-none rounded-lg p-2 m-0 bg-white color text-sm shadow-md text-black hover:bg-grey-70 text-center"
           onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </button>
      </nav>
    </>
  );
}


export default Pagination;
