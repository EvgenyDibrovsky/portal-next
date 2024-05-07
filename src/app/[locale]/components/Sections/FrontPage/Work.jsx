// import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <section className="py-[4rem]">
      <div className="container">
        <h2 className="mb-10">Недавно добавленные агентства по трудоустройству</h2>
        <ul className="grid grid-cols-6 gap-[1rem] h-auto">
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
          <li>
            <Link href="#">
              <h5 className="mb-5">Название компании</h5>
              <div className="bg-neutral-400 w-full h-[10rem] mb-5"></div>
              <div className="flex gap-1">
                <span className="font-medium ml-auto">Польша</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
