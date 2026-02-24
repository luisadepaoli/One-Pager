function openMaps() {
    if (confirm("Möchten Sie die Adresse in Google Maps öffnen?")) {
        window.open("https://www.google.com/maps/search/?api=1&query=Gerichtsstraße+4,65185+Wiesbaden", "_blank", "noopener,noreferrer");
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                konamiActivated();
                konamiIndex = 0; // Reset für den nächsten Versuch
            }
        } else {
            konamiIndex = 0;
        }
    });

    function konamiActivated() {
        const gif = document.getElementById('konamiGif');
        gif.style.display = 'block';

        setTimeout(() => {
            gif.style.display = 'none';
        }, 5000);
    }

    const flipcards = document.querySelectorAll(".flipcard");

    flipcards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.toggle("flipped");
            if (card.classList.contains("flipped")) {
                flipcards.forEach(function (othercard) {
                    if (card != othercard) {
                        othercard.classList.remove("flipped");
                    }
                });
            }
        });

    });

    UIkit.util.on('.hero-image', 'inview', function () {
        document.querySelector('.button-nav').classList.add('uk-hidden');
        document.querySelector('.button-nav').classList.add('uk-animation-fade uk-animation-reverse');
    });

    UIkit.util.on('.hero-image', 'outview', function () {
        document.querySelector('.button-nav').classList.remove('uk-hidden');
        document.querySelector('.button-nav').classList.add('uk-animation-fade');
    });

});