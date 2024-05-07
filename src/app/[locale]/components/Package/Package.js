const Package = () => {
  return (
    <ul className="grid grid-cols-3 gap-14 mt-20">
      <li className="p-5 bg-white dark:bg-darkBgCads shadow-lg hover:shadow-sky-500 dark:shadow-yellow-500 group">
        <div class="border-b border-neutral-300 pb-4 my-2">
          <h3 className="text-center font-semibold text-[1.3rem] text-black dark:text-white tracking-[0.05rem] mb-1">Base</h3>
          <p class="text-center text-[0.8rem]">Тестовый период</p>
        </div>
        <div class="flex justify-center">
          <div class="inline-flex justify-center items-baseline gap-2 mb-2">
            <p class="text-[1.8rem] text-green-600 font-semibold">1000</p>
            <p class="text-[1.2rem] text-green-600">pln</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 1</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 2</p>
            <p className="text-[1.25rem] text-black dark:text-white">4</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 3</p>
            <p className="text-[1.25rem] text-black dark:text-white">35</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 4</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 5</p>
            <p className="text-[1.25rem] text-black dark:text-white">7</p>
          </li>
        </ul>
        <button className="package-btn  group-hover:bg-sky-500 dark:group-hover:bg-yellow-500 group-hover:text-white dark:group-hover:text-black">Оформить подписку</button>
      </li>

      <li className="p-5 bg-white dark:bg-darkBgCads shadow-lg hover:shadow-sky-500 dark:shadow-yellow-500 group scale-110">
        <div class="border-b border-neutral-300 pb-4 my-2">
          <h3 className="text-center font-semibold text-[1.3rem] text-black dark:text-white tracking-[0.05rem] mb-1">Standard</h3>
          <p class="text-center text-[0.8rem]">После тестового периода</p>
        </div>
        <div class="flex justify-center">
          <div class="inline-flex justify-center items-baseline gap-2 mb-2">
            <p class="text-[1.8rem] text-green-600 font-semibold">2000</p>
            <p class="text-[1.2rem] text-green-600">pln</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 1</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 2</p>
            <p className="text-[1.25rem] text-black dark:text-white">4</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 3</p>
            <p className="text-[1.25rem] text-black dark:text-white">35</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 4</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 5</p>
            <p className="text-[1.25rem] text-black dark:text-white">7</p>
          </li>
        </ul>
        <button className="package-btn  group-hover:bg-sky-500 dark:group-hover:bg-yellow-500 group-hover:text-white dark:group-hover:text-black">Оформить подписку</button>
      </li>

      <li className="p-5 bg-white dark:bg-darkBgCads shadow-lg hover:shadow-sky-500 dark:shadow-yellow-500 group">
        <div class="border-b border-neutral-300 pb-4 my-2">
          <h3 className="text-center font-semibold text-[1.3rem] text-black dark:text-white tracking-[0.05rem] mb-1">Premium</h3>
          <p class="text-center text-[0.8rem]">Для опытных пользователей</p>
        </div>
        <div class="flex justify-center">
          <div class="inline-flex justify-center items-baseline gap-2 mb-2">
            <p class="text-[1.8rem] text-green-600 font-semibold">3000</p>
            <p class="text-[1.2rem] text-green-600">pln</p>
          </div>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 1</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 2</p>
            <p className="text-[1.25rem] text-black dark:text-white">4</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 3</p>
            <p className="text-[1.25rem] text-black dark:text-white">35</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 4</p>
            <p className="text-[1.25rem] text-black dark:text-white">2</p>
          </li>
          <li className="flex justify-between border-b pb-1">
            <p className="text-[1.25rem] text-black dark:text-white">текст 5</p>
            <p className="text-[1.25rem] text-black dark:text-white">7</p>
          </li>
        </ul>
        <button className="package-btn  group-hover:bg-sky-500 dark:group-hover:bg-yellow-500 group-hover:text-white dark:group-hover:text-black">Оформить подписку</button>
      </li>
    </ul>
  );
};

export default Package;
