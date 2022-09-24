// importando a function modal para o arquivo corrente
import Modal from './modal.js'

const modal = Modal()

/* abrindo a modal quando o botão marcado como lida for clicado */
const checkButtons = document.querySelectorAll('.actions a.check');

checkButtons.forEach( button => {
    
    button.addEventListener('click', event => {
        modal.open()
    })

})

/* abrindo a modal quando o botão excluir for clicado */
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach( button => {
    button.addEventListener('click', event => {
        modal.open()
    })
})
