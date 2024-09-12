import React, { ReactNode } from "react";
import Navbar from "@components/Navbar/Navbar";
import Footer from "@components/Footer/Footer";
import CommonDialog from "@components/Common/Dialogs/CommonDialog";
import Login from "@components/UserEntries/Login";
import Register from "@components/UserEntries/Register";
import { useState } from "react";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const [modalView, setModalView] = useState(0);
  const handleModalView = (view: number) => {
    openModal();
    setModalView(view);
  };

  return (
    <div className="flex flex-col w-full">
      <Navbar openDialog={(val: number) => handleModalView(val)} />
      {/* Pass Sidebar as a prop */}
      <div>{children}</div>
      <Footer />
      <CommonDialog isOpen={isModalOpen} onClose={closeModal} className="p-0">
        {modalView === 0 && <Login />}
        {modalView === 1 && <Register />}
      </CommonDialog>
    </div>
  );
};

export default DefaultLayout;
