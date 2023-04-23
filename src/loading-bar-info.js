import{ LitElement, html, css} from 'lit'; 
import "./loading-bar";
import "./count-up.js"; 
import { IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"; 

class LoadingBarInfo extends IntersectionObserverMixin(LitElement) { 
    static properties = {
        title: {type: String},
        duration: {type: Number }, 
        start: { type: Number}, 
        end: {type: Number}, 
        decimals: {type: Number}

    }
    static styles = css`

    .wrapper{
        text-align: center; 
        margin-top: 20px; 
        position: relative; 
    }

    .title-bar{
        display: inline-block; 
        color: #8e8e8e
        min-width: 180px; 
    }

    .bar{
        position: center;
        margin-left: 50px; 

    }

    .timer{
        position: aboslute; 
        left: 79%; 
        bottom: 36%; 

    }

    @media (max-width: 500px){ 
        .wrapper {
            transform: scale(0.7); 
        }
        .counter{
            left: 88%; 
        }
    }
    
    @media (max-width: 500px) and (min-width: 500px) {
        .wrapper { 
            transform: scale(0.7); 
        }
        .counter{
            left:84%; 
        }
    }
    
    `;

    constructor(){
        super(); 
        this.title = 'Almost done'; 
        this.duration = 10; 
        this.start= 0; 
        this.end = 10; 
        this.decimals = 2; 
    }
    
    render(){
        return html`
        <div class = "wrapper"> 
            <div class= "title-bar">
                <p>${this.title}</p>
    </div> 
    <loading-bar class= "bar" ></loading-bar> 
    <count-up
    class="counter"
    duration=${this.duration} 
    start=${this.start} 
    end=${this.end} 
    decimals=${this.decimals} 
    noeasing=true>
    </div> 
        
        `; 

    }
updated(propertiesChanged) {
    propertiesChanged.forEach((oldValue, propName) => {
        if(propName == "elementVisible" && this[propName]) {
            const bar = this.shadowRoot.querySelector('.bar').shadowRoot.querySelector(".loading-bar"); 
            bar.style.width= "99.25%"; 
            bar.style.transition = "width " + this.duration + "s linear"; 
        }
    });
}




}

customElements.define('loading-bar-info', LoadingBarInfo); 