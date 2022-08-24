const menuBtn = document.querySelector('.menu_icon')
const menu = document.querySelector('.menu_list')

if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active')
        menu.classList.toggle('active')
    })
    menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.toggle('active')
            menuBtn.classList.toggle('active')
        })
    })
}
// Плавный переход к определенному блоку
const anchors = document.querySelectorAll('a[href*="#"]');
anchors.forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    })
})
// пометка названия блоков во время скроллинга
const createSelectedSection = (root) => {
    const nav = root.querySelector('nav');
    root.querySelectorAll('.observe').forEach(s => {
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
                    let id = entry.target.getAttribute('id');
                    nav.querySelector(`a[href="#${id}"]`).classList.add('active')
                }

            })
        }, {}).observe(s);
    })
}
createSelectedSection(document.querySelector('#page'))