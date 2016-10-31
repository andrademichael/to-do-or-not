//backend

function Task(name, dueDate, location, notes) {
  this.name = name;
  this.dueDate = dueDate;
  this.location = location;
  this.notes = [notes];
  console.log(this.notes);
}

//frontend
var addCount = 2;
$(document).ready(function() {

  $("#addButton").click(function() {
    $("#extraNotes").append("<div class='form-group form-group-md notesInput'>" +
                              "<label for='notesInput" + addCount + "'><h4>Notes?</h4></label><br>" +
                              "<input id='notesInput1' class='notesInput' type='text'>" +
                              "<p class='warning alert-danger'></p>" +
                              "</div>");
  });

  $("form#toDos").submit(function(event) {
    event.preventDefault();
    var taskName = $("input#taskInput").val();
    var taskDueDate = $("input#dueDateInput").val();
    var taskLocation = $("input#locationInput").val();
    var taskNotes = [];
    console.log(taskNotes);

    $(".notesInput").each(function() {
        debugger;
      taskNotes.push($(this).val());
    console.log(taskNotes);
    });
    var task = new Task(taskName, taskDueDate, taskLocation, taskNotes);
    $("ul#output").append("<li>" + task.name + "</li><li>" + task.dueDate + "</li><li>" + task.location + "</li><li>" + task.notes + "</li>");
  });
});
