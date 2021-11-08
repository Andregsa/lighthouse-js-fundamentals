const talkingCalendar = function (date) {
  // Your code here

  const dateArray = date.split("/");
  const year = dateArray[0];
  const month = dateArray[1];
  let day = dateArray[2];

  const monthObj = {
    "01": "January",
    "02": "February",
    "03": "March",
    "04": "April",
    "05": "May",
    "06": "June",
    "07": "July",
    "08": "August",
    "09": "September",
    10: "October",
    11: "November",
    12: "December",
  };

  if (day === "01") day += "st";
  else if (day === "02") day += "nd";
  else if (day === "03") day += "rd";
  else day += "th";

  return `${monthObj[month]} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
