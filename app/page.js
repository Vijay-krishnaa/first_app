import Image from "next/image";

export default async function Home({ params, searchParams }) {
  console.log(await params);
  console.log(await searchParams);
  return (
    <>
      <h1>hii</h1>
    </>
  );
}
