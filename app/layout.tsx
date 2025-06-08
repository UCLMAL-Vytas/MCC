import "../styles/globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { Analytics } from "@vercel/analytics/react";
// import CollapsibleChatbot from "@/components/chatbot/collapsible-chatbot";
import Head from "next/head";
const RootLayout = (props: { children: React.ReactNode }) => (
  <html>
    <Analytics />
    <GoogleAnalytics />
    <Head>
			<link rel='icon' href='/favicon.ico' />
		</Head>

    <body>

      {props.children}
      {/* <div id="chatbot" className="fixed bottom-0 left-0 right-0">
        <CollapsibleChatbot />
      </div> */}
    </body>
  </html>
);

export default RootLayout;
