import Image from "next/image";
import MyCalendar from "./components/Calendar";
import SbbApi from "./components/SbbApi";


export default function Home() {
  return (
    <div>
      <h1>Mr. Informius</h1>
      <MyCalendar />
      <SbbApi></SbbApi>
    </div>
  );
}