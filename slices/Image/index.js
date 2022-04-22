import React from 'react'
import { PrismicImage, PrismicRichText } from '@prismicio/react'
//import {Image as Img} from 'next/image';

const Image = ({ slice }) => (
  <section>
      {
        slice.variation.primary.image.url ?(

          //skýrði óvar image sliceið Image þannig get ekki notað Image gæjan frá next
          <nextImage src={slice.variation.primary.image.url}
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
