import { storyblokInit, apiPlugin} from "@storyblok/react/rsc"
import StoryblokBridgeLoader from '@storyblok/react/bridge-loader'

import './globals.css';

// import Page from "@/components/Page"
// import Grid from "@/components/Grid"
// import Feature from "@/components/Feature"
// import Teaser from "@/components/Teaser"

export const metadata = {
  title: 'Storyblok and Next.js 13',
  description: 'A Next.js and Storyblok app using app router ',
}

storyblokInit({
  accessToken: 'r5WEZVFgS5paFnD81kyBQAtt',
  use: [apiPlugin],
  apiOptions: {
    region: "ap",
  },
  // components: {
  //   feature: Feature,
  //   grid: Grid,
  //   page: Page,
  //   teaser: Teaser
  // }

})

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>{children}</body>
        <StoryblokBridgeLoader options={{}} />
      </html>
  )
}
