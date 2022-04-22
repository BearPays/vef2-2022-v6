import { SliceZone } from "@prismicio/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { type } from "os";
import { fetchFromPrismic } from "../api/prismic";
import { components } from "../slices";
import { Sites } from "../types";


type Props = {
  sites: Sites | undefined;
}

const query = `
query ($uid: String = "") {
  sites(uid: $uid, lang: "en-us") {
    title
    slices {
      ... on SitesSlicesText {
        type
        variation {
          ... on SitesSlicesTextDefault {
            primary {
              text
            }
          }
        }
      }
      ... on SitesSlicesImage {
        type
        variation {
          ... on SitesSlicesImageDefault {
            primary {
              image
              caption
            }
          }
        }
      }
      ... on SitesSlicesAccordion {
        type
        variation {
          ... on SitesSlicesAccordionDefault {
            primary {
              title
            }
            items {
              header
              content
            }
          }
        }
      }
      ... on SitesSlicesBoolean {
        type
        variation {
          ... on SitesSlicesBooleanDefault {
            primary {
              question
              bolean

            }
          }
        }
      }
    }
  }
}`


type SitePrismicResponse = {
  sites: Sites;
};


export default function site({ sites }: Props) {
  console.log(sites)
  return(
    <div>

    <Head>
      <title>{sites?.title}</title>
        <meta name="escription" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <div>
        <h1>{sites?.title}</h1>
        <SliceZone slices={sites?.slices} components={components} />
      </div>
    </main>
    </div>
  )
}

export async function getServerSideProps({params}:{params: {uid:string}} ) {
  const { uid } = params;
  const result = await fetchFromPrismic<SitePrismicResponse>(query, {uid});

  const sites = result.sites ?? null;

  if (!sites) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: { sites },
  };



}
