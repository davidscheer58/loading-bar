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
        font-family:"Inter var experimental", "Inter var" , -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    }

    .overallBackground{
        border: 2px solid black;
        padding: 5px;
        background: #c8cbc8ec;

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
            Module Count:50000
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