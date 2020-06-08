'use strict';

import postDAO from '../DAO/courseDAO';

function create(context) {
  async function query() {
    let result = postDAO.query();
    if (result) {
      return result;
    }
  }

  async function get(id) {
    let result = await postDAO.get(id);
    if (result) {
      return result;
    }
  }

  async function createNewOrUpdate(data) {
    let result = await postDAO.createNewOrUpdate(data);
    if (result) {
      return result;
    }
  }

  async function search(data) {
    let result = await postDAO.search(data);
    if (result) {
      return result;
    }
  }

  return {
    query: query,
    get: get,
    createNewOrUpdate: createNewOrUpdate,
    search
  };
}

export default {
  create: create
};
