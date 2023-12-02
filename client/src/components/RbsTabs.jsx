import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import classes from "../assets/Styles/Tabs.module.css";

const RbsTabs = () => {
  return (
    <>
      <Tabs className={classes.TabsContainer}>
        <TabList>
          <Tab>Rent</Tab>
          <Tab>Buy</Tab>
          <Tab>Sell</Tab>
        </TabList>

        <TabPanel
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <input className={classes.tabsInput} />
          <button className={classes.tabsButton}>Rent Now!</button>
        </TabPanel>

        <TabPanel
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <input className={classes.tabsInput} />
          <button className={classes.tabsButton}>Buy Now!</button>
        </TabPanel>

        <TabPanel
          style={{
            background: "white",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <span className={classes.tabsSpan}>
            Increase the reach of your property and get higher bids!
          </span>
          <button className={classes.tabsButton}>List Now!</button>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default RbsTabs;
