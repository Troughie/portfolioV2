import { useState } from "react";
import Button from "../commons/Button";
import Divider from "../commons/Divider";
import Input from "../commons/Input";
import axios from "axios";
import { useIsLoading } from "../store";
interface FormType {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const API_URL =
  "https://api.sheetbest.com/sheets/fbd78936-be94-4a6b-b160-7c0050c1e2b4";
const Contact = () => {
  const [form, setForm] = useState<FormType>({
    email: "",
    message: "",
    name: "",
    subject: "",
  });

  const { setIsLoading } = useIsLoading();

  const handleChange = (field: keyof FormType, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value, // Cập nhật state ngay lập tức
      time: new Date(),
    }));
  };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post(API_URL, form);
    setIsLoading(true);
    setForm({
      email: "",
      message: "",
      name: "",
      subject: "",
    });
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };
  const InputArray = ["name", "email", "subject", "message"];
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
        onSubmit={(e) => submitForm(e)}
        className="mt-10 grid w-full place-items-center"
      >
        {InputArray.map((i) => (
          <Input
            isTextArea={i === "message"}
            required={true}
            name={i}
            input={form[i as keyof FormType]}
            onChange={(e) =>
              handleChange(
                i as keyof FormType,
                (e.target as HTMLInputElement).value,
              )
            }
          />
        ))}
        <Button name="Send message" className="mt-4 px-3 py-2" />
      </form>
    </div>
  );
};

export default Contact;
