import Header from '@/Common/Header';

export default function RootLayout({ children}: {
  children: React.ReactNode
}) {
  return (
    <>
          <div className="bg-background min-h-screen text-off-white bg bg-circles bg-cover bg-no-repeat">
            <Header/>
            {children}
          </div>
    </>
  );
}