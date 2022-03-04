//MUST HAVE - CREATE A TEMPLATE TAG
var template_circle = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_circle.innerHTML = `
<style>
.border {
    margin: 50px auto;
    width: 150px;
    height: 150px;
    background: #e6e2e7;
    border-radius: 50%;
  }

  .border .circle .mask,
  .border .circle .fill {
    width: 150px;
    height: 150px;
    position: absolute;
    border-radius: 50%;
  }

  .border .circle .mask {
    clip: rect(0px, 150px, 150px, 75px);
  }

  .border .circle .mask .fill {
    clip: rect(0px, 75px, 150px, 0px);
    background-color: #000000;
  }
  .border .circle .mask.full,
  .border .circle .fill {
    animation: fill ease-in-out 3s;
    transform: rotate(126deg);
  }
  @keyframes fill {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(126deg);
    }
  }

  .border .num {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    background: #fff;
    line-height: 130px;
    text-align: center;
    margin-top: 10px;
    margin-left: 10px;
    position: absolute;
    z-index: 100;
    font-weight: 700;
    font-size: 2em;
  }
</style>
<div class="border">
  <div class="circle">
    
    <div class="mask full">
      <div class="fill"></div>
    </div>
   
    <div class="mask half">
      <div class="fill"></div>
    </div>
    
    <div class="num">
      70%
    </div>
    
  </div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class PrctCircle extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_circle.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector(".border").style.backgroundColor = (this.getAttribute("bg"));
        this.shadowRoot.querySelector(".num").style.backgroundColor = (this.getAttribute("bg"));
        this.shadowRoot.querySelector(".border .circle .mask .fill").style.backgroundColor = (this.getAttribute("color"));
        

        if(this.getAttribute("num")){
          this.shadowRoot.querySelector(".num").innerText = this.getAttribute("num");
          this.shadowRoot.querySelector(".num").style.HTMLElement = `
          .border .circle .mask.full,
          .border .circle .fill  {
            transform: rotate(${this.getAttribute("num")*180});
          }
          @keyframes fill {
            100% {
              transform: rotate(${this.getAttribute("num")*180});
            }
          }
          `
        }
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
}

//MUST HAVE - define the tag for the custom elements
customElements.define("prct-circle", PrctCircle)