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

    .fill{
        height: 120vh; 
        display: flex; 
        flex-direction: column; 
        justify-content: center; 
        align-items: center; 
        background-color: #888585
        padding: 1rem; 
        box-sizing: border-box; 
    }
    h1{ 
        font-size: 2rem; 

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

    render() { 
        return html` 
        <div class="fill">
            <h1>Welcome to my final project</h1> 
            <p>All I am waiting on is for your scroll to see my animation.</p> 
    </div> 


    ${this.elementVisible ? html `
    <div class= "infoTitle"> 
    </div> 
    ${this.loading.map(loading => html `
            <loading-bar title= "${loading.title}" endTime= "${loading.endTime}" startTime="${loading.startTime}" widthSize="${loading.widthSize}">
            </loading-bar> 
        </div>

        
        `)}
        `:`
    
    `}`
    
    }
}


customElements.define('loading-bar-info', LoadingBarInfo);