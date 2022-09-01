import {API} from "./api";

export default class findUser {
    constructor(el) {
        this.inputDiv = el;
        this.addEvents();
    }

    addEvents() {
        const input = this.inputDiv.querySelector('input');
        input.addEventListener('input', () => {
            if (input.value.length > 0) {
                clearTimeout(this.timerId)
                this.timerId = setTimeout(this.render, 300, input.value);
            } else this.unRender();
        });

        this.inputDiv.addEventListener('click', (e) => (e._isClickInFindInput = true))
        document.querySelector('body').addEventListener('click', (e) => {
            if (!e._isClickInFindInput) this.unRender()
        })
    }

    render = (value) => {
        this.unRender();

        API.find(value).then(response => {
            const ul = document.createElement("ul");
            let countFind = 0;
            response.forEach(f => {
                countFind++;
                if (countFind > 5) return true;
                ul.innerHTML += `<li data-find-id="${f.id}">${f.surname} ${f.name} ${f.secondName}</li>`
            });

            document.querySelector('div.js-find__user').append(ul);

            const liElements = ul.querySelectorAll('li');
            liElements.forEach(li => {
               li.addEventListener('click', () => {
                   const tr = document.querySelector(`tr[data-id="${li.dataset.findId}"]`);
                   tr.scrollIntoView({block: "center", inline: "center", behavior: "smooth"});
                   tr.classList.add('active__find');
                   setTimeout(() => tr.classList.remove('active__find'), 3000);
                   this.unRender();
               })
            });
        });
    }

    unRender = () => {
        const div = document.querySelector('div.js-find__user > ul');
        if (div) div.remove()
    }
}
