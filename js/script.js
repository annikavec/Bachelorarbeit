// Karte erstellen & Fokussierung auf das Engadin
var map = L.map('map').setView([46.5, 9.8], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);



// TikTok-Videos und ihre Standorte
var tiktokVideos = [
    {
        lat: 46.4427,
        lng: 9.7666,  
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7305819015388138785" data-video-id="7305819015388138785" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> So startend mier de Winter 🔥❄️ <a title="rocktherail" target="_blank" href="https://www.tiktok.com/tag/rocktherail?refer=embed">#rocktherail</a> <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="switzerland" target="_blank" href="https://www.tiktok.com/tag/switzerland?refer=embed">#switzerland</a> <a title="freestyle" target="_blank" href="https://www.tiktok.com/tag/freestyle?refer=embed">#freestyle</a> <a title="freeski" target="_blank" href="https://www.tiktok.com/tag/freeski?refer=embed">#freeski</a> <a title="snowboard" target="_blank" href="https://www.tiktok.com/tag/snowboard?refer=embed">#snowboard</a> <a title="fd" target="_blank" href="https://www.tiktok.com/tag/fd?refer=embed">#fd</a> <a target="_blank" title="♬ Originalton - Engadin" href="https://www.tiktok.com/music/Originalton-7305819031339092768?refer=embed">♬ Originalton - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },

    {
        lat: 46.4511, 
        lng: 9.7958, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7304707400328547616" data-video-id="7304707400328547616" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Einkaufsliste für 2 Personen: 450 gr Wildfleisch (Reh, Hirsch, Wildschwein) 1 Becher Creme Fraiche 75 ml Wildfond 1 Lorbeerblatt 3 Wacholderbeeren 2 Gewürznelken 0.5 TL getrockneter Thymian 1 EL Butter 1 Zwiebel 50g Speck 1 EL Mehl   <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="schweiz" target="_blank" href="https://www.tiktok.com/tag/schweiz?refer=embed">#schweiz</a> <a title="wild" target="_blank" href="https://www.tiktok.com/tag/wild?refer=embed">#wild</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7304707418221857568?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.5106,  
        lng: 9.8722, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7294311041964592417" data-video-id="7294311041964592417" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Kömmend mit de Annika mit! 👋🏽 <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="schweiz" target="_blank" href="https://www.tiktok.com/tag/schweiz?refer=embed">#schweiz</a> <a title="berge" target="_blank" href="https://www.tiktok.com/tag/berge?refer=embed">#berge</a> <a title="fd" target="_blank" href="https://www.tiktok.com/tag/fd?refer=embed">#fd</a> <a title="fdseite" target="_blank" href="https://www.tiktok.com/tag/fdseite?refer=embed">#fdseite</a> <a title="fürdich" target="_blank" href="https://www.tiktok.com/tag/f%C3%BCrdich?refer=embed">#fürdich</a> <a target="_blank" title="♬ Originalton - Engadin" href="https://www.tiktok.com/music/Originalton-7294311053458197281?refer=embed">♬ Originalton - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.4909,  
        lng: 9.8499,
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7298398297050352929" data-video-id="7298398297050352929" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Mit wem möchtisch du go Herbstwandere? 🍂🧡 <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="schweiz" target="_blank" href="https://www.tiktok.com/tag/schweiz?refer=embed">#schweiz</a> <a title="herbst" target="_blank" href="https://www.tiktok.com/tag/herbst?refer=embed">#herbst</a> <a title="wandern" target="_blank" href="https://www.tiktok.com/tag/wandern?refer=embed">#wandern</a> <a title="fd" target="_blank" href="https://www.tiktok.com/tag/fd?refer=embed">#fd</a> <a title="fürdich" target="_blank" href="https://www.tiktok.com/tag/f%C3%BCrdich?refer=embed">#fürdich</a> <a target="_blank" title="♬ Originalton - Engadin" href="https://www.tiktok.com/music/Originalton-7298398306227931937?refer=embed">♬ Originalton - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.4931, 
        lng: 9.9058, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7221189817856560410" data-video-id="7221189817856560410" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Was war dein Winter Highlight?🥶 👇🏽🧗🏻‍♀️<a title="eisklettern" target="_blank" href="https://www.tiktok.com/tag/eisklettern?refer=embed">#eisklettern</a> <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="pontresina" target="_blank" href="https://www.tiktok.com/tag/pontresina?refer=embed">#pontresina</a> <a title="actionsport" target="_blank" href="https://www.tiktok.com/tag/actionsport?refer=embed">#actionsport</a> <a title="wintersport" target="_blank" href="https://www.tiktok.com/tag/wintersport?refer=embed">#wintersport</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7221189798102272794?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    }
    

];



// Füge die Pins auf der Karte hinzu
tiktokVideos.forEach(function(video) {
    var marker = L.marker([video.lat, video.lng]).addTo(map);

    marker.on('click', function() {
        // Zeige den TikTok-Einbettungscode in einem Popup an
        marker.bindPopup(video.embedCode).openPopup();
    });
});




// Menu
const menu = document.querySelector('.menu');

// Get the burger icon element
const burgerIcon = document.querySelector('.burger-icon');

// Add an event listener to the burger icon for click events
burgerIcon.addEventListener('click', function() {
    // Toggle the display of the menu
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});
