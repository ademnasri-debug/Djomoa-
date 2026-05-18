document.addEventListener("DOMContentLoaded", () => {

  console.log("Djomoa جاهز للعمل");

  const buttons = document.querySelectorAll("button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      alert("الميزة ستتوفر قريبا داخل مشروع Djomoa");
    });
  });

});