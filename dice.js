// room

(() => {
  function dice(text){
    var match = (/^(\d+)[dD](\d+)$/g).exec(text)
    if(!match) return "wrong format, use [1-100]d[digits]"
    var ins = Number(match[1]);
    return (ins > 0 && ins <= 100) ? [...Array(ins)].map((_, i) =>
      String(Math.floor(Math.random()*match[2])+1)).join(' ')
        : "number of dice should between 1 to 100";
  }
  function plugin_dice(event){
    var type = event.type;
    if((event.text || "").match(/^\d+[dD]\d+$/)){
      if([event_msg, event_me].includes(type))
        drrr.print(dice(event.text))
      else if(type == event_dm)
        drrr.dm(event.user, dice(event.text))
    }
  }
  plugin_hooks.push(plugin_dice);
})();
