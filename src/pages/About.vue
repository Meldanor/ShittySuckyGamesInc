<template>
  <Layout>
  <div class="flex justify-center min-h-screen px-4 lg:px-72 mx-auto bg-purple-400 ">
    <div class="text-justify rounded-md max-w-screen-md">
      <h2 class="pt-4 text-center text-3xl font-bold tracking-tight">
        Moin :)
      </h2>
      <p class="pt-6">
        Diese kleine Website ist wegen dem Let's Play vom <a class="underline font-bold" href="https://www.twitch.tv/gronkh">Gronkh</a> in dem Spiel <a class="underline font-bold" href="https://store.steampowered.com/app/1342330/Mad_Games_Tycoon_2/">Mad Games Tyconn 2</a> entstanden. Dort hat er lustige Spiele, kreative Texte und ein Feuerwerk an Unterhaltung abgefackelt. Nicht zu vergessen sind seine kurzen Streams, wo er pünktlich ausgemacht hat. Solche unikaten Titel und Beschreibungen gehören in ein Museum oder wenigstens archiviert!
      </p>
      <p class="pt-6">
        Bei der Erstellung der Liste gibt es diesmal keine Magie wie OCR oder AI (wie hier <a class="underline font-bold" href="https://erikinskyrim.de">Skyrim - Überladungs Tycoon</a>). Die Liste wird manuell gepflegt und in diese Website geworfen. Die Screenshots der Bilder sind aus seinen Streams und höchst professionell aufgenommen. Bei manchen erkennt man niemals den Cursor. Dabei können Fehler auftreten, schaut doch einfach bei <g-link class="underline font-bold" to="/inputs/">Einreichungen</g-link> nach, wenn ihr etwas verbessern wollt!
      </p>
      <p class="pt-6">
        Es wird versucht, die Liste aktuell zu halten. Da Pans Partner aber Uhren ignoriert und zu viel Spaß im Leben hat, sind es schon jetzt min. 20h an Videomaterial, das gesichtet werden muss. Also kann es sein,
        dass die Liste ein wenig hinterherhängt :)
      </p>
      <p class="pt-6">
        Mein persönliches Interesse war das Lernen einer neuen Technologie: Statische Website mit VueJS zu generieren. In diesem Projekt wurde dazu 
        <a class="underline font-bold" href="https://gridsome.org/">Grindsome</a>
         verwendet - das Projekt selber findet ihr auf
        <a class="underline font-bold" href="https://github.com/Meldanor/ShittySuckyGamesInc">GitHub Repo</a>. Der Vorteil von statischen Websiten ist, dass diese sehr schnell und performant sind, da diese nur HTML, CSS und ein wenig JS an die Browser ausliefern, statt
        ein PHP Template zu rendern <span class="italic text-sm">(Es ist 2021! Nutzt was modernes wie Elixir!)</span> oder wie bei einer vollen SPA ein eigenes DOM zu berechnen und zu rendern. Meine bisherige Erfahrung mit sowas war immer nur mittelgut (siehe 
        <a class="underline font-bold" href="https://www.meldanor.me">meine private Website</a>), es war fummelig und repetive. Die Magie von SPA Frameworks wie React oder VueJS fehlte. Gridsome (und ähnliche Konsorten) aber 
        bieten einen Mittelweg an: Entwicklung wie bei einer SPA, aufgeräumtes Projekt und moderne Technologie, aber das Endresultat ist eine Ansammlung von statischen Websiten.
      </p>
    </div>
   </div>    
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'About'
  }
}
</script>
