import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "This is blog/parameter page",
  description: "blog/parameter description",
};

export default async function Page({
  params,
}: {
  params: { username: string };
}) {
  const { username } = params;
  return (
    <article>
      <section className="border-t-2">
        <header>hello, {username}</header>
        <h3>Comments</h3>
      </section>
    </article>
  );
}
