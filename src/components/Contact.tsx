import Button from "../commons/Button";
import Divider from "../commons/Divider";
import Input from "../commons/Input";
import { useForm, ValidationError } from "@formspree/react";
import { useIsLoading } from "../store";
import { useEffect } from "react";
import { useState } from "react";
const AlertSuccess = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="animate-fade-in w-full max-w-sm rounded-2xl bg-white px-8 py-6 text-center shadow-xl">
        <h2 className="mb-2 text-xl font-semibold text-green-600">
          Message Sent Successfully
        </h2>
        <p className="mb-4 text-gray-700">
          Thank you for reaching out. I’ll get back to you as soon as possible
          via your email.
        </p>

        <button
          onClick={() => setVisible(false)}
          className="mt-4 inline-block rounded-full bg-green-600 px-6 py-2 font-medium text-white transition-colors hover:bg-green-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};
const Contact = () => {
  const [state, handleSubmit] = useForm("xldlewlj");
  const InputArray = ["name", "email", "subject", "message"];
  const { setIsLoading } = useIsLoading();

  useEffect(() => {
    setIsLoading(state.submitting);
  }, [setIsLoading, state.submitting]);

  if (state.succeeded) {
    return <AlertSuccess />;
  }

  return (
    <div className="relative h-auto w-full px-8">
      <div className="flex w-full flex-col items-center justify-between">
        <h1 className="text-3xl text-nowrap md:text-4xl">Get in Touch</h1>
        <Divider />
        <h4 className="text-center text-sm">
          Have a sweet project in mind or just want to say hi? Feel free to send
          me a message!
        </h4>
      </div>
      <form
        onSubmit={handleSubmit}
        className="mt-10 grid w-full place-items-center"
      >
        {InputArray.map((i) => (
          <>
            <Input isTextArea={i === "message"} required={true} name={i} />
            <ValidationError prefix={i} field={i} errors={state.errors} />
          </>
        ))}

        <Button
          disabled={state.submitting}
          type="submit"
          name="Send message"
          className="mt-4 px-3 py-2"
        />
      </form>
    </div>
  );
};

export default Contact;
