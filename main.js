const url = 'https://randomuser.me/api/?results=50'

fetch(url)
.then(function(response)
{
    console.log("This is the response: ", response);
    return response.json(); 
})
.then(function(myJson)
{
    data = myJson; 
    console.log("This is the JSON: ", myJson);
    for(let i = 0; i < data.results.length; i++)
    {
        let card = document.createElement("div");
        card.className = "card";
            
        let image = document.createElement("img");
        image.setAttribute("src", data.results[i].picture.large);
        image.setAttribute("class", "picture");
            
        let attributes = document.createElement("ul");
        attributes.className = "attributes";
            
        let userName = document.createElement("li");
        userName.className = "user-name";
        userName.innerText = `Name: ${data.results[i].name.first} ${data.results[i].name.last}`;

        let gender = document.createElement("li");
        gender.className = "gemder";
        gender.innerText = `Gender: ${data.results[i].gender}`;

        let email = document.createElement("li");
        email.className = "email";
        email.innerText = "email: " + data.results[i].email;
        email.innerHTML = `email: <a href=mailto:${data.results[i].email}>${data.results[i].email}</a>`
            
        let address = document.createElement("li");
        address.className = "address";
        address.innerText = `address: ${data.results[i].location.street.number} ${data.results[i].location.street.name}`;
            
        let phone = document.createElement("li");
        phone.className = "phone-number";
        phone.innerText = `phone number: ${data.results[i].phone} `;
            
        let password = document.createElement("li");
        password.className = "password";
        password.innerText = `password: ${data.results[i].login.password} `;
            
            
        card.appendChild(image);
        attributes.appendChild(userName);
        attributes.appendChild(gender);
        attributes.appendChild(email);
        attributes.appendChild(address);
        attributes.appendChild(phone);
        attributes.appendChild(password);
        card.appendChild(attributes);
        document.body.appendChild(card);
    }
});