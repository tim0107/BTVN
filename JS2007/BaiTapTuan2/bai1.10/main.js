function readToday(d, m, y) {
    let months = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    let day30 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"];
    let day31 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
    let day29 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29"];
    let day28 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28"];

    let result = "";

    if (y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0)) {
        if ((m == 9 || m == 4 || m == 6 || m == 11) && d <= 30 && m <= 12) {
            result += " Ngày " + day30[d] + "/" + months[m] + "/" + y;
        } else if ((m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && d <= 31 && m <= 12) {
            result += " Ngày " + day31[d] + "/" + months[m] + "/" + y;
        } else if (m == 2 && d <= 29) {
            result += " Ngày " + day29[d] + "/" + months[m] + "/" + y;
        } else {
            result = "Sai Ngay";
        }
    } else {
        if ((m == 9 || m == 4 || m == 6 || m == 11) && d <= 30 && m <= 12) {
            result += " Ngày " + day30[d] + "/" + months[m] + "/" + y;
        } else if ((m == 1 || m == 3 || m == 5 || m == 7 || m == 8 || m == 10 || m == 12) && d <= 31 && m <= 12) {
            result += " Ngày " + day31[d] + "/" + months[m] + "/" + y;
        } else if (m == 2 && d <= 28) {
            result += " Ngày " + day28[d] + "/" + months[m] + "/" + y;
        } else {
            result = "Sai Ngay";
        }
    }

    return result;
}

function readNextDay(d, m, y) {
    let namNhuan = (y % 400 === 0 || (y % 100 !== 0 && y % 4 === 0));

    let maxDays = 31;
    if (m === 2) {
        maxDays = namNhuan ? 29 : 28;
    } else if (m === 4 || m === 6 || m === 9 || m === 11) {
        maxDays = 30;
    }

    let nextDay = d + 1;
    let nextMonth = m;
    let nextYear = y;

    if (nextDay > maxDays) {
        nextDay = 1;
        nextMonth += 1;
        if (nextMonth > 12) {
            nextMonth = 1;
            nextYear += 1;
        }
    }

    let result = `Ngày ${nextDay}/${nextMonth}/${nextYear}`;

    return result;
}



console.log(readToday(12, 11, 1996)); 
console.log("Ngày mai là " + readNextDay(29, 2, 1996)); 










