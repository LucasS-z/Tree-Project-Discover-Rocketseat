function togglemode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")

  //subistituir imagem
  if (html.classList.contains("light")) {
    //Se estiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto Para light mode de mayk")
  } else {
    //se estiver se light mode, manter a imagem padrao
    img.setAttribute("src", "./assets/assets/avatar.png")
    img.setAttribute("alt", "Foto para Dark mode de Mayk")
  }
}
