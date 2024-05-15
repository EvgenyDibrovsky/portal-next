"use client";

import React from "react";
import { handleSubmit } from "./actions";
import AccordionFooter from "../../Accordion/AccordionFooter";
export default function ContactFormFooter() {
  const formAction = React.useRef(handleSubmit).current;

  return (
    <section className="py-[4rem] bg-neutral-100">
      <div className="container">
        <div className="flex gap-[2rem]">
          <div className="w-8/12">
            <AccordionFooter />
          </div>
          <div className="relative z-10 w-4/12 -mb-[10rem] border bg-white border-sky-600 p-5 flex flex-col justify-around">
            <h3 className="text-center text-black font-medium text-[1.4rem] mb-2">Обратная связь</h3>
            <form action={formAction} method="post" className="flex flex-col gap-4 bg-white">
              <label htmlFor="name"></label>
              <input type="text" id="name" placeholder="Имя:" name="name" required className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" />

              <label htmlFor="email"></label>
              <input type="email" id="email" placeholder="Email:" name="email" required className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0" />

              <label htmlFor="subject"></label>
              <input
                type="text"
                id="subject"
                placeholder="Тема сообщения:"
                name="subject"
                required
                className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
              />

              <label htmlFor="message"></label>
              <textarea
                id="message"
                placeholder="Текст сообщения:"
                name="message"
                required
                className="border border-neutral-200 focus:border-sky-600 py-[1rem] px-[1.5rem] w-full focus:outline-0"
              ></textarea>
              <button type="submit" className="w-full h-[3rem] border border-sky-600  duration-300 bg-sky-600  hover:bg-white hover:text-sky-600 text-white text-[1.3rem]">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
