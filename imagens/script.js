class Validator {

    constructor() {
        this.validations = [
            'data-min-length',

        ]
    }

    validate(form){
        let inputs = form.getElementsByTagName('input');

        let inputsArray = [...inputs];

        inputsArray.forEach(function(input) {
          for(let i = 0; this.validations.length > i; i++) {
            if(input.getAttribute(this.validations[i]) != null) {
             
                let method = this.validations[i].replace('data', "").replace('-', '');

            }
          }

        }, this);
    }

    minlength() {

    }
}

let form = document.getElementById('register-form');
let submit = document.getElementById('btn-submit');
let Validator = new Validator();

submit.addEventListener('click', function(e) {
    e.preventDefault();
    Validator.validate(form);

});