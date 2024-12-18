import mongoose from "mongoose";
import dotenv from "dotenv-flow";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
mongoose.set('strictQuery', false);
if (!MONGO_URI) {
  console.error(
    "Error: MONGO_URI no está definida en las variables de entorno."
  );
  process.exit(1);
}

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB conectado exitosamente");
    console.log(`Entorno actual: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;