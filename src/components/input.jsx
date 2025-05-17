export const Input = ({ name, type = "text", value = "", ...props }) => {
  return (
    <input
      name={name}
      type={type}
      defaultValue={value}
      className="
        py-2 px-4 w-full
        mb-2 border border-blue-800
        rounded ring-1 ring-blue-900
        "
      {...props}
    />
  );
};
