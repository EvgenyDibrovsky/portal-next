import Titles from "../components/PageSettings/Titles";
import { useTranslations } from "next-intl";
import { Link } from "../../../navigation";
import BlogSwiper from "./blogSwiper";
import Image from "next/image";
import { BsEyeFill, BsFillHeartFill, BsWechat } from "react-icons/bs";
export default function Blogs() {
  const t = useTranslations("pages.about");

  return (
    <section className="py-[2.5rem]">
      <div className="container">
        <Titles title="Блог" subTitle="Подзаголовок" />
        <div className="flex gap-[2rem]">
          <div className="w-9/12">
            <BlogSwiper />
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Недано добавленные
            </h4>
            <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem]">
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Самые просматриваемые
            </h4>
            <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem]">
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <h4 className="my-[2rem] after:content-[''] after:block after:mt-[0.3rem] after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
              Самые Коментируемые
            </h4>
            <ul className="grid grid-cols-2 gap-x-[1.5rem] gap-y-[2rem]">
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-1.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-2.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="shadow-md dark:shadow-white duration-300 hover:shadow-sky-600 dark:hover:shadow-sky-500 group">
                <div className="relative w-full h-[20rem] bg-neutral-200 ">
                  <Image src="/images/demo/demo-post-3.jpg" alt="Example Image" layout="fill" className="object-cover duration-300 group-hover:grayscale" />
                  <div className="absolute top-0 right-0 py-1 px-2 text-white bg-slate-900/50 text-[0.8rem]">08.05.2024</div>
                </div>
                <div className="px-3 py-6">
                  <Link href="/blog-post">
                    <h3 className="mb-4 duration-300 group-hover:text-sky-600 dark:group-hover:text-sky-500">Заголовок поста</h3>
                  </Link>
                  <p>Краткое описание поста... </p>
                  <div className="mt-8 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <Image src="/images/demo/demo-persone.jpg" alt="Example Image" width={30} height={30} className="rounded-full" />
                      <span>David Scott</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <BsEyeFill className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsFillHeartFill className="text-[0.9rem]" />
                        <span>5k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BsWechat className="text-[1rem]" />
                        <span>5k</span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="w-3/12">sidebar</div>
        </div>
      </div>
    </section>
  );
}
