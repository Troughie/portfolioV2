interface props {
  name: string;
  required: boolean;
  isTextArea?: boolean;
}
const Input = ({ isTextArea = false, name, required }: props) => {
  return (
    <div className="relative my-5 flex w-full flex-col md:w-1/2">
      {isTextArea ? (
        <textarea
          className="peer border-b border-[#707070] focus:ring-0 focus:outline-none"
          id={name}
          name={name}
          rows={2}
          cols={10}
        ></textarea>
      ) : (
        <input
          type="text"
          name={name}
          required={required}
          autoComplete="off"
          pattern={
            name === "email"
              ? "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$"
              : undefined
          }
          title={name === "email" ? "(example@gmail.com)" : ""}
          className="peer border-b border-[#707070] focus:ring-0 focus:outline-none"
        />
      )}
      <label
        htmlFor={name}
        className="peer-focus:text-primary absolute -top-3 -translate-y-1/2 font-sans font-bold text-gray-500 uppercase transition-all duration-700 peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-75 peer-focus:-top-4 peer-focus:-left-1 peer-focus:scale-75 peer-focus:duration-700"
      >
        {name}
      </label>
      <div className="bg-primary h-[1px] w-0 -translate-y-0.5 duration-700 peer-focus:w-full"></div>
    </div>
  );
};

export default Input;
