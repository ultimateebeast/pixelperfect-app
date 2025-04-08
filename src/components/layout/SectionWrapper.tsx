// 📁 components/layout/SectionWrapper.tsx
export default function SectionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="px-4 md:px-8 lg:px-16 py-10">{children}</section>;
}
