const crypto = require('crypto');
const connection = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*');

        return response.json(users);
    },

    async create(request, response) {
        const { name, cpf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('users').insert({
            id,
            name,
            cpf,
        });

        return response.json({ id });
    },
    
    async delete(request, response) {
        const { id } = request.body;

        await connection('users').where('id', id).delete();

        return response.status(204).send();
    }
};