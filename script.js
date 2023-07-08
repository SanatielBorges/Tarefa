/*document.addEventListener('DOMContentLoaded', function() {
  var button = document.getElementById('enviar');
  var input = document.getElementById('work');
  var ul = document.querySelector('ul');

  button.addEventListener('click', function() {
    var taskName = input.value;
    if (taskName.trim() !== '') {
      var li = document.createElement('li');
      li.textContent = taskName;
      li.addEventListener('click', function() {
        this.classList.toggle('completed');
      });
      ul.appendChild(li);
      input.value = '';
    }
  });
}); */

$(document).ready(function() {
  $('#enviar').click(function() {
    var taskName = $('#work').val().trim();
    if (taskName !== '') {
      var li = $('<li>').text(taskName);
      li.click(function() {
        $(this).toggleClass('completed');
      });
      $('ul').append(li);
      $('#work').val('');
    }
  });
  
});

