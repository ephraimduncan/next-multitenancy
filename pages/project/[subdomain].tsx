import React from "react";
import { useRouter } from "next/router";

export default function Subdomain() {
  const router = useRouter();
  const { subdomain } = router.query;

  return <div>Subdomain: {subdomain}</div>;
}
