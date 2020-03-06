$(document).ready(function () {
    addTask()
})
function  addTask() {
    $("#btn-add").click(function () {
        var valueTask = $(".inputList").val()
        if(!valueTask.trim()){
            alert("No")
            return false
        }
        var containerTodo = "<div class='task'> <strong class='valueOut'>"+valueTask +" </strong> <div class='editBtn'><i class=\"fa fa-edit\" aria-hidden=\"true\"></i></div><div class='deleteBtn'><i class=\"fa fa-times-circle\" aria-hidden=\"true\"></i></div>"
        $("#outList").append(containerTodo)
        $(".inputList").val("")
    deleteTask();
        editTask();
    })
  function deleteTask(){
    $('.deleteBtn').click(function(){
        $(this).parent(".task").remove()        
    })
  }
    function editTask(){
        $('.editBtn').click(function(){
            
            var valueEditTask = $(this).siblings('strong')
            $("#myModal").modal("show")
            var inputValueEdit = $(".input-task-edit") 
            inputValueEdit.val(valueEditTask.text()) 
            $(".save-changes").unbind("click")
            $(".save-changes").click(function(){
             if(!inputValueEdit) {
                 alert("No")
                 return false
             }
             valueEditTask.text(inputValueEdit.val())
            })
        })
    }
}
