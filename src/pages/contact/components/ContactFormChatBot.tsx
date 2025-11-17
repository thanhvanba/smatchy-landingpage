import { useState } from "react";
import { useContact } from "../../../hooks/useContact";
import type { ContactForm } from "../../../services/types/contact";

export default function ContactFormChatBot() {
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
    <form onSubmit={onSubmit} className="flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-3">
        <label className="[#DADEDF] text-[#0F262E] mb-2">Full name</label>
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="border border-[#DADEDF] bg-white rounded-xl py-3 px-4 outline-none focus:border-[#DADEDF]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="[#DADEDF] text-[#0F262E] mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your email"
          required
          className="border border-[#DADEDF] bg-white rounded-xl py-3 px-4 outline-none focus:border-[#DADEDF]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="[#DADEDF] text-[#0F262E] mb-2">Company</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Your company"
          required
          className="border border-[#DADEDF] bg-white rounded-xl py-3 px-4 outline-none focus:border-[#DADEDF]"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="[#DADEDF] text-[#0F262E] mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message"
          rows={4}
          required
          className="border border-[#DADEDF] bg-white rounded-xl py-3 px-4 outline-none resize-none focus:border-[#DADEDF]"
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
