// LIBRARIES
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

// tRPC
import { api } from "~/utils/api";

// STYLES
import "~/styles/globals.css";

// COMPONENTS
import Header from "~/components/templates/header";
import Footer from "~/components/templates/footer";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
