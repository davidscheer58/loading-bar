import { LitElement, html, css } from 'lit'; 
import { IntersectionObserverMixin } from '@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin';
import '@lrnwebcomponents/count-up/count-up.js'; 


class LoadingBar extends LitElement {

  static properties=
   { 
    startTime: {type: String}, 
    endTime: {type: String}, 
    title: {type: String}, 
    widthSize: {type: String}

   }

  static styles = css`
  
  
  .bar-wrapper {
    display: flex;
    border: 2px solid black;
    padding: 5px;

    }
  



    .styling {
      height: 40px;
    width: 440px;
    display: flex;
    padding: 5px;
    background: grey;
    border-radius: 5px
      

    }


    

    .text{
      padding: 10px; 

    }

    .loading-bar-prop{
      border-radius: 5px; 
      background: linear-gradient(to right, blue, purple); 
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

    @media (prefers-reduced-motion) 
    {
      .loading-bar-prop{
        animation-timing-function:steps(2,jump-end)!important; 

      }
      .counter
      {
        visibility:hidden; 
      }
    }

    
  `;

  constructor() {
    super(); 
    this.title = 'IST Final Project' 
    this.startTime= 0; 
    this.endTime = 28; 
    this.widthSize = 40; 


  }

  render() {
    return html`


<div class= 'bar-wrapper'> 
  <div class = "text"> 
    ${this.title}
  </div> 
  <div class = "styling" style = "width: ${this.widthSize}%">
  <div class = "loading-bar-prop" style= "animation-duration: ${this.endTime}s; width: 100%; animation-delay: ${this.startTime}s">
  </div>
  </div>
  <count-up start="${this.startTime}" end="${this.endTime}" duration="${this.endTime}" noneasing="true" decimalPlaces="2"></count-up>
  </div> 


  

  `
     
     
  }
}

customElements.define('loading-bar', LoadingBar);