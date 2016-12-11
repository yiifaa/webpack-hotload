import './index.less'
import Vue from 'vue'
import hello from './components/Hello.vue'
import template from './index.html'

//  定义初始化函数
let init = function () {
    /**
    let template = `<div>
                        <h1 v-text="message"></h1>
                        <hello></hello>
                    </div>`,
     **/
    //  初始化根节点
    let App = Vue.extend({
        
        template,

        data () {
            return {
                message : 'Hello, 累!'
            }
        },

        components : {
            //  hello对象只能作为Vue子组件，不能直接初始化
            hello
        }
    })
    
    //  初始化应用
    new App({
        el : '#appRoot'
    })
}
//  执行函数
init()