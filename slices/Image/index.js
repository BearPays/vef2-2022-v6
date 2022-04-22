import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Image = ({ slice }) => (
  <section>
      {
        slice.variation.primary.image.url ?(

          <Image src={slice.variation.primary.image.url}
          alt={slice.variation.primary.image.alt}
          width={400}
          height={400}
          />
        ):(
          <h2>Template slice, update me!</h2>
        )}
    {
      slice.variation.primary.caption ?
      <PrismicRichText field={slice.variation.primary.caption}/>
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

export default Image
