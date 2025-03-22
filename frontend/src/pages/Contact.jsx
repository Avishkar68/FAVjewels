export default function Contact() {
  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-center px-6 py-12">
      <h1 className="text-4xl font-semibold text-gray-900 mb-6">Contact Us</h1>
      <p className="text-gray-600 mb-4">We’d love to hear from you!</p>

      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 focus:outline-none"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border border-gray-300 rounded-md mb-4 h-32 focus:outline-none"
        ></textarea>
        <button className="w-full bg-gray-900 text-white py-3 rounded-md hover:bg-gray-700 transition">
          Send Message
        </button>
      </form>
    </div>
  );
}
