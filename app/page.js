import {
  getStoryblokApi,
  StoryblokComponent,
  setComponents,
  getComponent,
} from "@storyblok/react/rsc";
import { FindComponents, setComponentsMap } from "./_lib/utils";

// Imports are commeneted out currenty (just to test)
// import Page from "@/components/Page"
// import Grid from "@/components/Grid"
// import Feature from "@/components/Feature"
// import Teaser from "@/components/Teaser"

export default async function Home() {
  const { data } = await fetchData();

  let components = await FindComponents(data.story.content);
  let cm = await setComponentsMap(components);

  await setComponents(cm);

  // Componnent map with the imported components (just to test)
  // let cmt = {
  //     feature: Feature,
  //     grid: Grid,
  //     page: Page,
  //     teaser: Teaser
  // }

  // Trying printing the components map, it works (just to test) You can ucomment this to try
  // components.forEach(async (c) => {
  //   console.log(c);
  //   let a = await getComponent(c);
  //   console.log(a);
  // });

  return (
    <div>
      <StoryblokComponent blok={data.story.content} />
    </div>
  );
}

export async function fetchData() {
  let sbParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return await storyblokApi.get(`cdn/stories/home`, sbParams, {
    cache: "no-store",
  });
}
