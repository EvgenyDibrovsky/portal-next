import Image from "next/image";
import Link from "next/link";
export default function Bloggers() {
  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex">
          <div className="w-4/12"></div>
          <div className="w-8/12">
            <ul className="grid grid-cols-3 gap-2">
              <li className="group">
                <Link href="#" target="_blank" className="flex items-start gap-4">
                  <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={100} height={100} className="rounded-full duration-300 group-hover:scale-110 shadow-md" />
                  <div className="flex flex-col justify-between gap-2 h-full">
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Актуальные новости Польши</p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link href="#" target="_blank" className="flex items-start gap-4">
                  <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={100} height={100} className="rounded-full duration-300 group-hover:scale-110 shadow-md" />
                  <div className="flex flex-col justify-between gap-2 h-full">
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Актуальные новости Польши</p>
                  </div>
                </Link>
              </li>
              <li className="group">
                <Link href="#" target="_blank" className="flex items-start gap-4">
                  <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={100} height={100} className="rounded-full duration-300 group-hover:scale-110 shadow-md" />
                  <div className="flex flex-col justify-between gap-2 h-full">
                    <h5 className="duration-300 group-hover:text-sky-600 text-[1.4rem] font-medium">David Scott</h5>
                    <p className="text-[1.2rem]">Новости Украины</p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
