import UIkit from 'uikit';

import Table from "./table";
import Icons from 'uikit/dist/js/uikit-icons';
import findUser from "./findUser";
import 'tippy.js/dist/tippy.css';
import RandomUsers from "./randomUsers.js";

UIkit.use(Icons);

document.addEventListener("DOMContentLoaded", async () => {
    const tableDiv = document.querySelector('div.js-render__table')
    const findDiv = document.querySelector('div.js-find__user')

    new Table(tableDiv);
    new findUser(findDiv);

    const buttonRandomUsers = document.querySelector('button.js-random-user');
    const inputRandomUsers = document.querySelector('input.js-random-user');
    buttonRandomUsers.addEventListener('click', () => {
        new RandomUsers(inputRandomUsers.value);
    });
});

