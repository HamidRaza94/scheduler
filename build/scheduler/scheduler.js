"use strict";
// import * as schedule from 'node-schedule';
Object.defineProperty(exports, "__esModule", { value: true });
var scheduler = function (date) {
    console.log('Incoming Date: ', date);
    // console.log('> ', date.getDate())
    console.log('>> ', date.getUTCDate());
    console.log('>>> ', date.getFullYear());
    console.log('>>>> ', date.getUTCMonth());
    // console.log('>>>>> ', date.getUTCDay());
    var jobDate = ;
    // schedule.scheduleJob(date, () => {
    //   console.log('The answer to life, the universe, and everything!', new Date());
    // });
};
exports.default = scheduler;
