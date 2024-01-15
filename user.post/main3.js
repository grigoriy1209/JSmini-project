// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = new URL(location.href).searchParams.get('postId')
console.log(postId);
const userId = new URL(location.href).searchParams.get('userId')
console.log(userId);
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
        console.log(post);

const box = document.getElementById('box');

        const ul = document.createElement('ul');
        const id = document.createElement('li');
        const userId = document.createElement('li');
        const title = document.createElement('li');
        const body = document.createElement('li');

        id.textContent = `Postid: ${post.id} `;
        userId.textContent = `UserId: ${post.userId} `;
        title.textContent = `  Tittle:   ${post.title} `;
        body.textContent = `  Body:   ${post.body}`;

        ul.appendChild(id)
        ul.appendChild(userId)
        ul.appendChild(title)
        ul.appendChild(body)
        box.appendChild(ul)

    })
// ==========================================COMMENTS===========================================
const header = document.getElementById('header')
const btn = document.createElement('button')
const div = document.createElement('div')

btn.innerText = 'Comments Info';

div.appendChild(btn);
header.appendChild(div)

btn.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/posts/${userId}/comments`)
            .then(res => res.json())
            .then(comments => {
                    console.log(comments);
                    const main = document.getElementById('main')
                    const ul = document.createElement('ul')

             comments.forEach( comment => {
                     const li = document.createElement('li');

                     li.textContent= `Comment:${comment.body}`;

                     ul.appendChild(li)
             })
                    main.appendChild(ul)
     })
}

