export const Form = ({ onSubmit, children }) => {
  return (
    <form
      className="shadow-xl mt-8 w-11/12 px-2 py-6 md:w-5/12"
      onSubmit={onSubmit}
      noValidate
    >
      {children}
    </form>
  );
};

export const Input = ({ type, name, onChange, value, onBlur }) => {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      className="mt-2 p-2 w-full border-1 rounded-md bg-gray-100"
    />
  );
};

export const Label = ({ children, htmlFor }) => {
  return (
    <label className="my-3" htmlFor={htmlFor}>
      {children}
    </label>
  );
};
