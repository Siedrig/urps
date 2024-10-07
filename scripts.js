document.getElementById("app-header").innerHTML = appHeader;

[].forEach.call(document.querySelectorAll('a'), function(elem) {
    if (elem.pathname === window.location.pathname)
      elem.classList.add('active')
    else
      elem.classList.remove('active')
  })

  var checkList = document>getElementById('lista1');
  checkList.getElementsByClassName('anchor')[0].onClick = function(evt) {
    if (checkList.classList.contains('visible'))
        checkList.classList.remove('visible');
    else
    checkList.classList.add('visible');
  }