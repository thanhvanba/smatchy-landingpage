import { useState } from "react";
import { Form, Input, Select, message, Modal, Tag } from "antd";
import {
  proFormConfig,
  roleOptions,
  sportOptions,
} from "../../../config/formConfig";

const { TextArea } = Input;
const { Option } = Select;

export default function ProForm() {
  const [form] = Form.useForm();
  // const [loading, setLoading] = useState(false);
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
      message.warning("Please describe your role");
    }
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
    form.setFieldValue("role", undefined);
    setOtherRoleText("");
  };

  const onFinish = (_values: any) => {
    // setLoading(true);
    setTimeout(() => {
      message.success("Registration submitted!");
      form.resetFields();
      setOtherRoleText("");
      // setLoading(false);
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
          Pre-register to become a Smatchy Pro
        </h2>

        <Form.Item
          name="full_name"
          label={
            <span className="text-sm md:text-base lg:text-xl font-bold text-[#0F262E]">
              {proFormConfig.full_name.label}
            </span>
          }
          rules={proFormConfig.full_name.rules as any}
        >
          <Input
            size="large"
            placeholder={proFormConfig.full_name.placeholder}
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="email"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {proFormConfig.email.label}
            </span>
          }
          rules={proFormConfig.email.rules as any}
        >
          <Input
            size="large"
            placeholder={proFormConfig.email.placeholder}
            className="rounded-xl"
          />
        </Form.Item>

        <Form.Item
          name="role"
          label={
            <span className="text-xl font-bold text-[#0F262E]">
              {proFormConfig.role.label}
            </span>
          }
          rules={proFormConfig.role.rules as any}
        >
          <Select
            size="large"
            placeholder={proFormConfig.role.placeholder}
            className="rounded-xl"
            onChange={handleRoleChange}
          >
            {roleOptions.map((opt) => (
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
              {proFormConfig.sport.label}
            </span>
          }
          rules={proFormConfig.sport.rules as any}
        >
          <Select
            size="large"
            mode="multiple"
            tagRender={tagRender}
            placeholder={proFormConfig.sport.placeholder}
            className="rounded-xl"
            maxTagCount="responsive"
          >
            {sportOptions.map((opt) => (
              <Option key={opt.value} value={opt.value}>
                {opt.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          name="comment"
          label={
            <span className="text-xl font-bold text-[#0F262E]">Comment</span>
          }
        >
          <TextArea
            size="large"
            rows={4}
            maxLength={300}
            showCount
            placeholder="Tell us more about your experience, goals, or what you expect from Smatchy Pro"
            className="rounded-xl mb-4"
          />
        </Form.Item>

        <Form.Item>
          <button className="w-full rounded-full text-white font-medium text-xl py-4 bg-[#FCA13B] border-[#FCA13B]">
            Submit
          </button>
        </Form.Item>
      </Form>

      <Modal
        title={
          <div className="text-2xl font-bold text-[#0A4A60]">Other Role</div>
        }
        open={isModalOpen}
        onOk={handleModalOk}
        onCancel={handleModalCancel}
        okText="Submit"
        cancelText="Cancel"
        okButtonProps={{ disabled: !otherRoleText.trim() }}
      >
        <p className="mb-4 text-[#0F262E] text-xl font-bold">
          Describe your role <span className="text-[#C73F3F]">*</span>
        </p>
        <TextArea
          rows={3}
          maxLength={100}
          showCount
          value={otherRoleText}
          onChange={(e) => setOtherRoleText(e.target.value)}
          placeholder="Please specify your role (e.g., Club Manager, Instructor)"
          className="rounded-xl mb-8"
        />
      </Modal>
    </>
  );
}
