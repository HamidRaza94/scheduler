import * as schedule from 'node-schedule';

import { CRON_JOB_TIME } from './constants';

const jobScheduler = (date: Date) => {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  const { hour, minute, second } = CRON_JOB_TIME;

  const jobDate = new Date(year, month, day, hour, minute, second);

  schedule.scheduleJob(jobDate, () => {
    console.log(`Incoming Date: ${date}`);
    console.log(`Job Date: ${jobDate}`);
    console.log(`Executed Date: ${new Date}`);
  });
}

export default jobScheduler;
