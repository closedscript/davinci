import Image from "next/image";
import MyCalendar from "./components/Calendar";
import SbbApi from "./components/SbbApi";
import Uhr from "./components/Uhr";
import CoinApi from "./components/CoinApi";

export default function Home() {
  return (
    <div>
      <h1>Mr. Informius</h1>
      <Uhr></Uhr>
      <SbbApi></SbbApi>
      <CoinApi/>
      <MyCalendar />
    </div>
  );
}
