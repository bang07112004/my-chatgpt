import { SessionProvider } from "../components/SessionProvider";
import SideBar from "../components/SideBar";
import "../styles/globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "../pages/api/auth/[...nextauth]";
import Login from "../components/Login";
import ClientProvider from "../components/ClientProvider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ) : (
            <div className="flex flex-col md:flex-row">
              <div className="bg-[#202123] md:max-w-xs w-full md:h-screen md:max-h-screen max-h-fit overflow-x-auto md:overflow-x-hidden overflow-y-hidden md:overflow-y-auto md:min-w-[20rem]">
                <SideBar />
              </div>
              {/* ClientProvider-Notification */}
              <ClientProvider />
              <div className="bg-[#343541] w-full md:flex-1"> {children}</div>
            </div>
          )}
        </SessionProvider>
      </body>
    </html>
  );
}
