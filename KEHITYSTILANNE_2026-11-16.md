# Avustustutka – kehityksen tilanne 16.11.2026

Alkuperäinen Site-projekti: `appgprj_6af74ea4df108191916c3c6d5b69b1c6`. Sen lähdekoodia tai historiatietoja ei ole saatu luettua, joten paikallista kehityspakettia ei voi väittää alkuperäiseen projektiin yhdistetyksi.

## Todettu
- GitHub-repositorion kirjoitusoikeus on käytettävissä.
- Repositorion oletushaarassa ei vielä ole koko sovelluksen lähdekoodia.
- Paikallisen v2.3-paketin `src/core.js`-tuontitarkistusta on korjattu: paikalliset osoitteet, URL-tunnistetiedot ja tulevaisuuteen päivätyt lähdetarkistukset hylätään. Uusia Node-regressiotestejä on kaksi.
- Paikallisesti läpäisty: 15 Node-testiä, 4 datavalidointitestiä, 9 lähdepoimintatestiä, 3 sivutustestiä ja Chromiumin mobiili-/työpöytätestit.
- Kehityspaketti on paikallinen artefakti; korjattua sovelluskoodia ei ole vielä siirretty GitHubiin.

## Julkaisun esteet
1. Site-projektin alkuperäinen data ja aiemmat versiot on tarkistettava ennen korvaavia muutoksia.
2. Paikallinen lähdekoodi, testit ja työnkulut on siirrettävä repositorioon.
3. Virallisen hakutietosyötteen kattavuus, ajantasaisuus ja käyttöehdot on todennettava oikeassa verkkoympäristössä.
4. GitHub Actions -testit ja Pages-julkaisu on ajettava onnistuneesti, minkä jälkeen tuotantopalvelu testataan.

**Ei tuotantojulkaisua.** Yhdeksän paikallista hakutietuetta eivät tarkoita yhdeksää ajantasaiseksi viranomaisvahvistettua hakua.
