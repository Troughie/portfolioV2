interface props {
  name: string;
  required: boolean;
  isTextArea?: boolean;
  onChange?: (e: React.ChangeEvent) => void;
}

const Input = ({ isTextArea = false, name, required, onChange }: props) => {
  return (
    <div className="relative my-4 flex w-full flex-col">
      <label
        htmlFor={name}
        className="mb-2 text-sm font-semibold uppercase"
        style={{
          color: 'var(--text-secondary)',
        }}
      >
        {name}
      </label>
      {isTextArea ? (
        <textarea
          className="rounded-lg border-2 px-4 py-3 transition-all duration-300 focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/20"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-primary)',
            color: 'var(--text-primary)',
          }}
          id={name}
          required={required}
          name={name}
          placeholder={`Enter your ${name}...`}
          title="Please let me know what you would like."
          rows={4}
          onChange={(e) => onChange && onChange(e)}
        ></textarea>
      ) : (
        <input
          type={name === "email" ? "email" : "text"}
          name={name}
          required={required}
          autoComplete="off"
          placeholder={`Enter your ${name}...`}
          onChange={(e) => onChange && onChange(e)}
          pattern={
            name === "email"
              ? "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$"
              : undefined
          }
          title={name === "email" ? "(example@gmail.com)" : ""}
          className="rounded-lg border-2 px-4 py-3 transition-all duration-300 focus:border-[var(--accent-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-primary)]/20"
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderColor: 'var(--border-primary)',
            color: 'var(--text-primary)',
          }}
        />
      )}
    </div>
  );
};

export default Input;
