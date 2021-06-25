$(document).ready(function (){
    $('.tl-tasks').html(localStorage.getItem('tasks'));
    $('.editBtn').click(function (){
        $(this).parent().children('.task-val').text(prompt('Enter new value', $(this).parent().children('.task-val').text()));
        localStorage.setItem('tasks',$('.tl-tasks').html());
    });
    $('.removeBtn').click(function (){
        $(this).parent().remove();
        localStorage.setItem('tasks',$('.tl-tasks').html());
    });
    $('.check').change(function (){
        if ($(this).is(':checked')){
            $(this).attr('checked','checked');
            $(this).parent().css('text-decoration','line-through');
        }else {
            $(this).parent().css('text-decoration','none');
            $(this).removeAttr('checked','checked');
        }
        localStorage.setItem('tasks',$('.tl-tasks').html());
    });
});
function addElement(){
if ($('.tl-input').val() ===''){
    alert('Enter a task');
    return;
}
$('.tl-tasks').append(`<li class="tl-task">
<input type="checkbox" class="check">
<span class="task-val">${$('.tl-input').val()}</span>
<button class="removeBtn">Remove</button>
<button class="editBtn">Edit</button>
</li>`);
$('.editBtn').click(function (){
    $(this).parent().$(this).children('.task-val').text(prompt('Enter new value', $(this).parent().children('.task-val').text()));
    localStorage.setItem('tasks',$('.tl-tasks').html());
});
$('.removeBtn').click(function (){
    $(this).parent().remove();
    localStorage.setItem('tasks',$('.tl-tasks').html());
});
$('.check').change(function (){
    if ($(this).is(':checked')){
        $(this).attr('checked','checked');
        $(this).parent().css('text-decoration','line-through');
    }else {
        $(this).parent().css('text-decoration','none');
        $(this).removeAttr('checked','checked');
    }
    localStorage.setItem('tasks',$('.tl-tasks').html());
});
localStorage.setItem('tasks',$('.tl-tasks').html());
$('.tl-input').val('');
}

$('.tl-input-btn').click(addElement);
$('.tl-input').keydown((e) =>{
    if(e.keyCode === 13){
        e.preventDefault();
        addElement();
    }
})
