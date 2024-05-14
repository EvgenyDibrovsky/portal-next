import Image from "next/image";
import Link from "next/link";
export default function Bloggers() {
  return (
    <section className="py-[4rem] bg-neutral-200">
      <div className="container">
        <ul className="flex gap-8">
          <li className="group">
            <Link href="#" target="_blank" className="flex flex-col items-center justify-center gap-4">
              <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={70} height={70} className="rounded-full duration-300 group-hover:scale-110" />
              <span className="duration-300 group-hover:text-sky-600">David Scott</span>
            </Link>
          </li>
          <li className="group">
            <Link href="#" target="_blank" className="flex flex-col items-center justify-center gap-4">
              <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={70} height={70} className="rounded-full duration-300 group-hover:scale-110" />
              <span className="duration-300 group-hover:text-sky-600">David Scott</span>
            </Link>
          </li>
          <li className="group">
            <Link href="#" target="_blank" className="flex flex-col items-center justify-center gap-4">
              <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={70} height={70} className="rounded-full duration-300 group-hover:scale-110" />
              <span className="duration-300 group-hover:text-sky-600">David Scott</span>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
