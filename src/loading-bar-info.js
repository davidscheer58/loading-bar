import{ LitElement, html, css} from 'lit'; 
import "./loading-bar.js";
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js';
import '@lrnwebcomponents/count-up/count-up.js'; 



class LoadingBarInfo extends IntersectionObserverMixin(LitElement) { 
    static get properties() {
      let prop = {};
      if(super.properties) {
        prop = super.properties; 
      }
      return{
        ...prop,
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
        background: grey; 

    }

    
    `;

    constructor(){
        super(); 
      this.header = 'Final Project'; 
      this.loading = []; 
      this.multipleBars(); 

    }
    multipleBars(){
        const address = new URL ('/api/bar-api.js' , import.meta.url).href; 
        fetch(address). then((response) => {
            if(response.ok){
                return response.json(); 

            }
            return[]; 
        }).then((data)=>{
            this.loading= data; 
        });

    }
    
    render() { 
        return html` 
        ${this.elementVisible ? html`
        <div class = "infoTitle"> 
            how long to fill up  bars
    </div> 
    <div class = "overallBackground"> 
        ${this.bar.map(bars => html `
        <loading-bar title= "${bars.title}" endTime= "${bars.endTime}" startTime="${bars.startTime}" widthSize="${bars.widthSize}">
    </loading-bar> 
        `)}
        `:``}
        `
    }
}


customElements.define('loading-bar-info', LoadingBarInfo);