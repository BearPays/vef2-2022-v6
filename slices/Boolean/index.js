import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Boolean = ({ slice }) => (
  <section>
      {
        slice.variation.primary.question ?
        <PrismicRichText field={slice.variation.primary.question}/>
        : <h2>Template slice, update me!</h2>
      }
    {
      slice.variation.primary.bolean ?
      <Boolean field={slice.variation.primary.bolean}/>
      : <p>start by editing this slice from inside Slice Machine!</p>
    }
    <style jsx>{`
        section {
          max-width: 600px;
          margin: 4em auto;
          text-align: center;
        }
        .title {
          color: #8592e0;
        }
    `}</style>
  </section>
)

export default Boolean
