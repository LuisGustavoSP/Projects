function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {

  img.setAttribute("src", "./assets/avatar-light.png")
  img.setAttribute(
    "alt",
    "Foto de Mayk Brito Sorrindo, usando óculos escuro preto, e jaqueta preta, e fundo gradiente roxo e azul")
  } else {

  img.setAttribute("src", "./assets/avatar.png")
  img.setAttribute(
    "alt",
    "Foto de Mayk Brito sorrindo, usando óculos e camisa preta, e fundo amarelo.")
  }

  }