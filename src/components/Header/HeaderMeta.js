import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";
import { PageContext } from "../Layouts/LayoutMain";

const HeaderMeta = () => {
  const query = graphql`
    query {
      sanityMyInfo {
        name
        email
        phone
        titles {
          name
          occuCode
        }
      }
      sanitySiteInfo {
        siteSEO {
          metaDescription
        }
      }
    }
  `;

  const staticQuery = useStaticQuery(query);

  const { name, email, phone, titles } = staticQuery.sanityMyInfo;
  const description = staticQuery.sanitySiteInfo.siteSEO.metaDescription;
  const { location, pageData } = useContext(PageContext);
  const { pageTitle } = pageData;
  const { href } = location;
  const pageUrl = href;

  const title = `${pageTitle} < Avi Schoenbrun's Portfolio`;

  const occupations = titles.map((title) => {
    return {
      "@type": "Occupation",
      name: title.name,
      occupationalCategory: title.occuCode,
    };
  });

  const jsonLD = {
    "@context": "http://schema.org",
    "@type": "person",
    name: name,
    email: email,
    telephone: phone,
    descripton: description,
    hasOccupation: occupations,
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:description" content={description} />
      <link rel="canonical" href={pageUrl} />
      <meta name="og:url" content={pageUrl} />
      <meta name="twitter:card" content="summary" />
      <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
    </Helmet>
  );
};

export default HeaderMeta;
