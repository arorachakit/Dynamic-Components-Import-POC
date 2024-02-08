import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";

const AnotherPage = ({ blok }) => {
  return (<div {...storyblokEditable(blok)}>
  <h2 className="text-2xl mb-10" >{blok.title}</h2>
  <h2 className="text-2xl mb-10">{blok.desc}</h2>
  {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </div>)
};

export default AnotherPage;