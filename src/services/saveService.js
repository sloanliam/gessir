function saveLoss() {
    localStorage.setItem("streak", "0")
}

function saveWin() {
    if (localStorage.getItem("streak")) {
        let streak = parseInt(localStorage.getItem("streak"))

        localStorage.setItem("streak", (streak + 1).toString())
    } else {
        localStorage.setItem("streak", "1")
    }
}

function getStreak() {
    if (localStorage.getItem("streak")) {
        return localStorage.getItem("streak")
    } else {
        localStorage.setItem("streak", "0")
        return localStorage.getItem("streak")
    }
}

export { getStreak, saveLoss, saveWin }