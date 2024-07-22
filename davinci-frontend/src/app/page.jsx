import Image from "next/image";
import MyCalendar from "./components/Calendar";
import SbbApi from "./components/SbbApi";
import Day from "./components/Day";
import Uhr from "./components/Uhr";


export default function Home() {
  return (
    <div>
      <h1>Mr. Informius</h1>
      <Uhr></Uhr>
      <Day></Day>
      <MyCalendar />
      <SbbApi></SbbApi>
    </div>
  );
}
