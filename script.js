function toggleMode () {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")

  if(html.classList.contains('light')) {

  img.setAttribute("src", "./assets/avatar-light.png")
  alt.setAttribute("alt", "Foto de Mayk Brito Sorrindo, usando óculos escuro preto, e jaqueta preta, e fundo gradiente roxo e azul")

  } else {

  img.setAttribute("src", "./assets/avatar.png")
  alt.setAttribute("alt")
  }

  }

    //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  // } else {
  // html.classList.add('light')
  // }