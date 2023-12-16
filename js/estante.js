
let descricao = document.querySelectorAll(".card__descricao");
const playOpen = document.querySelectorAll(".open");
console.log(descricao);
console.log(playOpen);

const btn= document.querySelectorAll('.btn')
console

btn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        descricao.forEach(function (description) {
            description.classList.toggle('inativo')
            
        });
})

})


