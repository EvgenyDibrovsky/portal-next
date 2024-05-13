"use client";

import React from "react";
import { handleSubmit } from "./actions";
export default function ContactFormFooter() {
  const formAction = React.useRef(handleSubmit).current;

  return (
    <section className="pt-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex">
          <div className="w-8/12"></div>
          <div className="w-4/12 -mb-20 border bg-white border-sky-600 p-5">
            <h3 className="text-center text-black font-medium text-[1.4rem] mb-2">Обратная связь</h3>
            <form action={formAction} method="post" className="flex flex-col gap-4">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Имя:" name="name" required className="border border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" />

              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Email:" name="email" required className="border border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" />

              <label htmlFor="subject"></label>
              <input type="text" id="subject" placeholder="Тема сообщения:" name="subject" required className="border border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" />

              <label htmlFor="message"></label>
              <textarea id="message" placeholder="Текст сообщения:" name="message" required className="border border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"></textarea>

              <button type="submit">Отправить</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
