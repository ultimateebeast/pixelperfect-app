import { HierarchyViewer } from "@/components/HierarchyViewer";
import { extractHierarchy } from "@/utils/figmaToHierarchy";
import figmaJson from "@/sample/sampleFigma.json";

const hierarchy = extractHierarchy(figmaJson.document.children[0]);

export default function HierarchyPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Component Hierarchy</h1>
      <HierarchyViewer hierarchy={hierarchy} />
    </main>
  );
}
