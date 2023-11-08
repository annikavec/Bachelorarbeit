// Karte erstellen & Fokussierung auf das Engadin
var map = L.map('map').setView([46.656, 9.613], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);



// TikTok-Videos und ihre Standorte
var tiktokVideos = [
    {
        lat: 46.705,
        lng: 9.477,  
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7294311041964592417" data-video-id="7294311041964592417" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Kömmend mit de Annika mit! 👋🏽 <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="schweiz" target="_blank" href="https://www.tiktok.com/tag/schweiz?refer=embed">#schweiz</a> <a title="berge" target="_blank" href="https://www.tiktok.com/tag/berge?refer=embed">#berge</a> <a title="fd" target="_blank" href="https://www.tiktok.com/tag/fd?refer=embed">#fd</a> <a title="fdseite" target="_blank" href="https://www.tiktok.com/tag/fdseite?refer=embed">#fdseite</a> <a title="fürdich" target="_blank" href="https://www.tiktok.com/tag/f%C3%BCrdich?refer=embed">#fürdich</a> <a target="_blank" title="♬ Originalton - Engadin" href="https://www.tiktok.com/music/Originalton-7294311053458197281?refer=embed">♬ Originalton - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },

    {
        lat: 46.41495832957872, 
        lng: 9.968388412699891, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7296909946724076833" data-video-id="7296909946724076833" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Bauernhof im Engadin 🐄🏔️ &gt;&gt;&gt;&gt;&gt; <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="bauernhof" target="_blank" href="https://www.tiktok.com/tag/bauernhof?refer=embed">#bauernhof</a> <a title="bauer" target="_blank" href="https://www.tiktok.com/tag/bauer?refer=embed">#bauer</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7296909976926014241?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.49363196627833,  
        lng: 9.842625475285544, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7296909946724076833" data-video-id="7296909946724076833" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Bauernhof im Engadin 🐄🏔️ &gt;&gt;&gt;&gt;&gt; <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="bauernhof" target="_blank" href="https://www.tiktok.com/tag/bauernhof?refer=embed">#bauernhof</a> <a title="bauer" target="_blank" href="https://www.tiktok.com/tag/bauer?refer=embed">#bauer</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7296909976926014241?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.515998687649976,  
        lng: 9.865724417607687,
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7296909946724076833" data-video-id="7296909946724076833" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Bauernhof im Engadin 🐄🏔️ &gt;&gt;&gt;&gt;&gt; <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="bauernhof" target="_blank" href="https://www.tiktok.com/tag/bauernhof?refer=embed">#bauernhof</a> <a title="bauer" target="_blank" href="https://www.tiktok.com/tag/bauer?refer=embed">#bauer</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7296909976926014241?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
    },
    {
        lat: 46.4986432007939, 
        lng: 9.752693673770116, 
        embedCode: '<blockquote class="tiktok-embed" cite="https://www.tiktok.com/@engadin/video/7289101918087941409" data-video-id="7289101918087941409" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@engadin" href="https://www.tiktok.com/@engadin?refer=embed">@engadin</a> Colorful Engadin🌈🫶 <a title="engadin" target="_blank" href="https://www.tiktok.com/tag/engadin?refer=embed">#engadin</a> <a title="trend" target="_blank" href="https://www.tiktok.com/tag/trend?refer=embed">#trend</a> <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a target="_blank" title="♬ original sound - Engadin" href="https://www.tiktok.com/music/original-sound-7289101931417455392?refer=embed">♬ original sound - Engadin</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>',
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