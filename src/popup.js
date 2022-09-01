export default class Popup {

    constructor(title, body, okey = 'Окей', cancel = 'Отмена') {
        this.id = Date.now();
        this.title = title;
        this.body = body;
        this.okey = okey;
        this.cancel = cancel;

        this.render();
        this.popElement = document.getElementById(`popup-${this.id}`);
        this.dialogElement = this.popElement.querySelector('.uk-modal-dialog');

        return new Promise(resolve => {
            this.dialogElement.querySelectorAll('.js-close').forEach(el => {
                el.addEventListener('click', () => {
                    resolve(false);
                    this.unRender();
                });
            })
            this.dialogElement.addEventListener('click', (e) => (e._isClickInModal = true))
            document.querySelector('body').addEventListener('click', (e) => {
                if (!e._isClickInModal && e.path[0].className != 'table-delete__contact') {
                    resolve(false);
                    this.unRender();
                }
            });
            this.dialogElement.querySelector('.save__button')
                .addEventListener('click', () => {
                    resolve(true);
                    this.unRender();
                })
        });
    }

    render() {
        document.querySelector('body').append(this.getTemplate());
    }

    unRender(save) {
        this.popElement.remove();
        return save;
    }

    getTemplate = () => {
        const div = document.createElement('div');

        const template = `
        <div id="popup-${this.id}">
            <div class="uk-modal uk-open" style="display: block;" tabindex="-1">
                <div class="uk-modal-dialog">
                    <h2 class="uk-modal-title uk-text-center">${this.title}</h2>
                    <p class="uk-text-center">${this.body}</p>
                    <div class="d-flex justify-content-center align-items-center">
                        <button class="uk-button save__button">${this.okey}</button>
                    </div>
                    <p class="uk-text-center underline__text pb-3 js-close">${this.cancel}</p>
                    <button class="uk-modal-close-default uk-icon js-close" type="button">
                        <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                            <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        `;
        div.innerHTML = template;
        return div;
    }
}
