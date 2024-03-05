declare module "*.pug" {
  const content: (context: any) => string;
  export default content;
}