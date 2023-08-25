const form = document.querySelector(`form`);
const chatmsg = document.querySelector('.chat-message');
const input = document.querySelector('.sendMessage');
const btn = document.querySelector('.cross-button');
form.addEventListener("submit", sendmsg);

const audio = new Audio();
audio.src = "music/systumm.mp3";


function sendmsg(e){
    e.preventDefault()

    if(input.value !== ""){
        var messageDiv = document.createElement("div");
        messageDiv.className = 'message';

        var img = document.createElement("img");
        img.src = "images/user4.jpeg";

        var msgInfo = document.createElement("div");
        msgInfo.className = "message-info";

        var userInfo = document.createElement("h4");
        userInfo.innerHTML = "Modi Ji";

        let span  = document.createElement("button");
        span.innerHTML = "&times;";
        span.className = 'cross-button';
        span.addEventListener("click", function(){
            
            const answer = confirm("Are you sure you want to delete this message ? ")

            if(answer){
                let parent = this.parentNode.parentNode;
            let child = this.parentNode;
            parent.removeChild(child);
            }
            else{
                return;
            }
            
        
        })
        
        

        var msgtimeStamp = document.createElement("span");
        msgtimeStamp.className = "timestamp";


        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;

        const day = date.getDate();

        msgtimeStamp.innerHTML = day + "/" +"0"+ month + "/" + year;

        const message = document.createElement("p");
        message.innerHTML = input.value;
        input.value = "";
        

        userInfo.appendChild(msgtimeStamp);
        msgInfo.appendChild(userInfo);
        msgInfo.appendChild(message);

        messageDiv.appendChild(img);
        messageDiv.appendChild(msgInfo);
        messageDiv.appendChild(span);

        
        
        chatmsg.appendChild(messageDiv);
        
        chatmsg.scrollBy(0,10000);


    }
}

