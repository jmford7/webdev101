function say_hi(language) {
    switch(language) {
        case "eng":
            alert("Hello")
        break;

        case "span":
            alert("Hola")
        break;

        case "greeks":
            alert("Say Wa?")
        break;

        default:
            alert("Unknown Language")
        break;
    }
}