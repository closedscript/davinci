import Image from "next/image";
import MyCalendar from "./components/Calendar";

export default function Home() {
  return (
    <div>
      <h1>Mr. Informius</h1>
      <MyCalendar />
    </div>
  );
}
