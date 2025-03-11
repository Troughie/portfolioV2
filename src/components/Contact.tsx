import Button from "../commons/Button";
import Divider from "../commons/Divider";
import Input from "../commons/Input";

const Contact = () => {
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
      <form action="" className="mt-10 grid w-full place-items-center">
        <Input required={true} name="name" />
        <Input required={true} name="email" />
        <Input required={true} name="subject" />
        <Input required={true} name="message" isTextArea />
        <Button name="Send message" className="mt-4 px-3 py-2" />
      </form>
    </div>
  );
};

export default Contact;
