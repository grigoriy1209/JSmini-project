<!--На странице user-details.html:-->
//+++ <!--4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули-->  +++++++
// ++++<!--5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера-->
// +++<!--(для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)-->
//  ++++<!--6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,-->
//     <!--котра має детальну інфу про поточний пост.-->
const userId = new URL(location.href).searchParams.get('userId');
console.log(userId);

const foo = async () => {
    const json = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    console.log(json);
    const user = await json.json();
    console.log(user);

    const box = document.getElementById('box');

    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const phone = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    id.textContent = `id: ${user.id}`;
    username.textContent = `username: ${user.username}`;
    email.textContent = `email: ${user.email}`;
    phone.textContent = `phone: ${user.phone}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    city.textContent = `city: ${user.address.city}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;
    lat.textContent = `lat: ${user.address.geo.lat}`;
    lng.textContent = `lng: ${user.address.geo.lng}`;
    website.textContent = `website: ${user.website}`;
    companyName.textContent = `companyName: ${user.company.name}`;
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    bs.textContent = `bs: ${user.company.bs}`;

    ul.append(id, username, email, phone, street, suite, city, zipcode, lat, lng, website, companyName, catchPhrase, bs);
    box.appendChild(ul);
}
void foo();
    // =======================================================================================
    const header = document.getElementById('header')
    const btn = document.createElement('button')
    const div = document.createElement('div')

    btn.innerText = 'post of current user';

    div.appendChild(btn);
    header.appendChild(div)

    btn.onclick = function () {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(res => res.json())
            .then(posts => {
                console.log(posts);


                    const main = document.getElementById('main');

                    posts.forEach(post => {
                        const div = document.createElement('div');
                        const p = document.createElement('p');
                        const btn = document.createElement('button')

                        p.innerText = `${post.title}`;
                        btn.innerText = 'details';

                        div.appendChild(p);
                        div.appendChild(btn)
                        main.appendChild(div);

                        btn.onclick = function () {
                            location.href = `../user.post/post-details.html?userId=${userId}&postId=${post.id}`;
                        }
                    })
            })
    }
