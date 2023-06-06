import { Metadata } from "next";

export const metadata: Metadata = {
  title: "This is blog page",
  description: "blog description",
};

export default function Blog() {
  return (
    <div className="flex flex-col items-start justify-center gap-8 md:flex-row">
      hello, this is blog page
    </div>
  );
}
