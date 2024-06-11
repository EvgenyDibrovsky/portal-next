import { Link } from "../../../../../navigation";

export default function DashboardMainMenu() {
  return (
    <nav className="flex flex-col items-start gap-4">
      <Link href="/dashboard" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        Dashboard
      </Link>
      <Link href="/dashboard/public" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        Public data
      </Link>
      <Link href="/dashboard/business" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        My business
      </Link>
      <Link href="/dashboard/blogs" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        My blogs
      </Link>
      <Link href="/dashboard/payments" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        My payments
      </Link>
      <Link href="/dashboard/setting" className="w-full px-[1rem] py-[0.5rem] border border-sky-600 duration-300 hover:bg-sky-600 hover:text-white">
        My setting
      </Link>
    </nav>
  );
}
