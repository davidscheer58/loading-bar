import{ LitElement, html, css } from "lit"; 
import "./loading-bar"

export class LoadingBarApp extends LitElement{
    static get tag(){
        return "loadingbar-list"; 
    }

    static get properties(){
        return{
            list: {type: Array} , 
        };
    }
    constructor(){
        super(); 
        this.list = []; 
        this.updateLoadingBars(); 
    }
    updateLoadingBars(){
        const address= "../assets/loading-bar-map.json"; 
        fetch(address)
        .then((response) => {
            if(response.ok){
                return response.json(); 
            }
            return []; 
        })
        .then((data) => {
            this.list = data; 
        })
    }
    static get styles() {
        return html`
        `; 
    }
}
customElements.define(LoadingBarApp.tag, LoadingBarApp); 