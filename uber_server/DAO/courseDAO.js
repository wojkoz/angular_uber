'use strict';

import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const postSchema = new mongoose.Schema({
  origin: {type: String, required: true},
  destination: {type: String, required: true},
  price: {type: Number, required: true},
  userName: {type: String, required: true},
}, {
  collection: 'course'
});
postSchema.plugin(uniqueValidator);

const CourseModel = mongoose.model('course', postSchema);

async function query() {
  const result = await CourseModel.find({});
  {
    if (result) {
      return mongoConverter(result);
    }
  }
}

async function get(userName) {
  return CourseModel.find({userName: userName}).then(function (result) {
    if (result) {
      return mongoConverter(result);
    }
  });
}

async function createNewOrUpdate(data) {
  return Promise.resolve().then(() => {
    if (!data.id) {
      return new CourseModel(data).save().then(result => {
        if (result[0]) {
          return mongoConverter(result[0]);
        }
      });
    } else {
      return CourseModel.findByIdAndUpdate(data.id, _.omit(data, 'id'), {new: true});
    }
  });
}

export default {
  query: query,
  get: get,
  createNewOrUpdate: createNewOrUpdate,

  model: CourseModel
};
