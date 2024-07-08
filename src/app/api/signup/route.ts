// import connectDB from "@/utils/db";
// import { NextRequest, NextResponse } from "next/server";
// import bcrypt from "bcrypt";


// export const POST = async(req: NextRequest)=> {

//   const saltRounds = 10;
//   const { firstname, lastname, email, dob, password, confirmpassword } = await req.json();
//   await connectDB();

//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return NextResponse.json(
//       { error: "User already exists" },
//       { status: 400 }
//     );
//   } 

//   const salt = bcrypt.genSaltSync(saltRounds);
//   const hashedPassword = bcrypt.hashSync(password,confirmpassword, salt);

//   const newUser = new User({
//     firstname, lastname, email, dob, password:hashedPassword, confirmpassword:hashedPassword
//   })
//   try {

//     await newUser.save();
//     return new NextResponse(
//         {message: "User created successfully!"},
//         {status: 200}
//     );

//   } catch (error) {
//     console.log(error);
//     return new NextResponse(
//       { error: "An error occured while registering a user." },
//       { status: 500 }
//     );
//   }
// }
