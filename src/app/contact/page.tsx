// app/contact/page.tsx
export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-12 flex flex-col items-center justify-center bg-gray-50 dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-4">📩 Contact Us</h1>
        <p className="mb-6 text-neutral-300">
          Interested in the <strong>Enterprise</strong> plan? We&apos;d love to talk!
          Fill out the form below or email us directly.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-2 rounded bg-white/20 backdrop-blur text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-white/20 backdrop-blur text-white focus:outline-none"
          />
          <textarea
            placeholder="Tell us what you're looking for..."
            rows={4}
            className="px-4 py-2 rounded bg-white/20 backdrop-blur text-white focus:outline-none"></textarea>
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-2 rounded text-white font-semibold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
