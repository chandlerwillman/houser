module.exports = {
    getAll: (req,res) => {
       const db = req.app.get('db');

        db.get_houses().then((houses) => {
            res.status(200).send(houses);
        }).catch((error) => {
            console.log('getAll: ', error)
        })
    },

    create: (req,res) => {
        const db = req.app.get('db');
        const { name, address, city, state, zip } = req.body;

        db.create_house([name, address, city, state, zip]).then((dbResponse) => {
            res.status(200).send('Created');
        }).catch((error) => {
            console.log('create:', error)
        });
    },

    delete: (req,res) => {
        const db = req.app.get('db');
        const { id } = req.params;

        db.delete_house([id]).then((dbResponse) => {
            res.status(200).send('Deleted');
        }).catch((error) => {
            console.log('delete:', error)
        });
    },
}