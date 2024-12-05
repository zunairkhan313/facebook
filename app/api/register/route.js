
import connectMongoDB from "../../../lib/mongodb";
import User from "../../../models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import cloudinary from "cloudinary";
import config from "@/utils/config";

cloudinary.config({
  cloud_name: config.CLOUD_NAME,
  api_key: config.API_KEY,
  api_secret: config.API_SECRET,
});

export async function POST(req) {
  try {
    const { firstName, surName, email, password, image } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongoDB();
    let uploadImages = image.map((item) => cloudinary.uploader.upload(item));

    uploadImages = (await Promise.all(uploadImages)).map((item) => item.url);
    await User.create({ firstName, surName, email, image: uploadImages, password: hashedPassword });

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  await connectMongoDB();
  const id = request.nextUrl.searchParams.get("id");

  console.log("server_id", id);

  if (id) {
    const user = await User.findById(id);
    return NextResponse.json({ user });
  }

  const Users = await User.find();

  return NextResponse.json({ Users });
}