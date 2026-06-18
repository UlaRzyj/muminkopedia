import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
    try {

        const mongoURI = process.env.MONGO_URI;

        if (!mongoURI) {
            throw new Error("Brak MONGO_URI");
        }

        const conn = await mongoose.connect(mongoURI);

        console.log(
            `MongoDB connected: ${conn.connection.host}`
        );

    } catch (error) {

        if (error instanceof Error) {
            console.error(error.message);
        }

        process.exit(1);
    }
};