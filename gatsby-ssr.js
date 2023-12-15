import React from 'react';

export const onRenderBody = ({ setHeadComponents, setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript
      key="gtm"
      dangerouslySetInnerHTML={{
        __html: `
          <iframe src="https://www.googletagmanager.com/ns.html?id=xxx-xxxxxxx" height="0" width="0"
              style="display:none;visibility:hidden"></iframe>
        `,
      }}
    />
  ]);
};