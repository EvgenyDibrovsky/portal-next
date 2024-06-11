import DashboardMainMenu from "../DashboardMainMenu/DashboardMainMenu";
import ClockDate from "../../ClockDate/ClockDate";
export default function DashboardSidebar({ onChangeSection }) {
  return (
    <div>
      <div className="w-full flex items-center h-[4rem]">
        <ClockDate />
      </div>
      <DashboardMainMenu onChangeSection={onChangeSection} />
    </div>
  );
}
