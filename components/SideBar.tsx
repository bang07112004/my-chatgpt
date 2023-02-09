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
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* NewChat */}
          <NewChat />
          <div className="hidden sm:inline">
            {/* ModelSelections */}

            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2 my-2">
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
        <div className="flex flex-col">
          <img
            src={session.user?.image!}
            alt="avatar"
            className="h-12 w-12 md:h-20 md:w-20 rounded-full cursor-pointer mx-auto"
            title={session.user?.name!}
          />
          <button
            onClick={() => signOut()}
            className="text-white select-none shadow-md shadow-black px-4 py-3 mx-auto my-4 hover:opacity-50 rounded-xl transition-all duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
export default SideBar;
