import { useState } from "react";
import { Card, CardContent, Tabs, Tab } from "@mui/material";
import { motion } from "framer-motion";

const TabsComponent =() =>{
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex flex-col items-center p-4">
      <Tabs value={activeTab} onChange={(e, newValue) => setActiveTab(newValue)}>
        <Tab label="Skills" />
        <Tab label="Explore" />
      </Tabs>
      <motion.div
        key={activeTab}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md mt-4"
      >
        {activeTab === 0 ? (
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold">Skills</h2>
              <ul className="mt-2 list-disc list-inside">
                <li>React</li>
                <li>FastAPI</li>
                <li>Machine Learning</li>
                <li>Data Engineering</li>
              </ul>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold">Explore</h2>
              <div className="mt-2 space-y-2">
                <a
                  href="https://linkedin.com/in/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </a>
                <br />
                <a
                  href="https://github.com/your-profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  GitHub
                </a>
              </div>
            </CardContent>
          </Card>
        )}
      </motion.div>
    </div>
  );
}

export default TabsComponent