
const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function countingSundays(firstYear, lastYear) {

    let counting = 0;
    // 1 Jan 1900 was a Monday.
    let remainder = 1;
    for (let year = 1900; year <= lastYear; year++) {
        for (let month = 0; month < daysOfMonths.length; month++) {
            if (year >= firstYear && remainder == 0) {
                counting++;
            }
            let days = daysOfMonths[month];
            if (isLeapYear(year) && month == 1) {
                days++;
                // console.log(year);
            }
            remainder = (remainder + days) % 7;
        }
    }
    return counting;
}

function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            return false;
        }
        return true
    }
    return false;
}

console.log(countingSundays(1901, 2000));
