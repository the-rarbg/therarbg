import Header from "../Common/Header"

export default function RootLayout({ children})  {
  return (
    <>
          <div className="bg-background min-h-screen text-off-white bg bg-circles bg-[length:100vw] bg-no-repeat">
            <Header/>
            {children}
          </div>
    </>
  );
}