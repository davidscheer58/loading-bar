import{ LitElement, html, css} from 'lit'; 
import "./loading-bar.js";
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';
import '@lrnwebcomponents/count-up/count-up.js'; 



class LoadingBarInfo extends IntersectionObserverMixin(LitElement) { 
    static get properties() {
      let props = {};
      if(super.properties) {
        props = super.properties; 
      }
      return{
        ...props,
        loading:{type: Array},
      }

    }
    static styles = css`
    .infoTitle{
        display: column; 
    }

    .overallBackground{
        border: 2px solid black;
        padding: 5px;
        background: #474847ed;

    }

    
    `;

    constructor(){
        super(); 
      this.header = 'Final Project'; 
      this.loading = []; 
      this.multipleBars(); 

    }
    multipleBars(){
        const address = '../api/bar-api'; 
        fetch(address).then((response) => {
            if(response.ok){
                return response.json(); 
            }
            return[]; 
        }).then((data)=>{
            this.loading= data; 
            console.log(this.loading);
        });

    }
    
    // render() { 
    //     return html` 
    //     ${this.elementVisible ? html`
    //     <div class = "infoTitle"> 
    //         how long to fill up  bars
    // </div> 
    // <div class = "overallBackground"> 
    //     ${this.loading.map(loading => html `
    //     <loading-bar title= "${loading.title}" endTime= "${loading.endTime}" startTime="${loading.startTime}" widthSize="${loading.widthSize}">
    // </loading-bar> 
    //     `)}
    //     `:``}
    //     `
    // }

    render() { 
        return html` 
        <div class = "infoTitle"> 
            how long to fill up  bars
        </div> 
        <div class = "overallBackground"> 
            ${this.loading.map(loading => html `
            <loading-bar title= "${loading.title}" endTime= "${loading.endTime}" startTime="${loading.startTime}" widthSize="${loading.widthSize}">
            </loading-bar> 
        </div>
        `)}
        `
    }
}


customElements.define('loading-bar-info', LoadingBarInfo);