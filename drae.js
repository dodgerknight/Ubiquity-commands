CmdUtils.CreateCommand({
  author: {
    name: "Dodger Knight",
  },
  homepage: "http://github.com/dodgerknight/Ubiquity-commands/blob/master/drae.js",
  license: "GPL v3",

  names: ["drae"],
  arguments: [{role: "object",
               nountype: noun_arb_text,
               label: "palabra"}],
  preview: function( pblock, arguments ) {
    pblock.innerHTML = _("Busca en el diccionario de la RAE: ") + arguments.object.text;
  },
  execute: function( arguments ) {
    Utils.openUrlInBrowser("http://buscon.rae.es/draeI/SrvltConsulta?TIPO_BUS=3&LEMA="+arguments.object.text)
  }
});


