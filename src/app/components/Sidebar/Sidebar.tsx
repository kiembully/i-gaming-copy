"use client"; // Ensure this line is at the very top of the file

import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";

interface NavigationPage {
  name: string;
  href: string;
  imgsrc: string;
}

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  navigation: {
    pages: NavigationPage[];
  };
}

const Sidebar: React.FC<SidebarProps> = ({ open, setOpen, navigation }) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)} className="relative z-30">
      {/* Background overlay (can be added if needed) */}
      {/* <DialogBackdrop className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear" /> */}

      {/* Sidebar container */}
      <div className="fixed inset-0 z-40 flex top-[64px]">
        {" "} {/* Offset from top for header */}
        <DialogPanel
          transition
          className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-[#1A2E35] pb-12 pt-10 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
        >
          {/* Navigation items */}
          <div className="space-y-2 px-4 py-2">
            {navigation.pages.map((page) => (
              <div key={page.name} className="flex justify-center">
                <a
                  href={page.href}
                  className="relative rounded-full inline-flex items-center h-[40px] w-[200px] overflow-hidden border-[1px] border-[#51B9E4] bg-[transparent] px-3 text-[#55BBE5] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-[#185F74] before:transition-all before:duration-500 hover:before:w-full hover:text-white hover:shadow-[#185F74]"
                >
                  <Image
                    alt={page.name}
                    src={page.imgsrc}
                    width={20} // Add width and height for Image component
                    height={20} // Add width and height for Image component
                  />
                  {page.name}
                </a>
              </div>
            ))}
          </div>

          {/* Logout button */}
          <div className="space-y-7 px-4 py-6">
            <div className="flex justify-center mt-6">
              <a
                href="/"
                className="relative rounded-full inline-flex items-center h-[40px] w-[200px] overflow-hidden border-[1px] border-[#51B9E4] bg-[transparent] px-3 text-[#55BBE5] shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-[-1] before:h-full before:w-0 before:bg-[#185F74] before:transition-all before:duration-500 hover:before:w-full hover:text-white hover:shadow-[#185F74]"
              >
                Logout
              </a>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default Sidebar;
