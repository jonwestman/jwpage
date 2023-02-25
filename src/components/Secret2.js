
// Easter Egg nr 2

export const SecretComponent2 = () =>{
    let keyInput = ""

    document.addEventListener("mousedown", (key) => {
        keyInput += key.key
        if(myKey === keyInput){
            // Modal goes here
        }
        else{
            setTimeout(() =>{
                keyInput = ""
            },2000)
        }
    })
}