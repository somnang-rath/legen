import logo from "../assets/img/Profile/profile.jpg";
const Profile = (props) => {
  const {
    setDisplay,
    name,
    setName,
    dob,
    setDob,
    address,
    setAddress,
    phone,
    setPhone,
    setProfile,
    preview,
    setPreview,
  } = props;
  const handleCheck = () => {
    // Handle checkbox state change
    if (!name || !dob || !address || !phone || !preview) {
      alert("Please fill in all fields.");
      return false; // Prevent proceeding if any field is empty
    }
  };

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setProfile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <form className="flex flex-col justify-center items-center w-3xl bg-black/30 p-8 rounded-lg space-y-4 max-w-md">
      {/* Show Preview if exists */}
      <label className="w-32 h-32 rounded-full">
        <input
          type="file"
          accept="image/*"
          hidden
          onChange={handleImageChange}
        />
        <div className="w-32 h-32 flex justify-center cursor-pointer">
          <img
            src={preview || logo}
            alt="Profile Preview"
            className="w-32 h-32 rounded-full object-cover border-2 border-teal-500"
          />
        </div>
      </label>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
      />
      <input
        type="date"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
      />
      <input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="border px-4  py-2 text-xl w-full rounded focus:outline-teal-200 mb-8"
      />
      <div className="w-full h-[1px] bg-amber-50 mask-x-from-50% mask-x-to-90% shadow-2xl"></div>
      <button
        onClick={() => {
          if (handleCheck()) {
            setDisplay(1);
          }
        }}
        className="bg-teal-500 w-full p-2 rounded text-white font-bold"
      >
        Next
      </button>
    </form>
  );
};

export default Profile;
