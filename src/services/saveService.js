const WORD_STREAK = "word_streak"

const readWordStreak = () => {
    return localStorage.getItem(WORD_STREAK)
}

const setWordStreak = (value) => {
    localStorage.setItem(WORD_STREAK, value)
}