export function generateSmartComponentName(name: string, type: string): string {
  const lower = name?.toLowerCase() || "";

  if (lower.includes("hero")) return "HeroSection";
  if (lower.includes("footer")) return "Footer";
  if (lower.includes("header")) return "Header";
  if (lower.includes("nav")) return "Navbar";
  if (lower.includes("cta") || lower.includes("call")) return "CallToAction";
  if (lower.includes("card")) return "ProductCard";
  if (lower.includes("checkout")) return "Checkout";
  if (lower.includes("form")) return "Form";
  if (lower.includes("input")) return "InputField";
  if (lower.includes("button")) return "Button";

  return type === "FRAME" || type === "GROUP"
    ? `Component${Math.floor(Math.random() * 1000)}`
    : name;
}
