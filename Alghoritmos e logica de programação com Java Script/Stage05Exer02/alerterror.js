export const abaErro = {
    element: document.querySelector('.alert-error'),
    open() {
        abaErro.element.classList.add('open')
    },
    close() {
        abaErro.element.classList.remove('open')
    },
}