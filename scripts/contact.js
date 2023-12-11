// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.getElementById("submit-button").addEventListener("click", (e) => {
    //  Prevent the default behavior of the submit button (which would refresh the page)
    e.preventDefault();

    const contactPage$ = document.getElementById("contact-page");

    //  Remove elements => Could be a possible security risk

    contactPage$.innerHTML = "";

    const thankYouMsgElement$ = document.createElement("p");
    thankYouMsgElement$.textContent = "Thank you for your message";
    thankYouMsgElement$.style.fontSize = "24px";

    document.getElementById("contact-page").appendChild(thankYouMsgElement$);
});