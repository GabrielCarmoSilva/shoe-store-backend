const crypto = require('crypto');
const connection = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const sponsor_id = request.headers.authorization;

        const models = await connection('model').select('*').where('sponsor_id', sponsor_id).orderBy('name', 'asc');

        return response.json(models);
    },

    async create(request, response) {
        const { sponsor_id, name } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('model').insert({
            sponsor_id,
            name,
            id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('model').where('id', id).delete();

        return response.status(204).send();
    }
};