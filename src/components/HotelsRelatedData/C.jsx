import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Overview from "./Overview";
import Rooms from "./Rooms";
export default function C({ data }) {
  const { city } = data;
  return (
    <div
      style={{
        width: "100%",
        background: "white",
        paddingBottom: "3%",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
      }}
    >
      <Tabs
        style={{
          width: "97.5%",
          margin: "auto",
          padding: "1% 0",
          background: "white",
        }}
      >
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Rooms</Tab>
          <Tab>Location</Tab>
          <Tab>Amenities</Tab>
          <Tab>Policies</Tab>
        </TabList>

        <TabPanel>
          <Overview data={data} />
        </TabPanel>
        <TabPanel>
          <Rooms city={city} />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
}
