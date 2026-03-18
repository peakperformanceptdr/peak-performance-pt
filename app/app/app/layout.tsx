export const metadata = {
  title: "Peak Performance PT",
  description: "Mobile Physical Therapy and Dry Needling",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
