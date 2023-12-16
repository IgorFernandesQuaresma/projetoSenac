feature_estante

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



// $('.open').click(function(e){
//     alert("is working!");
// });

function show(){
    if($('.ocultar').val()=="esconde")
    jQuery('.mostrarOuEsconder').hide();
    if($('.mostra').val()=="mostra")
    jQuery('.mostrarOuEsconder').show();
}

