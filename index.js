let myJson;
let content = '';

const curUser = document.querySelector(".currentUser");
const curUserBtn = document.querySelector(".currentUser button");
const profile = document.querySelector(".profile img");
const container = document.querySelector(".container");
const container1 = document.querySelector(".c1");
const sendBtn = document.querySelector(".currentUser button");


let deleteBtn;
let replyBtn;

const getData = async () => {
    const request = await fetch('data.json');
    const data = await request.json();
    myJson = data;
    getContainer();
    getReplies();
    getUserReply();
    deleteComment();
    return myJson;
}

getData()





function getContainer() {
    for (const i of myJson.comments) {
        const html =  
                    `<div class="container1">
                    <div class="subcontainer">
                        <div class="score">
                            <img src="images/icon-plus.svg">
                            <p><b>${i.score}</b></p>
                            <img src="images/icon-minus.svg">
                        </div>
                        <div>
                            <div class=top-row>
                                <div class="row1">
                                <img src=${i.user.image.png}>
                                <p><b>${i.user.username}</b></p>
                                <p class="createdAt">${i.createdAt}</p>
                            </div>
                            <div class="reply">
                                <img src="images/icon-reply.svg">
                                <p>Reply</p>
                            </div>
                        </div>
                        <p class="content">${i.content}</p>
                    </div>
                </div>`;
                container.insertAdjacentHTML("beforeend", html);
                replyBtn = document.querySelectorAll(".reply")
            } 

        }
function getReplies() {
    for (let j = 0; j < myJson.comments.length; j++) {
        for (let k = 0; k < myJson.comments[j].replies.length; k++) {
            let RorEbutton, p;
            if (myJson.comments[j].replies[k].user.username === 'juliusomo')  {
                RorEbutton = `<img src="images/icon-delete.svg">
                                <p style="color:red; margin-right: 1rem">Delete</p>`;
                p = `
                <img src="images/icon-edit.svg">
                <p>Edit</p>`
            } else {
                RorEbutton = `<img src="images/icon-reply.svg">`;
                p = `<p>Reply</p>`
            }
            const replyHtml = 
            `<div class="container1 c1" style="width: 90%; margin-left: 10%">
                <div class="subcontainer">
                    <div class="score">
                        <img src="images/icon-plus.svg">
                        <p><b>${myJson.comments[j].replies[k].score}</b></p>
                        <img src="images/icon-minus.svg" style="height: 0.4rem">
                    </div>
                    <div>
                        <div class=top-row>
                            <div class="row1">
                            <img src=${myJson.comments[j].replies[k].user.image.png} alt="img">
                            <p><b>${myJson.comments[j].replies[k].user.username}</b></p>
                            <p class="createdAt">${myJson.comments[j].replies[k].createdAt}</p>
                        </div>
                        <div class="reply">
                            ${RorEbutton}
                            ${p}
                        </div>
                    </div>
                    <p class="content">
                    <span style="color:hsl(238, 40%, 52%)"><b>@${myJson.comments[j].replies[k].replyingTo}</b></span>
                    ${myJson.comments[j].replies[k].content}</p>
                </div>
            </div>`;
            
            container.insertAdjacentHTML("beforeend", replyHtml);
            
        }
    }
    
}

function getUserReply() {
    sendBtn.addEventListener("click", function() {
            content = document.getElementById("textarea").value
            console.log(document.getElementById("textarea").value)
            const curUserHtml =   
            `<div class="container1">
            <div class="subcontainer">
                <div class="score">
                    <img src="images/icon-plus.svg">
                    <p><b>1</b></p>
                    <img src="images/icon-minus.svg">
                </div>
                <div>
                    <div class=top-row>
                        <div class="row1">
                        <img src=images/avatars/image-juliusomo.png>
                        <p><b>juliosomo</b></p>
                        <p class="createdAt" style="margin-right: 5rem">1 minute ago</p>
                    </div>
                    <div class="reply">
                        <img src="images/icon-delete.svg">
                        <p style="color:red; margin-right: 1rem">Delete</p>
                        <img src="images/icon-edit.svg">
                        <p>Edit</p>
                    </div>
                </div>
                <p class="content">${content}</p>
            </div>
        </div>`
            container.insertAdjacentHTML("beforeend", curUserHtml)
        })

}
