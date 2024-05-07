import PageTitle from "./Title";
import SubTitle from "./SubTitle";

export default function Titles({ title, subTitle }) {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-baseline relative mb-2 pb-2 border-b-2 border-sky-500 dark:border-yellow-500">
        <PageTitle title={title} />
        <SubTitle subTitle={subTitle} />
      </div>
    </>
  );
}
