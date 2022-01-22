import mongoose from 'mongoose';
import { databasePort, databaseName } from '../environment';

async function connect(): Promise<void> {
  await mongoose.connect(`mongodb://localhost:${databasePort}/${databaseName}`);
}

export default { connect };
