import { LitElement, html, css,unsafeCSS } from 'lit'; 
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin';
import '@lrnwebcomponents/count-up/count-up.js'; 


class LoadingBar extends LitElement {
  static get properties() { 
    let props= {}; 
    if (super.properties) {
      props = super.properties; 
    }
    return { 
      startTime: {type: Numbrer },
      endTime: {type: String} , 
      title: {type: String},
      widthSize: {type: Number} 
    }
  }
  static styles = css`
  
  
  .bar-wrapper {
      border: 1px solid #8e8e8e;  
      justify-content: space-between; 
      display: flex; 
      display: inline-block; 
    }
  



    .styling {
      width:40px; 
      height: 70px;
      display: flex; 
      padding: 5px; 
      border-radius: 20px; 
      margin: 3px; 
      

    }


    

    .text{
      padding: 5px; 

    }

    .loading-bar-prop{
      border-radius: 5px; 
      background: linear-gradient(to right, red, yellow); 
      height: 40px; 
      width: 440px; 
      animation-timing-function: linear; 
      animation-fill-mode: normal; 
      animation-delay: 0s; 
      animation-duration: 5s; 
      animation-name:fill; 


    }

    @keyframes fill{
      0% {width: 0%;}
      100%{width: 97.8;}

    }

    
  `;

  constructor() {
    super(); 
    this.title = 'ist 256' 
    this.startTime= 0; 
    this.endTime = 20; 
    this.widthSize = 40; 


  }

  render() {
    return html`
     ${this.elementVisible ? html`
     <div class = 'wrapper'> 
      <div class ="test" > 
        ${this.title} 
  </div> 
  <div class= "barStyle" style= "width: ${this.widthSize}%">
  <div class = "bar" style= "animation-duration: ${this.endtime}s; width: 100%; animation-delay: ${this.startTime}s"> 
  </div> 
  </div> 
  <count-up start="${this.startTime}" end="${this.endTime}" duration= "${this.endTime}" noeasing= "true" decimalPlaces= "2" ></count-up>
  </div> 
  ` : ``};
  `
     
     
  }
}

customElements.define('loading-bar', LoadingBar);