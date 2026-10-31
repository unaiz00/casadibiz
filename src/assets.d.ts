declare module "*.asset.json" {
  const content: { url: string };
  export default content;
}

declare module "*/lovable-error-reporting" {
  export function reportLovableError(...args: unknown[]): void;
}

declare module "../lib/lovable-error-reporting" {
  export function reportLovableError(...args: unknown[]): void;
}

declare module "@/lib/lovable-error-reporting" {
  export function reportLovableError(...args: unknown[]): void;
}

declare module "*.css?url" {
  const content: string;
  export default content;
}
