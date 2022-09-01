import {API} from "./api";
import popupAddEdit from "./popupAddEdit.js";
import tippy from 'tippy.js';
import Popup from "./popup";

export default class Table {
    constructor(el) {
        this.tableDiv = el;
        this.tableDiv.innerHTML = this.templateTable;

        API.get().then(response => {
            this.render(response);
            this.addEvents();
        });
    }

    render(users) {
        let renderTr = '';

        users.forEach(user => {
            renderTr += this.templateTr(user);
        });
        this.tableDiv.querySelector('tbody').innerHTML = renderTr;
        this.users = users;
    }

    addEvents() {
        const addButton = document.querySelector('.add__button');
        addButton.addEventListener('click', () => {
            new popupAddEdit('create').render();
        });

        const spanEdit = this.tableDiv.querySelectorAll('span.table-edit__contact');
        spanEdit.forEach(span => {
            span.addEventListener('click', () => {
                const id = span.closest('tr').dataset.id;
                API.get(id).then(response => {
                    new popupAddEdit('edit').render(response);
                });
            });
        });

        const spanDelete = this.tableDiv.querySelectorAll('span.table-delete__contact');
        spanDelete.forEach(span => {
            span.addEventListener('click',  async () => {
                    const promise = new Popup(
                        'Удалить клиента',
                        'Вы действительно хотите удалить данного клиента?',
                        'Удалить');
                    if (await promise) {
                        const id = span.closest('tr').dataset.id;
                        API.delete(id).then(() => console.log('Контакт удален'));
                    }
                }
            );
        });

        const thSort = this.tableDiv.querySelectorAll('th[data-sort-type]');
        thSort.forEach(th => {
            th.addEventListener('click', () => {
                switch (th.dataset.sort) {
                    case 'asc' : {
                        th.dataset.sort = 'desc';
                        break;
                    }
                    case 'desc': {
                        th.dataset.sort = 'asc';
                        break;
                    }
                    default: th.dataset.sort = 'asc';
                }

                this.sort(th.dataset.sortType, th.dataset.sort)
            });
        })

        const i = this.tableDiv.querySelectorAll('i.tippy.fa');
        i.forEach(i => {
            tippy(i, {
                content: i.getAttribute('contact-type') + ': ' + i.getAttribute('contact-value'),
            });
        })
    };

    sort(type, sort) {
        switch (type) {
            case 'id': {
                this.users = this.users.sort(function(a, b) {
                    console.log([a.id, b.id])
                    if (sort === 'asc') return a.id - b.id;
                    else return b.id - a.id;
                });
                break;
            }
            case 'name': {
                this.users = this.users.sort(function(a, b) {
                    const nameA = a.surname.toLowerCase()+a.name.toLowerCase()+a.secondName.toLowerCase();
                    const nameB = b.surname.toLowerCase()+b.name.toLowerCase()+b.secondName.toLowerCase();
                    if (sort === 'asc') {
                        if (nameA < nameB) return -1;
                        if (nameA > nameB) return 1;
                        return 0;
                    } else {
                        if (nameA > nameB) return -1;
                        if (nameA < nameB) return 1;
                        return 0;
                    }
                });
                break;
            }
            case 'changeDate':
            case 'createDate': {
                this.users = this.users.sort(function(a, b){
                    const dateA = new Date(a[type]).getTime();
                    const dateB = new Date(b[type]).getTime();

                    if (sort === 'asc') return dateA - dateB;
                    else return dateB - dateA;
                })
                break;
            }
        }
        const thSort = this.tableDiv.querySelectorAll(`th[data-sort-type]:not(th[data-sort-type="${type}"])`);

        thSort.forEach(th => {
            th.dataset.sort = '';
        });
        this.render(this.users);
    }

    templateTr = (user) => {
        const dateCreate = new Date(user.createDate);
        const dateChange = new Date(user.changeDate);

        const tdContacts = document.createElement("td");

        if (user.contacts) {
            user.contacts.forEach(contact => {
                const i = document.createElement("i");
                i.classList.add('fa', 'tippy');
                i.setAttribute('aria-hidden', "true");
                i.setAttribute('contact-value', contact.value);

                switch (contact.type) {
                    case 'phone':
                        i.setAttribute('contact-type', 'Телефон');
                        i.classList.add('fa-phone'); break;
                    case 'dopPhone':
                        i.setAttribute('contact-type', 'Доп. телефон');
                        i.classList.add('fa-phone'); break;
                    case 'vk':
                        i.setAttribute('contact-type', 'VK');
                        i.classList.add('fa-vk'); break;
                    case 'facebook':
                        i.setAttribute('contact-type', 'Facebook');
                        i.classList.add('fa-facebook'); break;
                    case 'email':
                        i.setAttribute('contact-type', 'Почта');
                        i.classList.add('fa-envelope'); break;
                    case 'other':
                        i.setAttribute('contact-type', 'Контакт');
                        i.classList.add('fa-address-card'); break;
                }
                tdContacts.append(i);
            });
        }

        return `
        <tr data-id="${user.id}">
            <td>${user.id}</td>
            <td>${user.surname} ${user.name} ${user.secondName}</td>
            <td>
                ${dateCreate.toLocaleDateString()} 
                <span class="time">${dateCreate.toLocaleTimeString().slice(0,-3)}</span>
            </td>
            <td>
                ${dateChange.toLocaleDateString()} 
                <span class="time">${dateChange.toLocaleTimeString().slice(0,-3)}</span>
            </td>
            <td>
                ${tdContacts.innerHTML}
            </td>
            <td>
                <span class="table-edit__contact">Изменить</span>
                <span class="table-delete__contact">Удалить</span>
            </td>
        </tr>
        `
    };

    templateTable =
        `
           <table class="uk-table uk-table-divider pb-5">
                <thead>
                <tr>
                    <th data-sort="asc" data-sort-type="id">ID</th>
                    <th data-sort-type="name">Фамилия Имя Отчество</th>
                    <th data-sort-type="createDate">Дата и время и создания</th>
                    <th data-sort-type="changeDate">Последние изменение</th>
                    <th>Контакты</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
        
                </tbody>
            </table>
        `;
}
