import Link from "next/link";
import AssideMenu from "./AssideMenu";
import Cart from "./Cart";

export default function Header() {
  const links = [
    {
      name: "Догляд",
      path: "/",
    },
    {
      name: "Макіяж",
      path: "/",
    },
    {
      name: "Про нас",
      path: "/",
    },
  ];
  return (
    <header className="w-full p-2 flex flex-col gap-y-4 border-b border-slate-100 bg-white absolute top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <AssideMenu />
          <Cart />
        </div>
        <h4>LOGO</h4>
        <div className="flex items-center gap-x-2 ">
          <button
            type="button"
            className="hover:bg-slate-100 rounded-md p-1 invisible transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a2b4ca"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="hover:bg-slate-100 rounded-md p-1 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#a2b4ca"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
      <nav className="flex items-center justify-center gap-x-4">
        {links.map((item, index) => {
          return (
            <Link
              key={index}
              href={item.path}
              className="text-sm font-semibold text-slate-600 hover:underline"
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
