"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var schedule = __importStar(require("node-schedule"));
var constants_1 = require("./constants");
var jobScheduler = function (date) {
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth();
    var day = date.getUTCDate();
    var hour = constants_1.CRON_JOB_TIME.hour, minute = constants_1.CRON_JOB_TIME.minute, second = constants_1.CRON_JOB_TIME.second;
    var jobDate = new Date(year, month, day, hour, minute, second);
    schedule.scheduleJob(jobDate, function () {
        console.log("Incoming Date: " + date);
        console.log("Job Date: " + jobDate);
        console.log("Executed Date: " + new Date);
    });
};
exports.default = jobScheduler;
