import Link from 'next/link';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <p>This is layout from Page 1</p>
      <br />
      {children}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <br />
        <Link href="/page1/nested">Page 1 Nested</Link>
        <br />
        <Link href="/page2">Page 2</Link>
        <br />
        <Link href="/page2/nested">Page 2 Nested</Link>
      </div>
    </>
  );
}
