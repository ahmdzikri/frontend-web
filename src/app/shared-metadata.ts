import { env } from "~/env";

const TITLE = "Indonesia Comic Con - Pop Culture";
const DESCRIPTION =
  "Indonesia Comic Con brings the best pop culture experience from both East and West in celebration of the latest content from comics, anime, toys, collectibles, games, TV, film and entertainment to dedicated fans across Indonesia";

export const defaultMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  metadataBase: new URL(env.APP_URL ?? ""),
};

export const subtitle = (subTitle: string) => `${subTitle} | ${TITLE}`;

export const twitterMetadata = {
  title: TITLE,
  description: DESCRIPTION,
  card: "summary_large_image",
  images: [`/og-image.png`],
};

export const ogMetadata = {
  url: new URL(env.APP_URL),
  title: TITLE,
  description: DESCRIPTION,
  type: "website",
  images: [`/og-image.png`],
};
