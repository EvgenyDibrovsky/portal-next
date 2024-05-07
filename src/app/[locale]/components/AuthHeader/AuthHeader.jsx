import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";

const AuthHeader = () => {
  return (
    <Link href="http://localhost:1337/admin/auth/login" className="text-iconHeader  text-black dark:text-white transition-all duration-500  hover:text-sky-500 dark:hover:text-yellow-500">
      <BsPersonCircle />
    </Link>
  );
};

export default AuthHeader;
