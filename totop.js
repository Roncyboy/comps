//MUST HAVE - CREATE A TEMPLATE TAG
var template_totop = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_totop.innerHTML = `
<style>
  #click {
    display: none;
    position: fixed; 
    bottom: 20px; 
    right: 30px; 
    z-index: 99; 
    border: none; 
    outline: none; 
    background-color: green; 
    color: white; 
    cursor: pointer; 
    padding: 15px; 
    border-radius: 10px; 
    font-size: 18px; 
  }
  #click:hover {
    background-color: #555;
    transition: 1s;
  }
</style>

<div id = "click"> 
    ^ 
</div>
`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class ToTop extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_totop.content.cloneNode(true)); //use the template to make a clone
        this.shadowRoot.querySelector("#click").onclick = () => this.scrollTop();
        window.onscroll =() => this.scrollFunction();
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    scrollTop () {
        console.log("test");
        window.scrollTo({top: 0, behavior: 'smooth'});
        // document.documentElement.scrollTop = 0; 
    }

    scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          this.shadowRoot.querySelector("#click").style.display = "block";
        } else {
            this.shadowRoot.querySelector("#click").style.display = "none";
        }
      }
}


//MUST HAVE - define the tag for the custom elements
customElements.define("to-top", ToTop)