let tostDiv = document.getElementById('toastNotification');
        let successMsg = `<i class="fa-solid fa-circle-check"></i> Successfully submited`;
        let errorMsg = `<i class="fa-solid fa-circle-xmark"></i> please fix the error`;
        let invalidMsg = `<i class="fa-solid fa-circle-exclamation"></i> Invalid Input, check again`;


        function notification(msg){
            let toast = document.createElement("div");
            toast.classList.add('toast');
            toast.innerHTML = msg;
            tostDiv.appendChild(toast)

            if(msg.includes('error')){
                toast.classList.add('error')
            }
            if(msg.includes('Invalid')){
                toast.classList.add('invalid')
            }
            setTimeout(()=>{
                toast.remove();
            }, 5000)
        }