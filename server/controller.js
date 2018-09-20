module.exports = {
    setCatalog: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_catalog()
        .then(stuff => res.status(200).send(stuff))
        .catch(err => {
            res.status(500).send({errorMessage: "Error with getting catalog."}, err);
        })
    },
    setCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;
        dbInstance.get_one_cat(id)
        .then(stuff => {
            res.status(200).send(stuff)})
            
        
        .catch(err => {
            res.status(500).send({errorMessage: "Error with getting catalog."}, err);
        })
    }
}