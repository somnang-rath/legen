import { useState } from "react";
import logo from "../assets/Legend-logo.png";
import Profile from "../Auth/Profile";
import Auth from "../Auth/Auth";

function SignUp() {
  const [display, setDisplay] = useState(0);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [profile, setProfile] = useState(null); // file
  const [preview, setPreview] = useState(null); // image preview

  return (
    <div className="w-screen h-screen space-y-5 text-xl lg:flex lg:justify-center lg:items-center lg:m-auto lg:space-x-10 transition-all duration-300">
      <div className="flex flex-col justify-center items-center text-center">
        <img src={logo} alt="" className="w-[200px]" />
        <div className="text-gray-300 font-medium mt-5">
          គោលបំណងនៃការបង្កើតគេហទំព័រនេះ គឺដើម្បីសិក្សា នឹង ពង្រឹងជំនាញ នៃការងារ។
        </div>
      </div>

      <div className="flex justify-center items-center">
        {display === 0 ? (
          <Profile
            setDisplay={setDisplay}
            name={name}
            setName={setName}
            dob={dob}
            setDob={setDob}
            address={address}
            setAddress={setAddress}
            phone={phone}
            setPhone={setPhone}
            profile={profile}
            setProfile={setProfile}
            preview={preview}
            setPreview={setPreview}
          />
        ) : (
          <Auth
            setDisplay={setDisplay}
            name={name}
            setName={setName}
            dob={dob}
            setDob={setDob}
            address={address}
            setAddress={setAddress}
            phone={phone}
            setPhone={setPhone}
            profile={profile}
            setProfile={setProfile}
            preview={preview}
            setPreview={setPreview}
          />
        )}
      </div>
    </div>
  );
}

export default SignUp;
