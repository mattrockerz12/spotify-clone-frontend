"use client";

import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();
  const handleClose = () => {
    router.back();
  };

  return (
    <Modal
      title="Register"
      description="Register Description"
      onClose={handleClose}
    >
      <div className="flex flex-col mt-[8px] mb-[8px] gap-[16px]">
        <div className="flex flex-col mt-[8px] mb-[8px] gap-[16px]">
          <div>
            <label className="text-[14px] mb-[8px] text-gray-50 block">
              Email
            </label>
            <input
              type="email"
              className="bg-[#1e1e1e] rounded-[4px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] cursor-text border-[1px] border-[#3e3e3e] border-solid text-[14px] w-[100%] text-white box-border tracking-[0px] "
            />
          </div>
          <div>
            <label className="text-[14px] mb-[8px] text-gray-50 block">
              Password
            </label>
            <input
              type="password"
              className="bg-[#1e1e1e] rounded-[4px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] cursor-text border-[1px] border-[#3e3e3e] border-solid text-[14px] w-[100%] text-white box-border tracking-[0px] "
            />
          </div>
          <button className="bg-[#404040] text-white border-[#22c55e] flex items-center justify-center gap-[8px] rounded-[4px] text-[14px] pt-[10px] pb-[10px] pl-[15px] pr-[15px] cursor-pointer border-[1px] border-solid width-[100%] hover:bg-[#22c55e]">
            Sign Up
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Signup;
