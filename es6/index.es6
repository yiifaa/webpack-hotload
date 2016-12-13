import './index.less'
import Vue from 'vue'
import hello from './components/Hello.vue'
import panel from './components/Panel.vue'
import template from './index.html'

/**
 * 程序初始化函数
 * @function init
 * @param {Object} options - 程序启动的配置参数
 * @param {string} [options.el=#appRoot] - 根组件挂载位置，遵守CSS选择符规范
 * @tutorial index
 */
let init = function (options) {
    /**
    let template = `<div>
                        <h1 v-text="message"></h1>
                        <hello></hello>
                    </div>`,
     **/
    let el = options.el
    let App = Vue.extend({
        
        template,

        data () {
            return {
                message : 'Hello, 累!'
            }
        },

        components : {
            //  hello对象只能作为Vue子组件，不能直接初始化
            hello,
            panel
        },
        
        created () {
            
        }
    })
    
    //  初始化应用
    new App({
        el
    })
}
//  执行函数
init({
    el : '#appRoot'
})