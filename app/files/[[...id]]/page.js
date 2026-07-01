import React from "react";

async function page({ params }) {
  const { id } = await params;
  console.log(id);
  return (
    <>
      <h1>filepath {id?.join("/")}</h1>
    </>
  );
}

export default page;
