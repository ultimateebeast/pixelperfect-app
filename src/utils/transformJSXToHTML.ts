// utils/transformJSXToHTML.ts
export function transformJSXToHTML(jsx: string): string {
  return jsx
    .replace(/className=/g, "class=") 
    .replace(/<>|<\/>/g, "") 
    .replace(/&nbsp;/g, " ") 
    .replace(/\{(.*?)\}/g, "$1") 
    .trim();
}
