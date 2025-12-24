import { useState } from "react";
import { Form, Input, Select, message, Modal, Tag } from "antd";
import { useLocale } from "../../../contexts/LangContext";
import {
  proFormConfig,
  roleOptions,
  sportOptions,
} from "../../../config/formConfig";

const { TextArea } = Input;
const { Option } = Select;

export default function ProForm() {
  const { locale } = useLocale();
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [otherRoleText, setOtherRoleText] = useState("");

  const handleRoleChange = (value: string) => {
    if (value === "other") {
      setIsModalOpen(true);
    }
  };

  const handleModalOk = () => {
    if (otherRoleText.trim()) {
      form.setFieldValue("role_description", otherRoleText);
      setIsModalOpen(false);
    } else {
      message.warning((proFormConfig.messages.warning as any)[locale]);
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.setFieldValue("role", undefined);
    setOtherRoleText("");
  };

  const onFinish = (_values: any) => {
    setTimeout(() => {
      message.success((proFormConfig.messages.success as any)[locale]);
      form.resetFields();
      setOtherRoleText("");
    }, 1000);
  };

  const tagRender = (props: any) => {
    const { label } = props;
    return (
      <Tag
        color="#E2F6F6"
        closable={false}
        style={{
          marginInlineEnd: 4,
          borderRadius: 8,
          color: "#0F262E",
          borderColor: "#0A4A60",
          padding: "3px 6px",
        }}
      >
        {label}
      </Tag>
    );
  };

  return (
    <>
      <Form
        form={form}
        onFinish={onFinish}
        layout="vertical"
        className="flex flex-col p-6! md:p-9! w-full lg:max-w-xl mx-auto z-40 bg-white rounded-2xl shadow-lg"
      >
        <h2 className="text-xl md:text-3xl font-bold text-[#0F262E] md:mb-4">
          {(proFormConfig.title as any)[locale]}
        </h2>

        <Form.Item
          name="full_name"
          label={
            <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
              {(proFormConfig.full_name.label as any)[locale]}
            </span>
          }
          rules={(proFormConfig.full_name.rules as any)[locale]}
        >
          <Input
            size="large"
            placeholder={(proFormConfig.full_name.placeholder as any)[locale]}
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {(proFormConfig.email.label as any)[locale]}
            </span>
          }
          rules={(proFormConfig.email.rules as any)[locale]}
        >
          <Input
            size="large"
            placeholder={(proFormConfig.email.placeholder as any)[locale]}
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="role"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {(proFormConfig.role.label as any)[locale]}
            </span>
          }
          rules={(proFormConfig.role.rules as any)[locale]}
        >
          <Select
            size="large"
            placeholder={(proFormConfig.role.placeholder as any)[locale]}
            className="rounded-xl"
            onChange={handleRoleChange}
          >
            {roleOptions[locale as keyof typeof roleOptions]?.map((opt) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="sport"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {(proFormConfig.sport.label as any)[locale]}
            </span>
          }
          rules={(proFormConfig.sport.rules as any)[locale]}
        >
          <Select
            size="large"
            mode="multiple"
            tagRender={tagRender}
            placeholder={(proFormConfig.sport.placeholder as any)[locale]}
            className="rounded-xl"
            maxTagCount="responsive"
          >
            {sportOptions[locale as keyof typeof sportOptions]?.map((opt) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="comment"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {(proFormConfig.comment.label as any)[locale]}
            </span>
          }
        >
          <TextArea
            size="large"
            rows={4}
            maxLength={300}
            showCount
            placeholder={(proFormConfig.comment.placeholder as any)[locale]}
            className="rounded-xl mb-4"
          />
        </Form.Item>

        <Form.Item>
          <button className="w-full rounded-full text-white font-medium text-xl py-4 bg-[#FCA13B] border-[#FCA13B] cursor-pointer">
            {(proFormConfig.buttons.submit as any)[locale]}
          </button>
        </Form.Item>
      </Form>

      <Modal
        title={
          <div className="text-2xl font-bold text-[#0A4A60]">
            {(proFormConfig.modal.title as any)[locale]}
          </div>
        }
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText={(proFormConfig.modal.okText as any)[locale]}
        cancelText={(proFormConfig.modal.cancelText as any)[locale]}
        okButtonProps={{ disabled: !otherRoleText.trim() }}
      >
        <p className="mb-4 text-[#0F262E] text-xl font-bold">
          {(proFormConfig.modal.description as any)[locale]}{" "}
          <span className="text-[#C73F3F]">*</span>
        </p>
        <TextArea
          rows={3}
          maxLength={100}
          showCount
          value={otherRoleText}
          onChange={(e) => setOtherRoleText(e.target.value)}
          placeholder={(proFormConfig.modal.placeholder as any)[locale]}
          className="rounded-xl mb-8"
        />
      </Modal>
    </>
  );
}
