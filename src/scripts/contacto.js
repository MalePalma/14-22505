const messageForm = document.getElementById("message-form");

messageForm.addEventListener("submit", sendMessage);

function sendMessage(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const company = formData.get("company");
    const user = formData.get("email");
    const subject = `[CONSULTA] - ${formData.get("subject")}`;
    const message = formData.get("message").replaceAll(/\n/g, "%0A");

    const url = `mailto:${company}?cc=${user}&subject=${subject}&body=${message}`;

    window.location.assign(url);
}
