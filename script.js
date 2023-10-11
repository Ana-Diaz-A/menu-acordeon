//Este código define una función llamada toggleItem que se utiliza para alternar la visibilidad de las secciones de contenido en una página web.
const toggleItem = (element) => {
  const headers = document.querySelectorAll("article header");
  for (let header of headers) {
    header.classList.remove("active");
    header.nextElementSibling.style.height = "0px";
  }

  element.classList.add("active");

  const content = element.nextElementSibling;

  const text = content.querySelector("p");

  content.style.height = `${text.clientHeight}px`;
};