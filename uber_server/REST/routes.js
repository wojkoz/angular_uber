'use strict';
import courseEndpoint from './course.endpoint';
import userEndpoint from './user.endpoint';

const routes = (router, config) => {
  courseEndpoint(router);
  userEndpoint(router);
};
export default routes;
