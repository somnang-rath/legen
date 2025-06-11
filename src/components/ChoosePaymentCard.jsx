import React, { useState } from "react";
import { Timer, BadgeCheck } from "lucide-react";
import khqrLogo from "../assets/img/cardpayment/khqr.png";
import point from "../assets/img/cardpayment/5_point.png";
import qr from "../assets/img/cardpayment/qr.jpg";
const paymentOptions = [
  {
    id: "member1",
    name: "Member Point",
    desc: "Available $0.00",
    logo: point,
  },
  {
    id: "khqr",
    name: "KHQR",
    desc: "Scan to pay with banking app",
    logo: khqrLogo,
  },
  {
    id: "member2",
    name: "Member Point",
    desc: "Available $0.00",
    logo: point,
  },
];

const ChoosePaymentCard = () => {
  const [selected, setSelected] = useState("khqr");
  const [name, setName] = useState("KHQR");

  return (
    <div className="space-y-5">
      {/* Payment Options */}
      {paymentOptions.map((opt) => (
        <div
          key={opt.id}
          onClick={() => {
            setSelected(opt.id);
            setName(opt.name);
          }}
          className={`flex items-center justify-between px-3 py-3 rounded-xl cursor-pointer transition-all duration-200 ${
            selected === opt.id
              ? "bg-white/5 border border-red-500"
              : "bg-white/5 border border-transparent"
          }`}
        >
          <div className="flex items-center space-x-4">
            <img
              src={opt.logo}
              alt={opt.name}
              className="w-18  rounded   object-cover"
            />
            <div>
              <p className="font-semibold">{opt.name}</p>
              <p className="text-sm text-gray-300">{opt.desc}</p>
            </div>
          </div>

          {/* Custom Radio */}
          <div>
            <BadgeCheck
              className={`${
                selected === opt.id ? "text-red-500" : "text-gray-300"
              }`}
            />
          </div>
        </div>
      ))}
      <div className="flex flex-col justify-center items-center">
        <img src={qr} alt="qr" />
        <p className="text-xl mt-2">{name}</p>
      </div>
    </div>
  );
};

export default ChoosePaymentCard;
