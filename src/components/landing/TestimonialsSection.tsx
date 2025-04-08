
const testimonials = [
  {
    name: "Aman Verma",
    feedback:
      "PixelPerfect made our Figma-to-code process 5x faster. The code quality is amazing!",
  },
  {
    name: "Sneha Kapoor",
    feedback:
      "The responsive design is just flawless. Saved me hours of manual CSS tweaking.",
  },
  {
    name: "Rajesh Rathi",
    feedback:
      "Every section matched our Figma file perfectly. This tool is a dream for frontend devs.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-blue-400">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">What Developers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition">
              <p className="text-gray-700 italic">“{testimonial.feedback}”</p>
              <h4 className="mt-4 font-semibold text-blue-600">
                — {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
