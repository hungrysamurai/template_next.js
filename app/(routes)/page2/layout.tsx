export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>This is layout from page2</p>
      {children}
    </>
  );
}
