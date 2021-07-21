export const Error = ({ children }) => {
  return (
    <div className="w-8/12 p-2 rounded-sm font-bold my-2 text-xs text-red-700">
      <p>{children}</p>
    </div>
  );
};
