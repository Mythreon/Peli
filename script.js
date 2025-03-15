function navigate(page) {
    let content = document.getElementById('content');
    if (page === 'game') {
        content.innerHTML = '<h2>Game</h2><p>The game will be embedded here.</p>';
    } else if (page === 'about') {
        content.innerHTML = '<h2>Pelistä</h2><p>Peli on tyypillinen piilospeli, jota voi pelata vapaa määrä pelaajia. Pelissä sinulla ja muilla pelaajilla on kaksi vaihtoehtoa, kuten tyypillisessä piilosessa. 1. Piileksijä ja 2. Etsiä. Peli toimii jotenkuten kuten normaalikin piilospeli, mutta erona on se, että peli on tarkoitettu pelaavattavaksi isommalla alueella, ja siinä on kortteja. Pelin alku toimii siten, että piiloutuja/piiloutujat lähtevät 5min etumatkalla johonkin suuntaan/paikkaan, ja etsijä/etsijät jäävät alkupaikkaan. 5min kuluttua etsijä/etsijät saavat lähteä, ja piileksijä/piileksijät saavat vielä liikkua 10min eteenpäin. Pelin on tarkoitus kestää noin tunti, mutta voit vaihtaa pituutta tarpeitesi mukaisesti. <br><br>Kauppa<br><br>Kauppa on yksi pelin erikoisuuksista. Kaupassa on monen monta erilaista korttia, jotka ovat erilaisia piiloutujalle ja etsijälle. Pelin aloittaessa sinulla on 100 "dollaria". Voit ostaa niillä erilaisia kortteja, ja voit tienata lisää rahaa tekemällä haasteita. Mutta varo, kortit voivat antaa sinulle 5% todennäköisyydellä hidastuksen. Voit ostaa yhden kortin vain yhden kerran. <br><br> Kaikki kortit <br><br> --- Kysymyskortit --- <br><br> Ylempänä vai alempana? (Hinta: 35) <br><br> Saat kysyä kerran, ovatko piileksijät jonkun tietyn paikan ylä- vai alapuolella. <br><br> Lähin kauppa ruokakauppa (Hinta: 50)<br><br>Kysyt piileksijöiltä heidän lähimmän kaupan.</p>';
    } else {
        content.innerHTML = '<h2>Other</h2><p>Additional content can be placed here.</p>';
    }
}
