const database = require("./db");
const saveOrphanage = require("./saveOrphanage");

database.then(async (db) => {
  // inserir dados na tabela
  await saveOrphanage(db, {
    id: 1,
    lat: "-27.222633",
    lng: "-49.6555874",
    name: "Lar dos meninos ",
    about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    whatsapp: "79 998256159",
    images: [
      "https://images.unsplash.com/photo-1590009617975-ea0733d39167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080",

      "https://images.unsplash.com/photo-1603138461779-b27814ed7aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080"
    ].toString(),
    instructions:
      "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    opening_hours: "Horário de Visitas Das 8h até 18h",
    open_on_weekends: "0",
  });

  //consultar dados da tabela
  const selectedOrphanages = await db.all("SELECT * FROM orphanages")
  console.log(selectedOrphanages)

  //consultar somente um orphanato, pelo id
  //const orphanage = await db.all( 'SELECT * FROM orphanages WHERE id = "2"')
  //console.log(orphanage)
});
