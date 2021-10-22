// room

(function monit_503(){
  let observer = new MutationObserver(function(mutations){
    mutations.forEach(function(mutation) {
      if(mutation.target.style.display == 'block'){
        $.ajax({
          type: "GET",
          url: 'https://drrr.com/room/?ajax=1&api=json',
          success: function(data){
            console.log(data);
          },
          error: function(jxhr){
            if(jxhr.status == 503){
              console.log("wait 503 reload...")
              window.location.replace(window.location.href);
            }
            else console.log(jxhr);
          }
        });
      }
    });
  });
  observer.observe($('#connection-indicator')[0], {
    //configure it to listen to attribute changes
    attributes: true
  });
})()
