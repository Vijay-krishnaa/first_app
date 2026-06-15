import Link from "next/link";
import React from "react";

function page() {
  return (
    <div>
      All Services
      <br />
      <Link href="/">Home</Link>
      <br />
      <Link href="/services/web-dev">web-dev</Link>
      <br />
      <Link href="/services/full-dev">full-dev</Link>
    </div>
  );
}

export default page;
