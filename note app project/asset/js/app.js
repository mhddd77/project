const cover = document.querySelector(".cover")

function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}
let contentMessage = ''
const get = () => {
    if (JSON.parse(localStorage.getItem("message")) !== null) {
        return JSON.parse(localStorage.getItem("message"))
    } else {
        return []
    }
}
const addMessage = (message) => {
    message.push(
        {
            content: contentMessage,
            id: uuidv4(),
            date: moment().valueOf(),
            hour: moment().valueOf(),
        }
    )
}
const showMessage = (message) => {
    message.forEach((item) => {
        const elementTag = document.createElement("div")
        elementTag.classList.add("message")
        elementTag.innerHTML = `
                <div>
                    <p>${item.content}</p>
                    <div class="message-date">
                        <p> ${moment(item.date).format("MMM Do YY")}</p>
                        <p>${moment(item.date).format("h:mm:ss a")}</p>
                    </div>
                </div>
                <div class="message-icon">
                    <span id="open" data-id="${item.id}">
                        <i class="fa-solid fa-folder-open"></i>
                        Open Message
                    </span>
                    <span id="edit" data-id="${item.id}">
                        <i class="fa-solid fa-pen-to-square"></i>
                        Edit Message
                    </span>
                    <span id="delete" data-id="${item.id}">
                        <i class="fa-solid fa-trash"></i>
                        Delete Message
                    </span>
                </div>`
        document.querySelector(".loc-note").appendChild(elementTag)
    })
    const del = [...document.querySelectorAll("#delete")]
    del.forEach((item) => {
        const id = item.dataset.id
        const indexId = message.findIndex((item) => item.id === id)
        item.addEventListener("click", () => {
            message.splice(indexId,1)
            document.querySelector(".loc-note").innerHTML = ""
            localStorage.setItem("message", JSON.stringify(message))
            showMessage(message)
        })
    })
    const edit = [...document.querySelectorAll("#edit")]
    edit.forEach((item) => {
        const id = item.dataset.id
        const indexId = message.find((item) => item.id === id)
        item.addEventListener("click", () => {
            const editDiv = document.querySelector(".div-edit")
            editDiv.style.transform = "translateY(0px)"
            cover.style.display = "block"
            let editTag = ''
            editTag += `<form id="form-edit" data-id="${indexId.id}">
                <textarea name="inputEdit" id="input-edit" cols="40" rows="10"">${indexId.content}</textarea>
                <button class="btn-edit" " >Edit Note</button>
                </form>`
            editDiv.innerHTML = editTag
            const formEdit = [...document.querySelectorAll("#form-edit")]
            formEdit.forEach((item) => {
                const id = item.dataset.id
                const indexId = message.find((item) => item.id === id)
                cover.addEventListener("click",() => {
                    cover.style.display = "block"
                })
                item.addEventListener("submit", (e) => {
                    e.preventDefault()
                    indexId.content = e.target.elements.inputEdit.value
                    console.log(indexId.content)
                    document.querySelector(".loc-note").innerHTML = ""
                    showMessage(message)
                    localStorage.setItem("message", JSON.stringify(message))
                    console.log(message)
                    editDiv.style.transform = "translateY(-1000px)"
                    cover.style.display = "none"

                })
            })

        })
    })
    const open = [...document.querySelectorAll("#open")]
    open.forEach((item) => {
        const id = item.dataset.id
        const indexId = message.find((item) => item.id === id)
        item.addEventListener("click", () => {
            const openDiv = document.querySelector(".div-open")
            openDiv.style.transform = "translateY(0px)"
            cover.style.display = "block"
            const openContent = document.querySelector(".div-open div")
            openContent.textContent = `${indexId.content}`
            const closeOpenDiv = document.querySelector(".fa-xmark")
            closeOpenDiv.addEventListener("click", () => {
                openDiv.style.transform = "translateY(-1000px)"
                cover.style.display = "none"
            })
            cover.addEventListener("click", () => {
                openDiv.style.transform = "translateY(-1000px)"
                cover.style.display = "none"
            })
        })

    })

}

const message = get()
const form = document.querySelector("#form-message")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    contentMessage = e.target.elements.inputNote.value
    addMessage(message)
    localStorage.setItem("message", JSON.stringify(message))
    document.querySelector(".loc-note").innerHTML = ""
    showMessage(message)
    e.target.elements.inputNote.value = ''
})

showMessage(message)