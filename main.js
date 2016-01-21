$( document ).ready(function() {

    // Date picker
    $( ".datepicker" ).datepicker();

     //sort columns
     $( "#sortable1, #sortable2", "#sortable3").sortable({
        connectWith: ".connectedSortable"
     }).disableSelection();
  
     var i = 0;
    for (i = 0; i < localStorage.length; i++) {
        var taskID = "task-" + i;
        $('.taskList').append("<li id='" + taskID + "'>" + localStorage.getItem(taskID) + "</li>");
    } 
       //Submit task
     $('#taskEntryForm').submit(function () {
        if ($('#title').val() !== "") {
            var taskID = "task-" + i;
            var taskMessage = $('#title').val();
            localStorage.setItem(taskID, taskMessage);
            $('.taskList').append("<li class='task' id='" + taskID + "'>" + taskMessage + "</li>");
            var task = $('#' + taskID);
            task.css('display', 'none');
            task.slideDown();
            $('#title').val("");
            i++;
        }
        return false;
    });

     $('.taskList').on("click", "li", function (event) {
        self = $(this);
        taskID = self.attr('id');
        localStorage.removeItem(taskID);
        self.slideUp('slow', function () {
            self.remove();
        });

    });
  

});

