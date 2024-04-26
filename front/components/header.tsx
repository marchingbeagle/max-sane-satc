import Link from "next/link";
import { SignOutButton } from "./SignOutButton";
import { getServerSession } from "next-auth";

const Header = async () => {
  const session = await getServerSession();

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Link className="flex items-center gap-2" href="/Index">
        <span className="text-lg font-bold">MaxSane</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/Index">
          Home
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/public">
          Pagina Inicial
        </Link>
        {session ? (
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/Menu"
          >
            Menu
          </Link>
        ) : (
          <Link
            className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            href="/private"
          >
            Login
          </Link>
        )}
        {session && (
          <li>
            <SignOutButton />
          </li>
        )}
      </nav>
    </header>
  );
};

export { Header };
