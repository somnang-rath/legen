import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Data } from "../context/DataProvider";
import logo from "../assets/Legend-logo.png";
import { PhoneIncoming, Mail } from "lucide-react";
import api from "../api/api";

const Profile = () => {
  const { user, logout, token, fetchUserProfile } = useContext(Data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else if (!user) {
      fetchUserProfile();
    }
  }, [token, user, fetchUserProfile, navigate]);

  const handleAccount = async () => {
    if (!user?.id) return;
    try {
      await api.delete(`/user/destroy`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      logout();
      navigate("/");
      alert("Account deleted successfully.");
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete account.");
    }
  };

  if (!user) return null; // or loading spinner
  const fullName = user ? user.name : "Guest User";

  // Split by space
  const nameParts = fullName.trim().split(" ");

  // Assume first word is first name, last word is last name
  const firstName = nameParts[0];
  const lastName = nameParts[nameParts.length - 1];
  return (
    <div className="px-4 py-10 2xl:px-0 2xl:w-8/12 2xl:mx-auto mt-32">
      {user && (
        <div>
          <div className="">
            <p className="text-white text-3xl font-bold mb-16">Profile</p>
            <div className="w-full flex justify-between bg-black/40 px-5 py-5 rounded-lg">
              <div className="flex text-white space-x-3">
                <img
                  src={user.profile || logo}
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
                  <p>{user.phone}</p>
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
                    {firstName}
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
                    {user.dob || "Not provided"}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-md text-white"> Last Name</p>
                <p className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                  {lastName}
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
                    <div className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                      <div className="flex text-white space-x-3">
                        <Mail />
                        <p>{user.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="space-y-4">
                    <p className="text-md text-white"> Phone Number</p>
                    <div className="w-96 text-xl  bg-white/15 text-gray-400 px-3 py-3 rounded-lg">
                      <div className="flex text-white space-x-3">
                        <PhoneIncoming />
                        <p>{user.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-10">
                <button
                  onClick={handleAccount}
                  className=" text-red-600 px-4 py-2 rounded font-semibold"
                >
                  Delete Account
                </button>
                <button
                  onClick={logout}
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
