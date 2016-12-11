let init = function () {
    let message = 'Hello, 累!',
        dom = $(`<h1>${message}</h1>`)
    $('body').append(dom)
    dom.css({
        color : 'blue'
    })
}
init()