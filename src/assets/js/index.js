const btn = document.querySelector("#btn");
const alert = document.querySelector("#alert");

btn.addEventListener("click", async () => {
    btn.disabled = true;
    alert.innerHTML = `
        <div class="d-flex justify-content-center mt-2">
            <div class="spinner-border">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    `;

    const res = await fetch("/sync");
    const data = await res.json();
    if (res.status > 200) {
        alert.innerHTML = `
        <div class="alert alert-danger mt-2">
            Error, please try again
        </div>
    `;
    } else {
        alert.innerHTML = `
        <div class="alert alert-success mt-2">
            ${data.msg}
        </div>
    `;
    }

    setTimeout(() => {
        alert.innerHTML = "";
        btn.disabled = false;
    }, 1500);
});
