document.querySelector('#full_name').focus();

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("click", (e) => {
    alert(`You are editing the ${e.target.name} field`);
  });
});

document.querySelector('.form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("You submitted the form!");
})