import knex from '../database/connection';
import { Request, Response } from 'express';

class ItemsController {
  async index(request: Request, response: Response) {
    const items = await knex('items').select('*');

    const serializedItmes = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })

    return response.status(200).json(serializedItmes);
  }
}

export default new ItemsController();
