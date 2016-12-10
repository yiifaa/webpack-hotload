import $ from 'jquery'
import { add } from './utils/MathUtils'

let init = function () {
    let message = add('Hello,', ' World!!'),
        dom = $(`<h1>${message}</h1>`)
    $('body').append(dom)
    dom.css({
        color : 'blue'
    })
}
init()

export { init }