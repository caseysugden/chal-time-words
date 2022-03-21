var converter = require('number-to-words');

function convert(time) {
    timeArray = time.split(":");
    hour = +timeArray[0];
    minute = +timeArray[1];

    if ((hour === 0) && (minute === 0)) {
        return 'midnight';
    } else if ((hour === 12) && (minute === 0)) {
        return 'noon';
    } else if ((minute === 0) && (hour <= 12)) {
        return `${converter.toWords(hour)} o'clock am`;
    } else if ((minute === 0) && (hour > 12)) {
        return `${converter.toWords(hour - 12)} o'clock pm`;
    } else if ((hour <= 12) && (minute < 10)) {
        return `${converter.toWords(hour)} oh ${converter.toWords(minute)} am`;
    } else if ((hour > 12) && (minute < 10)) {
        return `${converter.toWords(hour - 12)} oh ${converter.toWords(minute)} pm`;
    } else if ((hour <= 12) && (minute >= 10)) {
        return `${converter.toWords(hour)} ${converter.toWords(minute)} am`;
    } else if ((hour > 12) && (minute >= 10)) {
        return `${converter.toWords(hour - 12)} ${converter.toWords(minute)} pm`;
    } else {
        return "Please enter a valid time";
    }
}

console.log(convert("23:09"));