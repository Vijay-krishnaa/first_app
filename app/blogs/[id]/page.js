import React from "react";

async function page({ params }) {
  // console.log(await params);
  const { id } = await params;
  return <div>page {id}</div>;
}

export default page;
