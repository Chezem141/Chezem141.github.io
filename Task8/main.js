function saveVal() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('email', document.getElementById('email').value);
    localStorage.setItem('phone', document.getElementById('phone').value);
    localStorage.setItem('organization', document.getElementById('organization').value);
    localStorage.setItem('message', document.getElementById('message').value);
}

function recoverVal() {
    document.getElementById('name').value = localStorage.getItem('name');
    document.getElementById('email').value = localStorage.getItem('email');
    document.getElementById('phone').value = localStorage.getItem('phone');
    document.getElementById('organization').value = localStorage.getItem('organization');
    document.getElementById('message').value = localStorage.getItem('message');
}

document.addEventListener("DOMContentLoaded", () => {
    var slapform = new Slapform();
    let btn = document.getElementById("open_button");
    let inpt = document.querySelectorAll("input");
    let form = document.getElementById("form");
    form.style.display = "none";

    btn.addEventListener("click", () => {
        form.style.display = "flex";
        history.pushState({"show_form": true}, "show_form", "?show_form=true")
    });

    inpt.forEach((input) => {
        input.addEventListener("input", () => {
            saveVal();
        })
    })

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        slapform.submit({
            form: 'lXG00vq32',
            data: {
                name: document.getElementById("name").value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                organization: document.getElementById('organization').value,
                message: document.getElementById('message').value
            }
        })
        .then((response) => {
            if(response.ok) {
                alert("Форма отправлена");
                form.reset();
                localStorage.clear();
            } else {
                throw new Error('При отправке возникла ошибка');
            }
            console.log('Success', response)
        })
        .catch(function (e) {
            console.error('Fail', e)
        })
        history.back();
    })

    window.addEventListener("popstate", () => {
        form.style.display = "none";
    })
    recoverVal();
})
