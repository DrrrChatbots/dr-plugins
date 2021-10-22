// room

function bilibili_parser(url){
  if(!url) return false;
  return url.includes("bilibili.com/video") ? url : false;
}
function bilibili_embed(url){
  return `<iframe width="560" height="315"
        src="https://xbeibeix.com/api/bilibili/biliplayer/?url=${url}"
        frameborder="0"
        allow="accelerometer; autoplay;
               clipboard-write; encrypted-media;
               gyroscope; picture-in-picture"
        allowfullscreen></iframe>`;
}
(function bilibili_replace_talk(){
  $("a.message-link").get().forEach(e => {
    let ue = $(e);
    let biliURL = bilibili_parser(ue.attr("href"));
    if(biliURL){ ue.replaceWith(bilibili_embed(biliURL)); }
  })
})()
$('#talks').bind('DOMNodeInserted', function(event) {
  let e = event.target;
  let ue = $(e).find($('.bubble p a'));
  let biliURL = bilibili_parser(ue.attr('href'));
  if(biliURL){ ue.replaceWith(bilibili_embed(biliURL)) }
})
