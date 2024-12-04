
document.getElementById("myButton").addEventListener('click',myWindow)

function validateEmail(emailid) {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(emailid);
}

function myWindow()
{
    visitorName = document.getElementById("inputName").value;
    emailObj = document.getElementById("userEmail")
    
    emailObj.setCustomValidity(" ")
    if (emailObj.validity.valueMissing) {
        emailObj.setCustomValidity("Email is required.")
        emailObj.reportValidity()
        return
    } else if (!validateEmail(emailObj.value)) {
        emailObj.setCustomValidity("Email is not in the correct format (eg: xxx@yyy.com)")
        emailObj.reportValidity()
        return
    }
     
    mondayBreakFast = document.getElementById("MondayBreakfast")
    mondayBreakFastOption = mondayBreakFast.options[mondayBreakFast.selectedIndex].text
    mondaySnack = document.getElementById("MondaySnack")
    mondaySnackOption = mondaySnack.options[mondaySnack.selectedIndex].text
    mondayLunch = document.getElementById("MondayLunch")
    mondayLunchOption = mondayLunch.options[mondayLunch.selectedIndex].text
    mondaySnack2 = document.getElementById("MondaySnack2")
    mondaySnack2Option = mondaySnack2.options[mondaySnack2.selectedIndex].text
    mondayDinner = document.getElementById("MondayDinner")
    mondayDinner = mondayDinner.options[mondayDinner.selectedIndex].text
    
    tuesdayBreakFast = document.getElementById("TuesdayBreakfast")
    tuesdayBreakFastOption = tuesdayBreakFast.options[tuesdayBreakFast.selectedIndex].text
    tuesdaySnack = document.getElementById("TuesdaySnack")
    tuesdaySnackOption = tuesdaySnack.options[tuesdaySnack.selectedIndex].text
    tuesdayLunch = document.getElementById("TuesdayLunch")
    tuesdayLunchOption = tuesdayLunch.options[tuesdayLunch.selectedIndex].text
    tuesdaySnack2 = document.getElementById("TuesdaySnack2")
    tuesdaySnack2Option = tuesdaySnack2.options[tuesdaySnack2.selectedIndex].text
    tuesdayDinner = document.getElementById("TuesdayDinner")
    tuesdayDinner = tuesdayDinner.options[tuesdayDinner.selectedIndex].text

    wednesdayBreakFast = document.getElementById("WednesdayBreakfast")
    wednesdayBreakFastOption = wednesdayBreakFast.options[wednesdayBreakFast.selectedIndex].text
    wednesdaySnack = document.getElementById("WednesdaySnack")
    wednesdaySnackOption = wednesdaySnack.options[wednesdaySnack.selectedIndex].text
    wednesdayLunch = document.getElementById("WednesdayLunch")
    wednesdayLunchOption = wednesdayLunch.options[wednesdayLunch.selectedIndex].text
    wednesdaySnack2 = document.getElementById("WednesdaySnack2")
    wednesdaySnack2Option = wednesdaySnack2.options[wednesdaySnack2.selectedIndex].text
    wednesdayDinner = document.getElementById("WednesdayDinner")
    wednesdayDinner = wednesdayDinner.options[wednesdayDinner.selectedIndex].text

    thursdayBreakFast = document.getElementById("ThursdayBreakfast")
    thursdayBreakFastOption = thursdayBreakFast.options[thursdayBreakFast.selectedIndex].text
    thursdaySnack = document.getElementById("ThursdaySnack")
    thursdaySnackOption = thursdaySnack.options[thursdaySnack.selectedIndex].text
    thursdayLunch = document.getElementById("ThursdayLunch")
    thursdayLunchOption = thursdayLunch.options[thursdayLunch.selectedIndex].text
    thursdaySnack2 = document.getElementById("ThursdaySnack2")
    thursdaySnack2Option = thursdaySnack2.options[thursdaySnack2.selectedIndex].text
    thursdayDinner = document.getElementById("ThursdayDinner")
    thursdayDinner = thursdayDinner.options[thursdayDinner.selectedIndex].text

    fridayBreakFast = document.getElementById("FridayBreakfast")
    fridayBreakFastOption = fridayBreakFast.options[fridayBreakFast.selectedIndex].text
    fridaySnack = document.getElementById("FridaySnack")
    fridaySnackOption = fridaySnack.options[fridaySnack.selectedIndex].text
    fridayLunch = document.getElementById("FridayLunch")
    fridayLunchOption = fridayLunch.options[fridayLunch.selectedIndex].text
    fridaySnack2 = document.getElementById("FridaySnack2")
    fridaySnack2Option = fridaySnack2.options[fridaySnack2.selectedIndex].text
    fridayDinner = document.getElementById("FridayDinner")
    fridayDinner = fridayDinner.options[fridayDinner.selectedIndex].text

    saturdayBreakFast = document.getElementById("SaturdayBreakfast")
    saturdayBreakFastOption = saturdayBreakFast.options[saturdayBreakFast.selectedIndex].text
    saturdaySnack = document.getElementById("SaturdaySnack")
    saturdaySnackOption = saturdaySnack.options[saturdaySnack.selectedIndex].text
    saturdayLunch = document.getElementById("SaturdayLunch")
    saturdayLunchOption = saturdayLunch.options[saturdayLunch.selectedIndex].text
    saturdaySnack2 = document.getElementById("SaturdaySnack2")
    saturdaySnack2Option = saturdaySnack2.options[saturdaySnack2.selectedIndex].text
    saturdayDinner = document.getElementById("SaturdayDinner")
    saturdayDinner = saturdayDinner.options[saturdayDinner.selectedIndex].text

    sundayBreakFast = document.getElementById("SundayBreakfast")
    sundayBreakFastOption = sundayBreakFast.options[sundayBreakFast.selectedIndex].text
    sundaySnack = document.getElementById("SundaySnack")
    sundaySnackOption = sundaySnack.options[sundaySnack.selectedIndex].text
    sundayLunch = document.getElementById("SundayLunch")
    sundayLunchOption = sundayLunch.options[sundayLunch.selectedIndex].text
    sundaySnack2 = document.getElementById("SundaySnack2")
    sundaySnack2Option = sundaySnack2.options[sundaySnack2.selectedIndex].text
    sundayDinner = document.getElementById("SundayDinner")
    sundayDinner = sundayDinner.options[sundayDinner.selectedIndex].text

    myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body bgcolor=\"#e6f4ff\"><div></div>\n");
    myText += ("Hello " + visitorName + ", Here is your meal plan!");
    myText += ("<br>");
    myText += ("<table border=\"1\"><tr><th>Day</th><th>BreakFast</th><th>Morning Snack</th><th>Lunch</th><th>Evening Snack</th><th>Dinner</th></tr>");
    myText += ("<tr><td>Monday</td>"+"<td>"+mondayBreakFastOption+"</td><td>"+mondaySnackOption+"</td><td>"+mondayLunchOption+"</td><td>"+mondaySnack2Option+"</td><td>"+mondayDinner+"</td></tr>");
    myText += ("<tr><td>Tuesday</td>"+"<td>"+tuesdayBreakFastOption+"</td><td>"+tuesdaySnackOption+"</td><td>"+tuesdayLunchOption+"</td><td>"+tuesdaySnack2Option+"</td><td>"+tuesdayDinner+"</td></tr>");
    myText += ("<tr><td>Wednesday</td>"+"<td>"+wednesdayBreakFastOption+"</td><td>"+wednesdaySnackOption+"</td><td>"+wednesdayLunchOption+"</td><td>"+wednesdaySnack2Option+"</td><td>"+wednesdayDinner+"</td></tr>");
    myText += ("<tr><td>Thursday</td>"+"<td>"+thursdayBreakFastOption+"</td><td>"+thursdaySnackOption+"</td><td>"+thursdayLunchOption+"</td><td>"+thursdaySnack2Option+"</td><td>"+thursdayDinner+"</td></tr>");
    myText += ("<tr><td>Friday</td>"+"<td>"+fridayBreakFastOption+"</td><td>"+fridaySnackOption+"</td><td>"+fridayLunchOption+"</td><td>"+fridaySnack2Option+"</td><td>"+fridayDinner+"</td></tr>");
    myText += ("<tr><td>Saturday</td>"+"<td>"+saturdayBreakFastOption+"</td><td>"+saturdaySnackOption+"</td><td>"+saturdayLunchOption+"</td><td>"+saturdaySnack2Option+"</td><td>"+saturdayDinner+"</td></tr>");
    myText += ("<tr><td>Sunday</td>"+"<td>"+sundayBreakFastOption+"</td><td>"+sundaySnackOption+"</td><td>"+sundayLunchOption+"</td><td>"+sundaySnack2Option+"</td><td>"+sundayDinner+"</td></tr>");

    myText += "</table><br>"
    myText += "<input type=\"button\" value=\"Print/Download this page\" onClick=\"window.print()\"></body>\n</html>";
    flyWindow = window.open('about:blank','mymealplan.html','width=760,height=540,left=10,top=100');

    flyWindow.document.write(myText);
}