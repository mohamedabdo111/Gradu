import React from "react";
import img from "../../images/80cbe4fdb55341eafcc8f6768afe17f5.jpeg";
const UserInformation = () => {
  return (
    <>
      <div className=" flex flex-row-reverse justify-between">
        <div className="text-end">
          <h1 className=" fam text-xl font-bold">شقه سوبر لوكس</h1>
          <p className="mt-2 text-lg text-gray-600 fam">200 EGP</p>
          <p className="mt-2 text-lg text-gray-600 fam ">دمياط</p>
          <p className="mt-2 text-lg text-gray-600 fam ">
            عصير قصب سوبيا جامد اووي
          </p>
          <p className="mt-2 text-lg text-gray-600 fam">
            شقه 4 اوض وصاله وفيها حمام بحري ودشين
          </p>
        </div>
        <div className=" w-fit h-fit relative cursor-pointer">
          <svg
            className="w-[48px] h-[48px] text-red-600 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z" />
          </svg>
          <p className="heart-Number">5</p>
        </div>
      </div>
      <div className=" flex flex-row-reverse justify-between ">
        <p className="mt-2 text-lg text-gray-500">(4/0)</p>
        <button className=" btn bg-sec">Enroll</button>
      </div>

      {/* user Information */}
      <div className="flex flex-row-reverse items-center gap-3 p-4 border-t-2 border-b-2 my-8 border-gray-500 ">
        <img
          src={img}
          alt="userImage"
          className=" w-[100px] h-[100px] rounded-full border-4 border-sec "
        ></img>
        <div className="text-end">
          <h1 className="fam text-xl font-bold">اسم مالك الشقه</h1>
          <p className="mt-2 text-lg text-gray-600 fam ">(عدد الشقق) شقه</p>
        </div>
      </div>
    </>
  );
};

export default UserInformation;
