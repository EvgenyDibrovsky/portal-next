import { Link } from "../../../../navigation";

export default function AuthHeader() {
  return (
    <ul className="flex gap-2 ">
      <li>
        <Link href="/register" className="duration-300 text-black hover:text-sky-400">
          Регистрация
        </Link>
      </li>
      <li>
        <Link href="/login" className="duration-300 text-black hover:text-sky-400">
          Логин
        </Link>
      </li>
    </ul>
  );
}
