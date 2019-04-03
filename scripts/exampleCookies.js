function init() {
  // In JavaScript wordt een cookie als volgt gecreëerd
  document.cookie = 'username=John Doe';

  // Je kan ook een datum aan toevoegen wanneer een cookie moet verstrijken
  // Een cookie wordt by default verwijderd als de browser wordt gesloten
  // Dit kan je ook zien. Als je zelf geen expire date opgeeft,
  // wordt het veld Expires --> 1969-12-31T23:59:59.000Z
  document.cookie =
    'adblock_status=noactive; expires=Thu, 18 Dec 2020 12:00:00 UTC';

  // Met de parameter path, kan je het path opgeven waartoe de cookie behoort
  // Het path bepaalt op welke pagina's de cookie overal beschikbaar is
  // By default, behoort de cookie tot de huidige webpagina
  // Met path=/ kan de cookie voor de ganse website gelezen worden
  document.cookie = 'language=NL; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';

  // Een cookie veranderen kan als volgt
  document.cookie = 'language=FR; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';

  // Een cookie verwijderen, kan door de expires date vóór nu te plaatsen
  // document.cookie = 'language=FR; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/';

  // Alle cookies lezen
  const c = document.cookie;
  console.log(c); // username=John Doe; adblock_status=noactive; language=FR
  c.split('; ').map(part => {
    const arrPart = part.split('=');
    console.log(`${arrPart[0]} --> ${arrPart[1]}`);
  });
}

window.onload = init;
// username --> John Doe
// adblock_status --> noactive
// language --> FR