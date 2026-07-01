import React from "react";

async function page({ params }) {
  const { cmtID, id } = await params;
  console.log(await params);
  return (
    <div>
      blog {id} and comment {cmtID}
    </div>
  );
}

export default page;
