import { Button } from "@/src/components/ui/button";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Button asChild variant={"link"}>
            <Link href="/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"link"}>
            <Link href="/register">Register</Link>
          </Button>
        </li>
        <li>
          <Button asChild variant={"link"}>
            <Link href="/private">Private Page</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}
