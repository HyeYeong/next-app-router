import Link from "next/link";

type menuType = {
  name: string;
  href: string;
};

const menuArr = [
  {
    name: "HOME",
    href: "/",
  },
  {
    name: "BLOG",
    href: "/blog",
  },
  {
    name: "user1",
    href: "/blog/user1",
  },
] as menuType[];

export default function Navigation() {
  return (
    <nav className="g-nav">
      {menuArr.map((item: menuType, index: number) => (
        <p key={index} className="g-nav-item">
          <Link href={item.href}>{item.name}</Link>
        </p>
      ))}
    </nav>
  );
}
