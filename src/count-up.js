import { LitElement, html, css } from "lit"; 
import {IntersectionObserverMixin } from "@lrnwebcomponents/intersection-element/lib/IntersectionObserverMixin.js"; 
import {CountUP } from "./countup.js"; 


/**
 * `count-up`
 * `count up js wrapper with minimal styling` 
 * @litElement
 * @demo demo/index.html
 * @element count-up 
 */

class CountUpElement extends IntersectionObserverMixin(LitElement) { 
    static get styles (){
        return [
            css`
            :Host{
                display:inline-flex; 
                --count-up-color: #00000; 
            }
            :host([hidden]) {
                display: none; 
            }
            .wrapper { 
                display: block; 
                text-align: center; 
                width: 100%; 
                height: 100%; 
            }

            #counter {
                font-weight: var(--count-up-number-font-weight); 
                font-size: var(--count-up-number-font-size); 
                font-family: "Inter var experimental", "Inter var", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
                color: #202020; 

            }
            
            
            `,
        ];
    }
render() {
    return html`
    <div class= "wrapper"> 
        <slot name = "prefix"></slot> 
        <div id= "counter"></div> 
        <slot name = "suffix"></slot> 
</div>
    `; 
}


  // haxProperty definition
  static get haxProperties() {
    return {
      canScale: true,
      canPosition: true,
      canEditSource: true,
      gizmo: {
        title: "Count up",
        description: "count up js wrapper with minimal styling",
        icon: "icons:android",
        color: "green",
        groups: ["Up"],
        handles: [],
        meta: {
          author: "HAXTheWeb core team",
          owner: "The Pennsylvania State University",
        },
      },
      settings: {
        configure: [
          {
            property: "start",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "end",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "duration",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "noeasing",
            description: "",
            inputMethod: "boolean",
          },
          {
            property: "decimalplaces",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "separator",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "decimal",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "prefix",
            description: "",
            inputMethod: "textfield",
          },
          {
            property: "suffix",
            description: "",
            inputMethod: "textfield",
          },
        ],
        advanced: [],
      },
      saveOptions: {
        unsetAttributes: ["element-visible"],
      },
    };
  }




  static get properties() {
    return {
      ...super.properties,

      /**
       * Starting point for counting
       */
      start: {
        type: Number,
        reflect: true
      },
      /**
       * End point for counting stopping
       */
      end: {
        type: Number,
        reflect: true
      },
      /**
       * Duration to count
       */
      duration: {
        type: Number,
        reflect: true
      },
      /**
       * Disable easing animation
       */
      noeasing: {
        type: Boolean,
      },
      /**
       * decimal places to show
       */
      decimalplaces: {
        type: Number,
        reflect: true
      },
      /**
       * separator for 100s groupings
       */
      separator: {
        type: String,
      },
      /**
       * decimal point character
       */
      decimal: {
        type: String,
      },
      /**
       * prefix string before the number counting
       */
      prefixtext: {
        type: String,
      },
      /**
       * suffix string after the number counting
       */
      suffixtext: {
        type: String,
        reflect: true
      },
      thresholds: {
        type: Array,
      },
      rootMargin: {
        type: String,
        attribute: "root-margin",
      },
      ratio: {
        type: Number,
        reflect: true,
      },
      elementVisible: {
        type: Boolean,
      },
    };
  }

  /**
   * Store the tag name to make it easier to obtain directly.
   * @notice function name must be here for tooling to operate correctly
   */

  static get tag(){
    return "count-up"; 
  }

  constructor(){ 
    super(); 
    this.start =0; 
    this.end = 10; 
    this.duration = 10; 
    this.noneasing= true; 
    this.decimalplaces= 2; 
    this.seperator = " , "; 
    this.decimal= "."; 
    this.prefixtext = " " ; 
    this.suffixtext = "s "; 
  }
/** 
 * LitElement ready
 */


firstUpdated() {
    const options = {
      startVal: this.start,
      decimalPlaces: this.decimalplaces,
      duration: this.duration,
      useEasing: !this.noeasing,
      separator: this.separator,
      decimal: this.decimal,
      prefix: this.prefixtext,
      suffix: this.suffixtext,
    };
    this._countUp = new CountUp(
      this.shadowRoot.querySelector("#counter"),
      this.end,
      options
    );
  }
  /**
   * When our interection element claims we are visible then
   * we can start counting
   */
  updated(propertiesChanged) {
    propertiesChanged.forEach((oldValue, propName) => {
      if (propName == "elementVisible" && this[propName]) {
        this._countUp.start();
      }
    });
  }

}

customElements.define(CountUpElement.tag, CountUpElement);
export { CountUpElement, CountUP}; 