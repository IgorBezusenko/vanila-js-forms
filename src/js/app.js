import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from "./config/ui.config";
import {validate} from "./helpers/validate";
import {removeInputError, showInputError} from "./views/form";
import {login} from "./services/auth.services";
import {notify} from "./views/notifications";
import {getNews} from "./services/news.services";

const {form, inputEmail, inputPassword} = UI
const inputs = [inputEmail, inputPassword]

//Events
form.addEventListener('submit', (e) => {
    e.preventDefault()
    onSubmit()
})

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)))

//Handler

// email: "denis.m.pcspace@gmail.com"
// password: "dmgame12345"
async function onSubmit() {
    const isValidForm = inputs.every((el) => {
        const isValidInput = validate(el)
        if (!isValidInput) {
            showInputError(el)
        }
        return isValidInput
    })
    if (!isValidForm) return

    try {
        await login(inputEmail.value, inputPassword.value)
        await getNews()
        form.reset()
        notify({msg: "Login success", className: "alert-success"})
    } catch (e) {
        notify({msg: "Login failed", className: "alert-danger"})
    }

}
