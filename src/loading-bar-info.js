import{ LitElement, html, css} from 'lit'; 
import "./loading-bar";
import '@lrnwebcomponents/count-up/count-up.js'; 



class LoadingBarInfo extends LitElement { 
    static properties = {
        bar: {type: Array},

    }
    static styles = css`

    
    `;

    constructor(){
        super(); 
      this.header = 'Final Project'; 
      this.bar = []; 
      this.createBars(); 

    }
    createBars(){
        const address = new URL ('../assets/bar-api.js' , import.meta.url).href; 
        fetch(address). then((response) => {
            return response.json(); 
            
        }).then((data)=> {
            this.bar= data; 
        }); 
    }
    
    render(){
        return html`
        <div> 

            ${this.bar.map(bars => html`
            <loading-bar title= "${bars.title}" endTime= "${bars.endTime}" startTime= "${bars.startTime}" widthSize="${this.widthSize}">
    </loading-bar> 
     <count-up></count-up> 
     
            
            `)}
        `; 

    }
}



customElements.define('loading-bar-info', LoadingBarInfo); 