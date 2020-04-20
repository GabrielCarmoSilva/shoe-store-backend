const crypto = require('crypto');
const connection = require('./../database/connection');

module.exports = {
    async index(request, response) {
        const model_id = request.headers.authorization;

        const shoes_colors = await connection('shoe_color')
            .select('*')
            .where('model_id', model_id)
            .orderBy('color_name', 'asc');

        return response.json(shoes_colors);
    },

    async create(request, response) {
        const { model_id, color_name } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('shoe_color').insert({
            id,
            model_id,
            color_name
        });

        return response.json({ id });
    },

    async delete(request, response) {
        const { id } = request.body;

        await connection('shoe_color')
            .where('id', id)
            .delete();

        return response.status(204).send();
    }
};