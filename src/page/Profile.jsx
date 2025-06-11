import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Legend-logo.png";
import { PhoneIncoming, Mail } from "lucide-react";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("Users"));
    if (!storedUser) {
      alert("You must login first.");
      navigate("/login");
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("Users");
    navigate("/login");
  };

  return (
    <div className="px-4 py-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto mt-32">
      {user && (
        <div>
          <div className="">
            <p className="text-white text-3xl font-bold mb-16">Profile</p>
            <div className="w-full flex justify-between bg-black/40 px-5 py-5 rounded-lg">
              <div className="flex text-white space-x-3">
                <img
                  src={logo}
                  alt="img"
                  className="w-28 h-28 rounded-lg bg-white object-cover"
                />
                <div className="space-x-3 text-md">
                  <p>{user.name}</p>
                  <p>Student, SETEC Institute of MIS </p>
                  <p>Year: 2025 to 2026</p>
                </div>
              </div>
              <div className="space-y-5 text-md">
                <div className="flex text-white space-x-3">
                  <Mail />
                  <p>{user.email}</p>
                </div>
                <div className="flex text-white space-x-3">
                  <PhoneIncoming />
                  <p>09365824</p>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-white text-3xl font-bold mb-16">
              Personal Information
            </p>
            <div className="w-full flex justify-between bg-black/40 px-5 py-5 rounded-lg">
              <div className="space-y-7">
                <div className="space-y-4">
                  <p className="text-md text-white">First Name</p>
                  <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                    First Name
                  </p>
                </div>
                <div className="space-y-4">
                  <p className="text-md text-white">
                    {" "}
                    Date of birth{" "}
                    <span className="text-red-600">
                      (one set can’t be change)
                    </span>
                  </p>
                  <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                    6-6-2004
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-md text-white"> Last Name</p>
                <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                  Last Name
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <p className="text-white text-3xl font-bold mb-16">Contact Info</p>
            <div className="w-full  bg-black/40 px-5 py-5 rounded-lg">
              <div className="flex w-full justify-between">
                <div>
                  <div className="space-y-4">
                    <p className="text-md text-white">
                      {" "}
                      Email{" "}
                      <span className="text-red-600">
                        (one set can’t be change)
                      </span>
                    </p>
                    <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                      <div className="flex text-white space-x-3">
                        <Mail />
                        <p>{user.email}</p>
                      </div>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <p className="text-md text-white"> Phone Number</p>
                    <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                      <div className="flex text-white space-x-3">
                        <PhoneIncoming />
                        <p>09365824</p>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <button
                  onClick={handleLogout}
                  className=" text-red-600 px-4 py-2 rounded font-semibold"
                >
                  Delete Account
                </button>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-5 py-2 rounded font-semibold"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
