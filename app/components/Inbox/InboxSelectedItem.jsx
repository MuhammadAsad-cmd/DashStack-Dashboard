"use client";
import Chat from "../ChatPage/Chat";
import Inbox from "../InboxData/Inbox";
import Starred from "../Starred/Starred";


const InboxSelectedItem = ({ selectedInboxItem }) => {
  return (
    <>
      {selectedInboxItem && (
        <div className="w-full">
          {selectedInboxItem === "Inbox" && <Inbox />}
          {selectedInboxItem === "Starred" && <Starred />}
          {selectedInboxItem === "Sent" && <Chat />}
          {/* {selectedInboxItem === "Draft" && <Team />} */}
          {/* {selectedInboxItem === "Spam" && <Todo />} */}
          {/* {selectedInboxItem === "Important" && <Contact />} */}
          {/* {selectedInboxItem === "Bin" && <Invoice />} */}
        
        </div>
      )}
    </>
  );
};

export default InboxSelectedItem;
