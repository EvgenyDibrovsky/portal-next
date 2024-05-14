// import Image from "next/image";

import CardsBlogHomeItem from "./CardsBlogListItem";
export default function CardsBlogList() {
  return (
    <ul className="grid grid-cols-3 gap-x-[1.5rem] gap-y-[2rem]">
      <CardsBlogHomeItem />
      <CardsBlogHomeItem />
      <CardsBlogHomeItem />
    </ul>
  );
}
