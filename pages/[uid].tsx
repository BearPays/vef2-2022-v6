import { type } from "os";


type Props = {
  sites: Sites;
}

const query = `
query ($uid: String = "verkefni-1") {
  sites(uid: $uid, lang: "is") {
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

type PrismicResponse = {

}
