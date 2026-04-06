// components/SEO.tsx
import Head from "next/head";

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
};

export default function SEO({
  title = "Sakil Sazzad Joy | Software Engineer",
  description = "Software Engineer specializing in MERN, Next.js, and full-stack development. Building scalable apps, dashboards, and AI-integrated systems.",
  url = "https://ssjoy.xyz",
  image = "https://ssjoy.xyz/og-image.png",
}: SEOProps) {
  return (
    <Head>
      {/* Basic */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Keywords (optional but fine for portfolio) */}
      <meta
        name="keywords"
        content="Sakil Sazzad Joy, Software Engineer, MERN stack, Next.js developer, Bangladesh developer, Full stack developer"
      />

      {/* Author */}
      <meta name="author" content="Sakil Sazzad Joy" />

      {/* Open Graph (LinkedIn, Facebook) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  );
}
