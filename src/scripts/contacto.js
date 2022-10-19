const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", validateData);

function validateData(event) {
    const form = event.target;

    event.preventDefault();

    const email = form.querySelector("#email");
    const message = form.querySelector("#message");

    const emailFeedback = form.querySelector("#email-feedback");
    const messageFeedback = form.querySelector("#message-feedback");

    emailFeedback.textContent = "";
    messageFeedback.textContent = "";

    const isValidEmail = validateEmail(email, emailFeedback);
    const isValidMessage = validateMessage(message, messageFeedback);


    if (isValidEmail && isValidMessage) {
        sendMessage(form);
    }


    function validateEmail(email, feedback) {
        const isEmpty = email.validity.valueMissing ? "Se requiere un email" : "";
        const isIncorrectType = email.validity.patternMismatch ? "Se esperaba un correo electrónico" : "";
        const isTooShort = email.validity.tooShort ? "El email es demasiado corto" : "";

        const result = [isEmpty, isIncorrectType, isTooShort].find((error) => error != "");

        if (result) {
            feedback.textContent = result;
            return false;
        }

        return true;
    }

    function validateMessage(message, feedback) {
        const isEmpty = message.validity.valueMissing ? "Se requiere un mensaje" : "";

        if (isEmpty) {
            feedback.textContent = isEmpty;
            return false;
        }

        return true;
    }

    function sendMessage(form) {
        const data = new FormData(form);
        const company = data.get("company");
        const user = data.get("email");
        const subject = `[CONSULTA] - ${data.get("subject")}`;
        const message = data.get("message").replaceAll(/\n/g, "%0A");

        const url = `mailto:${company}?cc=${user}&subject=${subject}&body=${message}`;
        window.location.assign(url);
    }
}
