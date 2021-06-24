import { IonDatetime } from '@ionic/angular';
import * as moment from 'moment';

export class Data {
    constructor(public id = 0, public name = '', public key : any = null) { }

    static startTimeVal: number = 0;
    static endTimeVal: number = 0;

    static startDateVal: Date;
    static endDateVal: Date;

    static startDateTimeVal: Date;
    static endDateTimeVal: Date;

    static max: Date;
    static min: Date;

    static times = [
        [1, '00:00'],
        [2, '00:30'],
        [3, '01:00'],
        [4, '01:30'],
        [5, '02:00'],
        [6, '02:30'],
        [7, '03:00'],
        [8, '03:30'],
        [9, '04:00'],
        [10, '04:30'],
        [11, '05:00'],
        [12, '05:30'],
        [13, '06:00'],
        [14, '06:30'],
        [15, '07:00'],
        [16, '07:30'],
        [17, '08:00'],
        [18, '08:30'],
        [19, '09:00'],
        [20, '09:30'],
        [21, '10:00'],
        [22, '10:30'],
        [23, '11:00'],
        [24, '11:30'],
        [25, '12:00'],
        [26, '12:30'],
        [27, '13:00'],
        [28, '13:30'],
        [29, '14:00'],
        [30, '14:30'],
        [31, '15:00'],
        [32, '15:30'],
        [33, '16:00'],
        [34, '16:30'],
        [35, '17:00'],
        [36, '17:30'],
        [37, '18:00'],
        [38, '18:30'],
        [39, '19:00'],
        [40, '19:30'],
        [41, '20:00'],
        [42, '20:30'],
        [43, '21:00'],
        [44, '21:30'],
        [45, '22:00'],
        [46, '22:30'],
        [47, '23:00'],
        [48, '23:30']
    ];

    static hourValues = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23
    ];

    static minuteValues = [0, 30];

    static datePlusOrMinusOne(date: Date, dateFormat: string, isPlus: boolean) {
        let newDate = moment(date, dateFormat).add('days', 1);
        console.log('Moment function');
        console.log(date);
        console.log(dateFormat);
        console.log(newDate);
        if (!isPlus) {
            newDate = moment(date, dateFormat).subtract('days', 1);
        }

        let day = parseInt(newDate.format('DD'));
        let month = parseInt(newDate.format('MM'));
        let year = parseInt(newDate.format('YYYY'));

        month -= 1;

        let newDateObj = new Date(year, month, day);

        return newDateObj;
    }
}
