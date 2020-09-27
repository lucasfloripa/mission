import { NowRequest, NowResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";
import url from "url";

interface IBodyReq {
  productName: string;
  productPrice: number;
}

let cachedDb: Db = null;

async function connectToDatabase(uri: string) {
  if (cachedDb) {
    return cachedDb;
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const dbName = url.parse(uri).pathname.substr(1);

  const db = client.db(dbName);

  cachedDb = db;

  return db;
}

export default async (req: NowRequest, res: NowResponse) => {
  const { productName, productPrice } = req.body as IBodyReq;

  const db = await connectToDatabase(process.env.MONGO_DB_URI);

  const collection = db.collection("mission");

  const product = await collection.insertOne({ productName, productPrice });

  return res.status(201).json({ success: true,  product});
};
