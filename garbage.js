//MUST HAVE - CREATE A TEMPLATE TAG
var template_garbage = document.createElement("template"); //<template> </template> RULE

//To-do - CREATE THE UI HERE!
template_garbage.innerHTML = `
<style>
</style>

<div id = "garb">
<img src='./imgs/sun.svg' />
</div>

`;

//MUST HAVE - CREATE A CLASS WITH HTMLELEMENT POWERS (interfaces/functionalities)
class TheGarbage extends HTMLElement {

    //MUST HAVE - CREATE A CONSTRUCTOR TO DO INITAL ASSOCIATIONS
    constructor(){
        super(); //pass on the HTMLElement super powers!
        this.attachShadow({mode:"open"}) //Attach it to the shadowRoot

        //To-do - CREATE THE STATES FOR THE UI HERE!
    }

    //MUST HAVE - FUNCTION THAT RUNS AFTER IT'S CONNECTED
    connectedCallback(){
        this.shadowRoot.appendChild(template_garbage.content.cloneNode(true)); //use the template to make a clone
        if (this.getAttribute("garbage")) {
            this.querySelector('#garb').changeGarbage(`./imgs/${this.getAttribute('garbage')}.svg`);
            }
          

        
    }

    //To-do - CREATE THE FUNCTIONALITIES HERE!
    changeGarbage(img = "./imgs/sun.svg"){
        this.shadowRoot.querySelector('#bg > img').src = img;
      }
}

//MUST HAVE - define the tag for the custom elements
customElements.define("some-garbage", TheGarbage)