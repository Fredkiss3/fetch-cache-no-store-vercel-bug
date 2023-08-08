export const revalidate = 0;

export default async function Home() {
  const baseURL = `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/time?qs=2`;
  const protocol = baseURL.startsWith("localhost") ? "http" : "https";

  const fetchURL = (await fetch(
    `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/time?qs=1`,
    {
      cache: "no-store",
    }
  ).then((r) => r.json())) as { time: number };

  const fetchRequest = (await fetch(
    new Request(
      `${protocol}://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/time?qs=2`,
      {
        cache: "no-store",
      }
    )
  ).then((r) => r.json())) as { time: number };

  return (
    <main>
      <h1>Fetch cache: no-store bug</h1>
      <h2>Fetch (with URL): {fetchURL.time}</h2>
      <h2>Fetch (with Request Object): {fetchRequest.time} </h2>
    </main>
  );
}
