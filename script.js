function toggleMode() {
  const html = document.documentElement
  const img = document.querySelector("#profile img")
  /* html.classList.toggle('light')  alternativa para if else  */
  
  if (html.classList.contains("light")) {
    html.classList.remove("light")
    img.setAttribute("src", "./projeto/assets/self2.png")
  } else {
    html.classList.add("light")
    img.setAttribute("src", "./projeto/assets/self.png")
  }
}
