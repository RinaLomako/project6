exports.createlocation = (req, res, next) => {
    const location = new Location({
      location: req.body.location,
      description: req.body.description,
      imagelink: req.body.imagelink
    });
location.save(function(err) {
  if(err) {
    console.log("Error")
  } else {
    console.log("New place created");
    res.redirected('/');
  }
})

  //listPlace: (req, res) => {
      //chercher toutes les lieux dans la bdd isValid = false
      //afficher a cette page
//  },

  //validPlace (req, res) => {
    //recuper id di lieu
    //passe l'atribut isValid
