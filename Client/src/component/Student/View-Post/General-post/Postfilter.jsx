import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  Navbar,
  TabPanel,
} from "@material-tailwind/react";
import {
  HashtagIcon,
  AcademicCapIcon,
  CalendarDaysIcon,
  BellIcon,
} from "@heroicons/react/24/solid";
import Posts from "./Posts";

function Postfilter() {
  const data = [
    {
      label: "General",
      value: "General",
      icon: HashtagIcon,
      desc: `It really matters and then like it really doesn't matter.
      What matters is the people who are sparked by it. And the people
      who are like offended by it, it doesn't matter.`,
    },
    {
      label: "Clubs",
      value: "Clubs",
      icon: AcademicCapIcon,
      desc: <Posts />,
    },
    {
      label: "Events",
      value: "Events",
      icon: CalendarDaysIcon,
      desc: <Posts />,
    },
    {
      label: "Class",
      value: "Class",
      icon: BellIcon,
      desc: <Posts />,
    },
  ];
  return (
    <Tabs value="dashboard" className="mt-2 overflow-hidden">
      <div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
        <Navbar className="sticky top-0 z-10 h-max max-w-full px-4 py-2 lg:px-8 lg:py-4">
          <TabsHeader className="">
            {data.map(({ label, value, icon }) => (
              <Tab key={value} value={value}>
                <div className="flex items-center gap-0">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
        </Navbar>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </div>
    </Tabs>
  );
}
export default Postfilter;
