import React from 'react'
import { PrismicRichText } from '@prismicio/react'

const Accordion = ({ slice }) => (
  <section>
        <h2>{asText(slice.variation.primary.title)}</h2>
        <ul>
          {slice.variation.items.map(
            (value, i) => {
              return(
                <li key={i}>
                  <AccordionItemComponent item={value} />
                </li>
              )
            }
          )}
        </ul>
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

export function AccordionItemComponent({ item }){
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => {
    setIsOpen((open) => !open);
    };
    return (
      <div>
        <div className="acc">
          <h3>{item.header}</h3>
          <button onClick={onClick}>{isOpen ? 'Loka' : 'Opna'}</button>
        </div>
        {isOpen && <PrismicRichText field={item.content} />}
      </div>
    );
}

export default Accordion
