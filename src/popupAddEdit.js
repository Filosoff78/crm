import IMask from 'imask';
import {API} from "./api";
import Popup from "./popup";
import Table from "./table";

export default class PopupAddEdit {
    popupDiv = document.querySelector('div.js-render__popupAddEdit');
    modalDiv = this.popupDiv.querySelector('div.uk-modal');

    contactId = 0;
    masks = [];
    contacts = [];

    phoneMask = ['phone', 'dopPhone'];

    constructor(type) {
        this.type = type;
    }

    render(user = API.user) {
        this.popupDiv.innerHTML = this.templatePopup();
        this.modalDiv = this.popupDiv.querySelector('div.uk-modal');
        this.getInputs();
        this.addEvents();
        this.user = user;

        if (user.id) {
            const inputs = this.inputs;

            inputs.surname.input.value = user.surname;
            inputs.name.input.value = user.name;
            inputs.secondName.input.value = user.secondName;

            this.modalDiv.querySelector('h2.uk-modal-title > span').innerHTML = 'ID: ' + user.id;

            if (user.contacts) {
                user.contacts.forEach(contact => {
                    const contactId = this.addContact();
                    const el = document.querySelector(`div[data-contact-id="${contactId}"]`);
                    el.querySelector('input').value = contact.value;
                    el.querySelector('select').value = contact.type;
                    if (!this.phoneMask.includes(contact.type))
                        this.removePhoneMask(contactId);
                    else this.updatePhoneMask(contactId);
                })
            }
        }
    }

    unRender() {
        this.popupDiv.innerHTML = '';
        return true;
    }

    validation() {
        const validate = (input, text) => {
            if (!input.value.length) {
                input.classList.add('is-invalid');
                text.style.display = 'block';
                return false;
            } else {
                input.classList.remove('is-invalid');
                text.style.display = 'none';
                return true;
            }
        };
        let find = false, errorFind = false;

        for (const value of Object.entries(this.inputs)) {
            find = validate(value[1].input, value[1].label);
            if (!find) errorFind = true;
        }
        return errorFind;
    }

    addEvents() {
        const closeButton = this.popupDiv.querySelector('button.uk-modal-close-default');
        const popup = this.popupDiv.querySelector('#popupAddEdit');
        const addContactButton = this.popupDiv.querySelector('p.contact__text');
        const saveButton = this.popupDiv.querySelector('.save__button');

        closeButton.addEventListener('click', () => this.unRender());
        popup.addEventListener('click', (e) => (e._isClickInModal = true))
        this.modalDiv.addEventListener('click', (e) => {
            if (!e._isClickInModal) this.unRender()
        });

        addContactButton.addEventListener('click', () => this.addContact());
        saveButton.addEventListener('click', () => this.save());

        const inputs = this.inputs;
        inputs.name.input.addEventListener('change', () => this.user.name = inputs.name.input.value)
        inputs.surname.input.addEventListener('change', () => this.user.surname = inputs.surname.input.value)
        inputs.secondName.input.addEventListener('change', () => this.user.secondName = inputs.secondName.input.value)

        if (this.type === 'edit') {
            document.querySelector('.popup-delete__contact').addEventListener('click', async () => {
                const promise = new Popup(
                    'Удалить клиента',
                    'Вы действительно хотите удалить данного клиента?',
                    'Удалить');
                if (await promise) {
                    API.delete(this.user.id).then(() => console.log('Контакт удален'));
                    this.unRender();
                }
            })
        }
    }

    error(text) {
        const errorText = this.popupDiv.querySelector('.error__text');
        errorText.style.display = 'block';
        errorText.innerHTML = 'Ошибка: ' + text;
    }

    save() {
        if (this.validation()) return false;
        const contactDiv = document.querySelectorAll('div.contact__add__div');
        const contacts = [];
        contactDiv.forEach(contact => {
            if (contact.querySelector('input').value.length) {
                contacts.push({
                    id: Date.now(),
                    type: contact.querySelector('select').value,
                    value: contact.querySelector('input').value,
                });
            }
        });
        this.user.contacts = contacts;
        this.user.changeDate = new Date();
        if (this.type === 'edit') {
            API.change(this.user);
        } else {
            this.user.createDate = new Date();
            API.add(this.user);
            this.unRender();
        }
    }

    addContact() {
        const countContacts = this.popupDiv.querySelectorAll('.contact__add__div').length;
        if (countContacts > 8) this.popupDiv.querySelector('.contact__text').style.display = 'none';

        this.contactId++;

        const contactDiv = this.popupDiv.querySelector('div.contact__div');

        const div = document.createElement("div");
        div.innerHTML = this.templateContact;
        div.classList.add('pb-2', 'contact__add__div');
        div.dataset.contactId = this.contactId;

        contactDiv.append(div);

        const delButton = div.querySelector('i.fa-minus-square-o');
        delButton.addEventListener('click',() => {
            const countContacts = this.popupDiv.querySelectorAll('.contact__add__div').length;
            if (countContacts < 11) this.popupDiv.querySelector('.contact__text').style.display = 'block';
            delButton.closest('.contact__add__div').remove();
        });

        const select = div.querySelector('select');
        select.addEventListener('input', () => {
            const value = select.value;
            const contactDiv = select.closest('.contact__add__div');
            if (!this.phoneMask.includes(value)) {
                this.removePhoneMask(contactDiv.dataset.contactId);
            } else {
                this.addPhoneMask(
                    contactDiv.querySelector('input'),
                    contactDiv.dataset.contactId
                );
            }
        })

        const iconDelete = div.querySelector('i.fa-trash-o');
        iconDelete.addEventListener('click', () => {
            iconDelete.closest('div.input-icon__delete').querySelector('input').value = '';
        });

        this.addPhoneMask(div.querySelector('input.contact'), this.contactId);
        return this.contactId;
    }

    addPhoneMask(el, id) {
        const index = this.masks.findIndex(mask => mask.contactId === Number(id));

        if (index !== -1) return false;
        const mask = IMask(el, {
                mask: '+{7}(000)000-00-00'
            });
        mask.contactId = this.contactId;
        this.masks.push(mask);
    }

    removePhoneMask(id) {
        const index = this.masks.findIndex(mask => mask.contactId === Number(id));
        this.masks[index].destroy();
        this.masks = this.masks.filter(mask => mask.contactId !== Number(id));
    }

    updatePhoneMask(id) {
        const index = this.masks.findIndex(mask => mask.contactId === Number(id));
        this.masks[index].updateValue();
    }

    templatePopup = () => (`
    <div class="uk-modal uk-open" style="display: block;" tabindex="-1">
        <div class="uk-modal-dialog">
            <div id="popupAddEdit">
                <div class="uk-modal-body">
                    <h2 class="uk-modal-title">${this.type === 'create' ? `Создать` : `Изменить`} клиента<span class="ps-2"></span></h2>
                    <div class="did-floating-label-content" id="inputSurname">
                        <input class="uk-input uk-form-width-large did-floating-input required" type="text" placeholder=" ">
                        <label class="did-floating-label">Фамилия</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                    <div class="did-floating-label-content" id="inputName">
                        <input class="uk-input uk-form-width-large did-floating-input required" type="text" placeholder=" ">
                        <label class="did-floating-label">Имя</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                    <div class="did-floating-label-content" id="inputSecondName">
                        <input class="uk-input uk-form-width-large did-floating-input" type="text" placeholder=" ">
                        <label class="did-floating-label">Отчество</label>
                        <p class="error__text" style="display: none">Поле не заполнено.</p>
                    </div>
                </div>
                <div style="background-color: #C8C5D1">
                    <div class="uk-modal-body">
                        <div class="contact__div">

                        </div>
                        <div class="d-flex justify-content-center align-items-center">
                            <p class="contact__text">
                                Добавить контакт
                            </p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 d-flex justify-content-center pt-2 align-items-center">
                        <p class="error__text" style="display: none"></p>
                    </div>
                    <div class="col-12 d-flex justify-content-center align-items-center pt-3
                    ${this.type === 'create' ? `pb-3` : ``}">
                        <button class="uk-button save__button" type="button">Сохранить</button>
                    </div>
                    ${this.type === 'edit' ? 
                    `<div class="col-12 d-flex justify-content-center align-items-center pt-3">
                        <p class="underline__text popup-delete__contact">
                            Удалить контакт
                        </p>
                    </div>` : ``}
                </div>
                <button class="uk-modal-close-default uk-icon" type="button">
                    <svg width="14" height="14" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="1" y1="1" x2="13" y2="13"></line>
                        <line fill="none" stroke="#000" stroke-width="1.1" x1="13" y1="1" x2="1" y2="13"></line>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    `);

    templateContact = `
    <div class="row">
        <div class="col-4">
            <div uk-form-custom="target: > * > span:first-child">
                <select class="select-css">
                    <option value="phone">Телефон</option>
                    <option value="dopPhone">Доп. Телефон</option>
                    <option value="email">Email</option>
                    <option value="vk">Vk</option>
                    <option value="facebook">Facebook</option>
                    <option value="other">Другое</option>
                </select>
                <button class="uk-button uk-button-default contact__button" type="button" tabindex="-1">
                    <span></span>
                    <span uk-icon="icon: chevron-down"></span>
                </button>
            </div>
        </div>
        <div class="col-7">
            <div class="input-icon__delete">
                <input class="uk-input uk-form-width-large contact" required type="text" placeholder="Введите данные контакта">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
            </div>
        </div>
        <div class="col-1 d-flex justify-content-center align-items-center">
            <i class="fa fa-minus-square-o" aria-hidden="true"></i>
        </div>
    </div>
    `;

    getInputs() {
        this.inputs = {
            surname: {
                input: document.querySelector('#inputSurname > input'),
                label: document.querySelector('#inputSurname > p'),
            },
            name: {
                input: document.querySelector('#inputName > input'),
                label: document.querySelector('#inputName > p'),
            },
            secondName: {
                input: document.querySelector('#inputSecondName > input'),
                label: document.querySelector('#inputSecondName > p'),
            }
        }
    }
}
