// pin login class

class PinLogin{
    constructor({el,loginEndPoint,redirect,maxNumbers = Infinity}){
        this.el = {
            main:el,
            numPad:el.querySelector('.pin-login__numpad'),
            textDispaly:el.querySelector('.pin-login__text'),

        }
        this.loginEndPoint = loginEndPoint;
        this.redirectTo = this.redirectTo;
        this.maxNumbers = maxNumbers;
        this.value = "";

        this._generatePad();

    }

    _generatePad(){
        const padLayout = [
            "1","2","3",
            "4","5","6",
            "7","8","9",
            "backspace","0","done",
        ];

        padLayout.forEach(key =>{
            const insertBreak = key.search(/[369]/)!==-1; 
            const keyEl = document.createElement('div');

            keyEl.classList.add("pin-login__key")

            // if the key is not a number add this class(force to add)
            keyEl.classList.toggle('material-icons',isNaN(key))

            keyEl.textContent = key;
            keyEl.addEventListener('click',()=>{
                this._handlekeyPres(key)
            })
            this.el.numPad.appendChild(keyEl);

            if(insertBreak){
                this.el.numPad.appendChild(document.createElement('br'))
            }
        })
    }

    _handlekeyPres(key){
        switch(key){
            case'backspace':
            this.value = this.value.substring(0,this.value.length-1);
            break;
            
            case'done':
            this._attemptLogin();
            break;
            default :
            if(this.value.length <this.maxNumbers && !isNaN(key)){
                this.value += key;
            }
            break;
        }

        this._updateValueText();
      }

    _updateValueText(){
        // [....]
        console.log(this.value);
        this.el.textDispaly.value = "_".repeat(this.value.length);
        // remover eerror
        this.el.textDispaly.classList.remove('pin-login__text--error')
    }
    _attemptLogin(){
        if(this.value.length){
            fetch(this.loginEndPoint,{
                method:'Post',
                headers:{
                    'Content-Type':"application/x-www-form-urlencoded"
                },
                body:`pincode=${this.value}`
            }).then(response =>{
                console.log(response.status);
                if(response.status ===200){
                    window.location.href = this.redirectTo;
                }else{
                    this.el.textDispaly.classList.add('pin-login__text--error')
                }
            })
        }
    }
}
