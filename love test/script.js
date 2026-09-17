function showResult(percent) {
    document.getElementById("result").classList.remove("hidden");
}

function openGift(giftNumber) {
    const message = document.getElementById("message");

    if (giftNumber === 1) {
        message.innerHTML =
            "💌 You are the most special person in my life ❤️";
    }

    else if (giftNumber === 2) {
        message.innerHTML =
            "🌹 A little surprise just for you! I like you madam garu 🥰";
    }

    else if (giftNumber === 3) {
    message.innerHTML =
        "🎉 Nuvvu naa life loki vachina daggara nunchi, konni ordinary moments kuda special aipoyayi. 💗<br><br>" +
        "Nuvvu naa life loki enduku vachavo teliyadu... kani vachinanduku matram chala happy ga unna. 😊❤️<br><br>" +
        "Naa life lo nuvvu oka chapter kaadu, naa favourite part. 🌹<br><br>" +
        "Nuvvu naa life loki vachaka, happiness ki oka face undi telisindi... adi nuvve. 💕<br><br>" +
        "Ninnu naa life lo kalavadam coincidence ayina, ninnu cherish cheyyadam naa choice. 🥰<br><br>" +
        "Nuvvu naa life loki vachav... ippudu nee lekunda naa life ni imagine cheyyadam kashtam. ❤️<br><br>" +
        "Naa life lo chala mandi vacharu vellaru... kani nuvvu matram heart lo place teesukunnav. 💖<br><br>" +
        "Thank you so much to be a part in my life ❤️";
}
}