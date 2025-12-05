import { Form, Input, message } from "antd";
import { useContact } from "../../../hooks/useContact";
import type { ContactForm } from "../../../services/types/contact";
import { contactFormConfig } from "../../../config/formConfig";

export default function ContactFormChatBot() {
  const [form] = Form.useForm<ContactForm>();
  // const [loading, setLoading] = useState(false);
  const mutation = useContact();

  const onFinish = (values: ContactForm) => {
    // setLoading(true);
    const payload = {
      ...values,
      status_contact: (values as any).status_contact || "new",
    } as ContactForm;
    mutation.mutate(payload, {
      onSuccess: () => {
        message.success("Sent successfully!");
        form.resetFields();
        // setLoading(false);
      },
      onError: () => {
        message.error("Failed to send");
        // setLoading(false);
      },
    });
  };

  return (
    <Form form={form} layout="vertical" onFinish={onFinish} className="w-full">
      <Form.Item
        name="full_name"
        label={
          <span className="text-xs md:text-sm lg:text-base text-[#0F262E]">
            {contactFormConfig.full_name.label}
          </span>
        }
        rules={contactFormConfig.full_name.rules as any}
      >
        <Input
          size="large"
          placeholder={contactFormConfig.full_name.placeholder}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="email"
        label={
          <span className="text-xs md:text-sm lg:text-base text-[#0F262E]">
            {contactFormConfig.email.label}
          </span>
        }
        rules={contactFormConfig.email.rules as any}
      >
        <Input
          size="large"
          placeholder={contactFormConfig.email.placeholder}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="subject"
        label={
          <span className="text-xs md:text-sm lg:text-base text-[#0F262E]">
            {contactFormConfig.subject.label}
          </span>
        }
        rules={contactFormConfig.subject.rules as any}
      >
        <Input
          size="large"
          placeholder={contactFormConfig.subject.placeholder}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item
        name="message"
        label={
          <span className="text-xs md:text-sm lg:text-base text-[#0F262E]">
            {contactFormConfig.message.label}
          </span>
        }
        rules={contactFormConfig.message.rules as any}
      >
        <Input.TextArea
          size="large"
          rows={4}
          placeholder={contactFormConfig.message.placeholder}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item>
        <button className="w-full rounded-full text-white font-medium text-xl py-3 bg-[#FCA13B] border-[#FCA13B]">
          Submit
        </button>
      </Form.Item>
    </Form>
  );
}
