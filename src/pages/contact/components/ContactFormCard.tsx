export default function ContactFormCard() {
  return (
    <form className="flex flex-col gap-6 p-9 w-full">
      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">
          Full name
        </label>
        <input
          type="text"
          placeholder="Your name"
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Email</label>
        <input
          type="email"
          placeholder="your.email@example.com"
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Subject</label>
        <input
          type="text"
          placeholder="Subject of your message"
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none focus:border-gray-400"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-xl text-[#0F262E] font-bold mb-2">Message</label>
        <textarea
          placeholder="Your message"
          rows={4}
          className="border border-[#0A4A60] rounded-xl py-3 px-4 outline-none resize-none focus:border-gray-400"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-[#FCA13B] text-white py-3 rounded-full font-medium transition cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}
