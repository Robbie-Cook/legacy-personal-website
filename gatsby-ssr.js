/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */

import { MyLink, Page, SiteContext, ThemeContext, ThemeManager } from '@robbie-cook/react-components';
import React from 'react';

export const wrapRootElement = ({ element }) => {
  return (
    <SiteContext.Provider
      value={{
        sitename: 'Robbie Cook',
        links: [
          new MyLink('Home', '/'),
          new MyLink('About', '/about'),
          new MyLink('Projects', '/projects'),
        ],
      }}
    >
      <ThemeContext.Provider
        value={ThemeManager.fillTheme({
          navbar: {
            title: {
              name: 'Robbie Cook', // Should come from SiteContext
            },
          },
        })}
      >
        <Page>{element}</Page>
      </ThemeContext.Provider>
    </SiteContext.Provider>
  );
};
