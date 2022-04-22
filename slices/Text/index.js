import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Text = ({ slice }) => (
  <section>
      {
        slice.variation.primary.text ? (
        <PrismicRichText field={slice.variation.primary.text}/>
        ):( <h2>Template slice, update me!</h2>
        )}
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

export default Text
