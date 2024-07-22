import Image from "next/image";
import MyCalendar from "./components/Calendar";
import SbbApi from "./components/SbbApi";
import Card from "./components/Card";
import { Calendar } from "antd";
import styles from './page.module.css';

const Page = () => {
  return (
    <body>
      
      <div className={styles.pageContainer}>
          <h1 className={styles.title}>Mr. Informius</h1>
          <div className={styles.cardContainer}>
              <Card>
                  <SbbApi />
              </Card>
              <Card>
                  <MyCalendar />
              </Card>
          </div>
      </div>
      </body>
  );
};

export default Page;