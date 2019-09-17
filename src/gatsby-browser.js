/* eslint-disable react/jsx-filename-extension */

import { SiteContext, ThemeContext } from "@robbie-cook/react-components";

export const wrapRootElement = ({ element }) => {
  return (
    <SiteContext.Provider value={MySiteContext}>
      <ThemeContext.Provider value={MyTheme}>{element}</ThemeContext.Provider>
    </SiteContext.Provider>
  )
}
