form.addEventListener('submit', function(e){
  e.preventDefault();
  var name = document.getElementById('name').value.trim();
  var subject = document.getElementById('subject').value.trim();
  var message = document.getElementById('message').value.trim();
  var body = 'Nome: ' + name + '\n\n' + message;
  var mailto = 'mailto:gabrielbene888@gmail.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);
  window.location.href = mailto;
});