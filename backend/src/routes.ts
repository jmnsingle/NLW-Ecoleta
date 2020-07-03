import express from 'express';
import { celebrate, Joi } from 'celebrate';
import multer from 'multer';

import multerConfig from './config/multer'

const routes = express.Router();
const uploads = multer(multerConfig);

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

routes.get('/items', ItemsController.index);

routes.post(
  '/points', 
  uploads.single('image'),
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required(),
      latitude: Joi.number().required(),
      longitude: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string().required(),
      items: Joi.string().required(),
    })
  },{
    abortEarly: false,
  }),
  PointsController.create,
);
routes.get('/points', PointsController.index);
routes.get('/points/:id', PointsController.show);


export default routes;