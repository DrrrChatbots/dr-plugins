// room

(() => {
  $("head")
    .append(
      `<style>.aplayer-title{color:black}</style>`)
    .append(
      `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.0/APlayer.min.css">`)
    .append(
      `<script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.0/APlayer.min.js"></script>`);

  $("body").append(`<div id="aplayer" style="position:fixed;left:0px;bottom:0px;min-width:400px;"></div>`);

  setTimeout(() => {

    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      //fixed: true,
      lrcType: 1,
      audio: []
    });

    window.box.changeVolume(0);
    // mute original music player volume

    // ap.on('ended', function () {
    //   //alert('player ended');
    //   //ap.list.clear();
    //   ap.destroy();
    // });

    function plugin_aplayer(event){
      if(["music"].includes(event.type)){
        drrr.getLoc(()=> {
          // drrr.print(drrr.room.np.name, drrr.room.np.url)
          ap.list.add({
            name: drrr.room.np.name,
            // artist: details.songs[0].ar[0].name,
            url: drrr.room.np.url,
            // cover: details.songs[0].al.picUrl,
            // lrc: LRC,
            theme: '#ebd0c2'
          });
        })
        ap.play();
      }
    }
    plugin_hooks.push(plugin_aplayer);

  }, 2000);

})();
