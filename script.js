document.addEventListener('DOMContentLoaded', function () {

    function toggleTheme(event) {
        if (event.target.checked) {
            document.documentElement.classList.remove('theme-light')
            document.documentElement.classList.add('theme-dark')
        } else {
            document.documentElement.classList.remove('theme-dark')
            document.documentElement.classList.add('theme-light')
        }
    }

    document.getElementById('switcher').addEventListener('change', toggleTheme)
})