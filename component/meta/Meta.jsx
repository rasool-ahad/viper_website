import { NextSeo } from "next-seo";
import dataMeta from "../../data/dataMeta.json";

function Meta({ name }) {
  return (
    <NextSeo
      openGraph={{
        url: dataMeta[name].url,
        title: dataMeta[name].title,
        description: dataMeta[name].description,
        images: [
          {
            url: "https://digiex24.com/image/logoBadge.png",
            width: 64,
            height: 64,
            alt: dataMeta[name].title,
            type: "image/png",
          },
        ],
        siteName: "Digiex24",
      }}
      additionalLinkTags={[
        {
          rel: "apple-touch-icon",
          href: "https://digiex24.com/image/logoBadge.png",
          sizes: "64x64",
        },
      ]}
    />
  );
}

export default Meta;
