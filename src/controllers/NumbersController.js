const crypto = require('crypto');
const connection = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const color_id  = request.headers.authorization;

        const shoes_numbers = await connection('shoe_number')
            .select('*')
            .orderBy('number', 'asc')
            .where('color_id', color_id)

        return response.json(shoes_numbers);
    },

    async indexQuant(request, response) {
        const number_id = request.headers.authorization;

        const quant = await connection('shoe_number')
            .select('quant')
            .where('id', number_id)

        return response.json(quant);
    },

    async create(request, response) {
        const { color_id, number, quant } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('shoe_number').insert({
            color_id,
            number,
            quant,
            id
        });

        return response.json({ id });
    },

    async changeQuant(request, response) {
        const id = request.params.id;
        const quant = request.params.quant;

        await connection('shoe_number')
            .where('id', id)
            .update('quant', quant);

        return response.status(204).send();
    },

    async increment(request, response) {
        const { id } = request.params;

        await connection('shoe_number')
            .where('id', id)
            .increment('quant', 1);
        
        return response.json();
    },

    async decrement(request, response) {
        const { id } = request.params;

        await connection('shoe_number')
            .where('id', id)
            .decrement('quant', 1);
        
        return response.status(204).send();
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('shoe_number')
            .where('id', id)
            .delete();

        return response.status(204).send();
    }
};