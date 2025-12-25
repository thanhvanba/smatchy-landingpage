import { Form, Input, message } from "antd";
import { useContact } from "../../../hooks/useContact";
import { useLocale } from "../../../contexts/LangContext";
import type { ContactForm } from "../../../services/types/contact";
import { contactFormConfig } from "../../../config/formConfig";

export default function ContactFormCard() {
  const { locale } = useLocale();
  const [form] = Form.useForm<ContactForm>();
  const mutation = useContact();
  //console.log("🚀 ~ ContactFormCard ~ mutation:", mutation);

  const onFinish = (values: ContactForm) => {
    const payload = {
      ...values,
      status_contact: (values as any).status_contact || "new",
    } as ContactForm;
    mutation.mutate(payload, {
      onSuccess: () => {
        message.success((contactFormConfig.messages.success as any)[locale]);
        form.resetFields();
      },
      onError: () => {
        message.error((contactFormConfig.messages.error as any)[locale]);
      },
    });
  };

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      className="w-full p-6! md:p-8! lg:p-9!"
    >
      <Form.Item
        name="full_name"
        label={
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
            {(contactFormConfig.full_name.label as any)[locale]}
          </span>
        }
        rules={(contactFormConfig.full_name.rules as any)[locale]}
      >
        <Input
          size="large"
          placeholder={(contactFormConfig.full_name.placeholder as any)[locale]}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="email"
        label={
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
            {(contactFormConfig.email.label as any)[locale]}
          </span>
        }
        rules={(contactFormConfig.email.rules as any)[locale]}
      >
        <Input
          size="large"
          placeholder={(contactFormConfig.email.placeholder as any)[locale]}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="subject"
        label={
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
            {(contactFormConfig.subject.label as any)[locale]}
          </span>
        }
        rules={(contactFormConfig.subject.rules as any)[locale]}
      >
        <Input
          size="large"
          placeholder={(contactFormConfig.subject.placeholder as any)[locale]}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
            {(contactFormConfig.message.label as any)[locale]}
          </span>
        }
        rules={(contactFormConfig.message.rules as any)[locale]}
      >
        <Input.TextArea
          size="large"
          placeholder={(contactFormConfig.message.placeholder as any)[locale]}
          rows={4}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item>
        <button
          type="submit"
          disabled={mutation.isPending}
          className={`cursor-pointer w-full rounded-full text-white font-medium text-xl py-4 
      ${mutation.isPending ? "opacity-70 cursor-not-allowed" : ""}
      bg-[#FCA13B] border-[#FCA13B]`}
        >
          {mutation.isPending
            ? "Sending..."
            : (contactFormConfig.buttons.sendMessage as any)[locale]}
        </button>
      </Form.Item>
    </Form>
  );
}
