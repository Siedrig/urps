let appHeader =
`

   <nav id="navegacao">
            <ul>
                <li><a href="index.html">Página Inicial</a></li>
                <li><a href="entradaform.html">Investigadores de Campo</a></li>
                <li><a href="manifestacoes.html">Manifestações conhecidas</a></li>
                <li><a href="progresso.html">Acompanhe nossa missão</a></li>
            </ul>     
        </nav>
`;
document.getElementById("app-header").innerHTML = appHeader;

[].forEach.call(document.querySelectorAll('a'), function(elem) {
    if (elem.pathname === window.location.pathname)
      elem.classList.add('active')
    else
      elem.classList.remove('active')
  })