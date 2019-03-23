module.exports = {
    getAll: (req,res) => {
       const db = req.app.get('db');

        db.get_houses().then((houses) => {
            res.status(200).send(houses);
        }).catch((error) => {
            res.status(500).send('Failed to get houses');
        })
    },

    create: (req,res) => {
        const { name, address, city, state, zip } = req.body;
        const db = req.app.get('db');

        db.create_house([name, address, city, state, zip]).then((dbResponse) => {
            res.status(200).send('Created');
        }).catch(() => {
            res.status(500).send('Failed to create');
        });
    },
}