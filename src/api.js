import Table from "./table";
import PopupAddEdit from "./popupAddEdit";

export const API = {
    user: {
        name: null,
        surname: null,
        secondName: null,
        createDate: null,
        changeDate: null,
        contacts: null,
    },

    add: (user) => {
        fetch('http://localhost:3000/users', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => console.log(res))
            .then(res => new Table(document.querySelector('div.js-render__table')))
    },

    get: async (id = '') => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
        }
    },

    find: async (query) => {
        try {
            const response = await fetch(`http://localhost:3000/users?q=${query}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
        }
    },

    change: (user) => {
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: 'PATCH',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                switch (res.status) {
                    case 200:
                    case 201:
                        new PopupAddEdit().unRender(); break;
                    default: {
                        if (res.statusText) {
                            new PopupAddEdit('edit').error(res.statusText);
                        } else {
                            new PopupAddEdit('edit').error('Что-то пошло не так...');
                        }
                    }

                }
            })
            .then(res => new Table(document.querySelector('div.js-render__table')))
    },

    delete: async (id = '') => {
        try {
            const response = await fetch(`http://localhost:3000/users/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            new Table(document.querySelector('div.js-render__table'));
            return await response.json();
        } catch (error) {
            console.error('Ошибка:', error);
        }
    },
};
