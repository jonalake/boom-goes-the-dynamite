function boom() {
  document.querySelector("#message").textContent = "BOOM"
}

let button = document.querySelector("button")
button.addEventListener("click", boom)
