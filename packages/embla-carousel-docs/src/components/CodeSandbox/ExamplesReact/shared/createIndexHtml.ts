import { kebabCaseToPascalCase } from 'utils'

export const createIndexHtml = (
  title: string = 'Embla React Example',
): string => {
  const formattedTitle = kebabCaseToPascalCase(title, ' ')

  return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
          <title>${formattedTitle}</title>
        </head>
  
        <body>
          <noscript>You need to enable JavaScript to run this app.</noscript>
          <div id="root"></div>
        </body>
      </html>
    `
}
