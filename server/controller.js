module.exports = {

    postAdmin: (req, res) => {
        const dbInstance = req.app.get('db');
            dbInstance.create_admin()
            .then(stuff => res.status(200).send(stuff) )
            .catch(err => {
                res.status(500).send({errorMessage: "Error with creating user."}, err);
            });
    },
    postLogin: (req, res) => {
        const dbInstance = req.app.get('db');
            dbInstance.create_admin()
            .then(stuff => res.status(200).send(stuff) )
            .catch(err => {
                res.status(500).send({errorMessage: "Error with creating user."}, err);
            });
    },
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
    },

    addCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {img, name, age, gender, type, color, breed, description} = req.body;
        dbInstance.add_cat([img, name, age, gender, type, color, breed, description])
        .then(stuff => {
            res.status(200).send(stuff)})
        
        .catch(err => {
            res.status(500).send({errorMessage: "Error with getting catalog."}, err);
        })
    },

    updateCat: (req, res) => {
        const dbInstance = req.app.get('db');
        let {id} = req.params;
        let {img, name, age, gender, type, color, breed, description} = req.body;
        // console.log(req.body);
        dbInstance.update_cat([id, img, name, age, gender, type, color, breed, description])
        .then(stuff => {
            res.status(200)})
        .catch(err => {
            res.status(500).send({errorMessage: "Error with updating kitty."}, err);
        })

    },
    deleteCat(req, res) {
        const dbInstance = req.app.get('db');
        const {id} = req.params;
        dbInstance.delete_cat(+id)
        .then(cats => {res.status(200).send(cats)})
        .catch(err => console.log('errorMessage: error deleting kitty', err));
    },
    getInstaPics(req, res) {
        res.status(200).send(res);
    }
}