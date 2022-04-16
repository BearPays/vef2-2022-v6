import { PrismicRichText } from '@prismicio/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { fetchFromPrismic } from '../api/prismic'
import styles from '../styles/Home.module.css'
import { Homepage, Sites } from '../types'

type Props = {
  homepage: Homepage;
  sites: Array<{node?: Sites}>;

}
export default function Home({homepage, sites}: Props){
  const titles = sites.map
  return (
    <div>
      <h1><PrismicRichText field={homepage.title} /> </h1>
      <p><PrismicRichText field={homepage.content}/> </p>
      <h1>Síður</h1>
      <ul>
      {sites.map((sites, i) => {
              return (
                <li key={i}>
                  <a href={`/${sites.node?._meta?.uid}`}>{sites.node?.title}</a>
                </li>
              );
            })}
      </ul>
    </div>


  )
}
const query = `
{
  allHomepages {
    edges {
      node {
        title
        content
      }
    }
  }
  allSitess {
    edges {
      node {
        title
        _meta{uid}
      }
    }
  }
}
`
type PrismicResponse = {
  allHomepages?: {
    edges?: Array<{
      node?: Homepage;
    }>;
  }
  allSitess?: {
    edges?: Array<{
      node?: Sites;
    }>;
  }
}

export async function getServerSideProps() {
  const result = await fetchFromPrismic<PrismicResponse>(query);

  const homepage = result.allHomepages?.edges?.shift()?.node;
  const sites = result.allSitess?.edges;

  return {
    props: { homepage, sites },
  };
}
