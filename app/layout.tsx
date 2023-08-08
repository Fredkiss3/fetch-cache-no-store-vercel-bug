export const revalidate = 0;
export const runtime = "edge";
export const fetchCache = "default-cache";
export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
