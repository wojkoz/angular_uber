'use strict';
import business from '../business/business.container';
import auth from '../middleware/auth';

const courseEndpoint = (router) => {
  router.get('/api/courses', async (request, response, next) => {
    try {
      let result = await business(request).getCourseManager().query();
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.get('/api/courses/:userName', async (request, response, next) => {
    try {
      let result = await business(request).getCourseManager().get(request.params.userName);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });

  router.post('/api/courses', async (request, response, next) => {
    try {
      let result = await business(request).getCourseManager().createNewOrUpdate(request.body);
      response.status(200).send(result);
    } catch (error) {
      console.log(error);
    }
  });
};
export default courseEndpoint;
