export const Search = () => {
  return (
    <div className="rounded relative w-8/12 md:w-8/12 lg:w-1/3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-gray-500 absolute ml-4 inset-0 m-auto icon icon-tabler icon-tabler-search"
        width={20}
        height={20}
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <circle cx={10} cy={10} r={7} />
        <line x1={21} y1={21} x2={15} y2={15} />
      </svg>
      <input
        className="border border-gray-100 focus:outline-none focus:border-brand rounded-full w-full text-sm bg-gray-100 text-gray-500 pl-12 sm:pl-10 md:pl-12 py-3 pr-4"
        type="search"
        placeholder="Search"
      />
    </div>
  );
};
