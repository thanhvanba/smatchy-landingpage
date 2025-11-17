import { useState } from "react";
import { useContact } from "../../../hooks/useContact";
import type { ContactForm } from "../../../services/types/contact";

export default function ContactFormCard() {
  const [formData, setFormData] = useState<ContactForm>({
    full_name: "",
    email: "",
    subject: "",
    message: "",
    status_contact: "new",
  });
  const [loading, setLoading] = useState(false);
  const mutation = useContact();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    mutation.mutate(formData, {
      onSuccess: () => {
        alert("Sent successfully!");
        setFormData({
          full_name: "",
          email: "",
          subject: "",
          message: "",
          status_contact: "new",
        });
        setLoading(false);
      },
      onError: () => {
        alert("Failed to send");
        setLoading(false);
      },
    });
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 p-9 w-full">
      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">
          Full name
        </label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          required
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject of your message"
          required
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={4}
          required
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none resize-none focus:border-gray-400"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#FCA13B] text-white py-3 rounded-full font-medium transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
