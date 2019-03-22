module.exports = {
    getAll: (req,res) => {
       const db = req.app.get('db');

        db.get_houses().then((houses) => {
            res.status(200).send(houses);
        }).catch((error) => {
            res.status(500).send('Failed to get houses');
        })
    },

}