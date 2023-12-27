import person from "../../Images/person.png";

const AccountSetting = () => {
  return (
    <div className="font-poppins mt-5 m-2 md:m-0">
      <div className="border-2 border-[#E6E6E6] rounded-lg md:w-[850px]">
        <h3 className="font-medium text-xl border-b-2 pl-6 p-2">
          {" "}
          Account Settings
        </h3>
        <div className="md:flex justify-between">
          <div className="flex flex-col w-[90%] md:w-[55%] pl-6 pt-5">
            <label className="text-sm pb-1">First Name</label>
            <input
              type="text"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600"
              placeholder="Dianne"
            />
            <label className="text-sm pb-1">Last Name</label>
            <input
              type="text"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600"
              placeholder="Russell"
            />
            <label className="text-sm pb-1">Email</label>
            <input
              type="text"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600"
              placeholder="dianne@gmail.com"
            />
            <label className="text-sm pb-1">Phone Number</label>
            <input
              type="text"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600"
              placeholder="9384920483"
            />
            <button className="text-xl font-semibold p-2 rounded-full text-white bg-[#FF6316] mb-5 w-52">
              Save Changes
            </button>
          </div>
          <div className="flex flex-col justify-center m-10">
            <img src={person} />
            <button className="border-2 border-[#FF6316] rounded-full p-2 text-[#FF6316] mt-6">
              Choose Image
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSetting;
