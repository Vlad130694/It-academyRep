import { Component } from "../../core";
import './button.scss';

export class Button extends Component {
    constructor(){
    super();
    this.state = {
        // isActive: false,
        // label: 'Click',
        count: 1,
        plus:1,
        isActive: false,
    }
    }

// registerEvents(){
//     this.addEventListener('click', () => {
//         this.setState((state) => {
//             return {
//                 ...state,
//                 isActive: !this.state.isActive
//             }
//         })
//     })

// }




plus() {
    this.setState((state) => {
        return {
            ...state,
            count: state.count > 0 ? this.state.count += 1 : this.state.count
        }
    })
}

minus() {
    this.setState((state) => {
        return {
            ...state,
            count: state.count > 0 ? this.state.count -= 1 : this.state.count
        }
    })
}



registerEvents() {
    this.addEventListener('click', (evt) => {
        if(evt.target.closest('.plus')){
            this.plus()
        }
        if(evt.target.closest('.minus')){
            this.minus()
        }
    })
}







render(){
    // return `
    // <button class='${this.state.isActive ? 'active' : ''}'>click</button>
    // `

    return `
    <button class='plus'>+</button>
    <span>${this.state.count}</span>
    <button class='minus'>-</button>`
}

}

customElements.define('my-button', Button)