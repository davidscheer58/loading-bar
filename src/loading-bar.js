import { LitElement, html, css } from 'lit';


class LoadingBar extends LitElement {
  static properties = {
  }

  static styles = css`
  

    .loading-bar {
      width:0%; 
      height: 70px;
      border-radius: 20px; 
      margin: 3px; 
      background: linear-gradient(to right, red, purple); 
      transition: width 2s linear; 

      

    }

    .bar-wrapper {
      border: 1px solid #8e8e8e; 
      border-radius: 20px; 
      justify-content: space-between; 
      display: flex; 
      width: 50%; 
      display: inline-block;
      vertical-align: middle; 
    }

    
  `;

  constructor() {
    super();

  }

  render() {
    return html`
     <div class="bar-wrapper">
      <div class="loading-bar"></div> 
      <div>
    `;
  }
}

customElements.define('loading-bar', LoadingBar);