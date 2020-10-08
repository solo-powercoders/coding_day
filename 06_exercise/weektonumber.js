function weekNumberstoWords(){
    var dayName= [];
    var dayNumber= [];
    dayNumber= prompt("Enter the numbers");
    switch (dayNumber){
        case 1:
            dayName= "Monday";
        break;
        case 2:
            dayName= "Tuesday";
        break;
        case 3:
            dayName= "Wensday";
        break;
        case 4:
            dayName= "Thursday";
        break;
        case 5:
            dayName= "Friday";
        break;
        case 6:
            dayName= "Saturday";
        break;
        case 7:
            dayName= "Sunday";
        break;
        default:
            dayName="Nothing";
        break;
    }
    return dayName;
}

weekNumberstoWords();