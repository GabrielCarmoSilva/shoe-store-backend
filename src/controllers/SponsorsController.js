const crypto = require('crypto');
const connection = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const sponsors = await connection('sponsor').select('*').orderBy('name', 'asc');

        return response.json(sponsors);
    },

    async create(request, response) {
        const { name } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('sponsor').insert({
            name,
            id
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('sponsor').where('id', id).delete();

        return response.status(204).send();
    }
};