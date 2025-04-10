import cron from "node-cron";
import { configDotenv } from "dotenv";
import axios from "axios";

configDotenv();

const url = process.env.ORIGIN;

export const reStart = async () => {
  cron.schedule(
    "*/14 * * * *",
    async () => {
      try {
        const response = await axios.get(`${url}/api/utils/self`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    {
      timezone: "Asia/Kolkata",
    }
  );
};
