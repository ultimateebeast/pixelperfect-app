// utils/featureAccess.ts

export const hasAccess = (plan: string, feature: string): boolean => {
  const accessMatrix: Record<string, string[]> = {
    free: ["basic_components", "figma_preview"],
    pro: [
      "basic_components",
      "figma_preview",
      "unlimited_projects",
      "code_export",
      "priority_support",
    ],
    enterprise: [
      "basic_components",
      "figma_preview",
      "unlimited_projects",
      "code_export",
      "priority_support",
      "team_collab",
      "custom_setup",
      "dedicated_support",
      "performance_boost",
    ],
  };

  return accessMatrix[plan]?.includes(feature);
};
