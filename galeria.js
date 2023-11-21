const panels = document.querySelectorAll('.panel')

panel.forEach(panel=> {
     panel.addEvenListener('click', () => {
        removeActiveClasses()
        panel.clasLit.add('active')
     })
})

function removeActiveClasses() {
    panel.forEach(panel => {
        panel.clssList.remove('active')
    })
}