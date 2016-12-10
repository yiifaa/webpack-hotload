let init = function () {
    let message = 'Hello, Yiifaa!',
        dom = $(`<h1>${message}</h1>`)
    $('body').append(dom)
    dom.css({
        color : 'blue'
    })
}
init()