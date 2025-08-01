import React, { useState } from "react";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import AuthLayout from "../../components/layout/AuthLayout";
import Input from "../../components/inputs/Input";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [adminInviteToken, setAdminInviteToken] = useState("");

  const [error, setError] = useState(null);

  //Handle Signup Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = '';

    if (!fullName) {
      setError("Please enter full name");
      return;
    }

    if (password.length < 8 || !password) {
      setError("Password must be at least 8 characters long");
      return;
    }

    setError("");


    //signup API call can be added here
    try {
      //Upload profile image if exists
      // if (profilePic) {
      //   const imgUploadRes = await uploadImage(profilePic);
      //   profileImageUrl = imgUploadRes.imageUrl || '';
      // }

    } catch (error) {}
  };
  return (
    <AuthLayout>
      <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Create an Account</h3>
        <p className="text-xs text-slate-700 mt-[5px] mb-6">
          Join us today by entering your details below
        </p>

        <form onSubmit={handleSignUp}>
          <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email"
              placeholder="john@example.com"
              type="text"
            />

            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />

            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Invite Token"
              placeholder="6 Digit Token"
              type="password"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button type="submit" className="btn-primary">
              SIGNUP
            </button>

            <p className="text-[15px] text-slate-800 mt-3">
              Already have an account?{" "}
              <Link className="font-medium text-blue-600 underline" to="/login">
                LogIn
              </Link>
            </p>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
