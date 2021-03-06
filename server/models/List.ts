import { model, Schema } from 'mongoose';

const ListSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  steamid: {
    type: Number,
    required: true,
  },
  games: [{
    appid: Number,
  }],
  ordered: {
    type: Boolean,
    required: true,
  },
});

const ListModel = model('List', ListSchema, 'list');

export default ListModel;
