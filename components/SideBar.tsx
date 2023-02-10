"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { signOut, useSession } from "next-auth/react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import ChatRow from "./ChatRow";
import ModelSelection from "./ModelSelection";
import NewChat from "./NewChat";
import load from "../public/assets/loading2.svg";
function SideBar() {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session.user?.email!, "chats"),
        orderBy("createdAt", "desc")
      )
  );

  return (
    <div className="p-2 flex flex-row md:flex-col h-screen">
      <div className="flex-1 flex md:flex-col">
        <div className="flex md:flex-col flex-row space-x-2 md:space-x-0">
          <NewChat />
          <div className="hidden sm:inline">
            <ModelSelection />
          </div>
          <div className="flex flex-row md:flex-col space-y-2 md:my-2">
            {loading && (
              <div className="animate-pulse text-center text-white flex items-center gap-2">
                <img src={load.src} alt="" className="w-20 h-20" />
                <p className="text-2xl">Loading Chats...</p>
              </div>
            )}
            {/* Map Through the chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>
      {session && (
        <div className="flex flex-row items-start mx-2 mt-3 md:mt-0 md:flex-col">
          <img
            src={session.user?.image!}
            alt="avatar"
            className="h-12 w-12 md:h-20 md:w-20 rounded-full cursor-pointer mx-auto"
            title={session.user?.name!}
          />
          <button
            onClick={() => signOut()}
            className="text-white select-none shadow-md shadow-black px-4 py-3 mx-auto md:my-4 hover:opacity-50 rounded-xl transition-all duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
export default SideBar;
