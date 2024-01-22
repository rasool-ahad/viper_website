import "../styles/master.scss";
import "../styles/navbar.scss";
import "../styles/intro.scss";

import "../styles/atributies.scss";

import "../styles/landing.scss";
import "../styles/footer.scss";
import "../styles/main.css";
import textTheme from "../component/global/color";
import { CacheProvider, ThemeProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";

import { createContext, useEffect, useState } from "react";
import DigiAlert from "../utils/digialert.js";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

export const AuthContext = createContext();

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState();


  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={textTheme}>
        {/* <AuthContext.Provider value={{ authentication }}> */}
          <Component {...pageProps} />
        {/* </AuthContext.Provider> */}
        <DigiAlert
          open={open}
          close={() => setOpen(false)}
          type="error"
          message={message}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
