//load tasks from local storage and input them in their correct time blocks
var loadTasks = function () {
    if (!localStorage.getItem("tasks")) {
      addCurrentDate();
    } else {
      // get tasks from local storage
      var taskArray = localStorage.getItem("tasks");
      taskArray = JSON.parse(taskArray);
  
      // push tasks onto page
      for (i = 0; i < taskArray.length; i++) {
        var text = taskArray[i].text;
        $("." + (i + 9)).val(text);
      }
  
     
      addCurrentDate();
    }
  };
  
  //push current date into jumbotron
  var addCurrentDate = function () {
    // clear out current date
    $("#currentDay").empty();
  
   
    var todayDate = moment();
  
  
    $("#currentDay").append(todayDate.format("MMMM Do, YYYY"));
  
    //run function to show colored times
    timeCheck();
  };
  

  var timeCheck = function () {
    // get current time
    var timeNow = parseInt(moment().format("H"));
  
    // create new array to store id numbers
    var childArray = [];
  
    // get array of all ids in child elements of container div
    $("div", ".container").each(function () {
      childArray.push($(this).attr("id"));
    });
  

    childArray = childArray.filter(function (e) {
      return e !== undefined;
    });
  

    for (i = 0; i < childArray.length; i++) {
      var timeId = parseInt(childArray[i]);
  
      if (timeId === timeNow) {
        $("." + timeId).addClass("present");
      } else if (timeId < timeNow) {
        $("." + timeId).addClass("past");
      } else if (timeId > timeNow) {
        $("." + timeId).addClass("future");
      }
    }
  };
  
  // refresh time blocks every hour 
  setInterval(function () {
    if (moment().format("mm.ss") === "00.00") {
      location.reload(true);
    }
  }, 500);
  
  // on click save all tasks in time block
  $(".saveBtn").on("click", function () {

    var taskArray = [];
  
 
    for (i = 9; i < 18; i++) {
      var text = $("." + i).val();
      taskArray.push({
        id: parseInt(i),
        text: text,
      });
    }
  
  
    localStorage.setItem("tasks", JSON.stringify(taskArray));
  });
  

  loadTasks();