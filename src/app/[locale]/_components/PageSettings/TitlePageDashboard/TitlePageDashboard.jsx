"use client";

export default function TitlePageDashboard({ title }) {
  return (
    <div className="mb-[2rem]">
      <h1 className="text-titleH1Dashboard font-semibold text-right text-black dark:text-white relative mb-2 pb-2 after:absolute after:bottom-0 after:left-0 after:content-[''] after:block after:w-full after:h-[2px] after:bg-gradient-to-r after:from-sky-600 from-10% after:via-sky-500 via-30% after:to-sky-300 to-80%">
        {title}
      </h1>
    </div>
  );
}
