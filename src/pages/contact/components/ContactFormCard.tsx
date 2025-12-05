import { Form, Input, message } from "antd";
import { useContact } from "../../../hooks/useContact";
import type { ContactForm } from "../../../services/types/contact";
import { contactFormConfig } from "../../../config/formConfig";

export default function ContactFormCard() {
  const [form] = Form.useForm<ContactForm>();
  // const [loading, setLoading] = useState(false);
  const mutation = useContact();

  const onFinish = (values: ContactForm) => {
    // setLoading(true);
    // ensure status_contact exists
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
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
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
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
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
          <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
            {contactFormConfig.message.label}
          </span>
        }
        rules={contactFormConfig.message.rules as any}
      >
        <Input.TextArea
          size="large"
          placeholder={contactFormConfig.message.placeholder}
          rows={4}
          className="rounded-xl"
        />
      </Form.Item>

      <Form.Item>
        <button className="w-full rounded-full text-white font-medium text-xl py-4 bg-[#FCA13B] border-[#FCA13B]">
          Send Message
        </button>
      </Form.Item>
    </Form>
  );
}
