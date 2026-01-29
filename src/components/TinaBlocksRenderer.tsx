import React from 'react';
import { tinaField } from "tinacms/dist/react";
import ParallaxCarousel from './sections/parallax-carousel/ParallaxCarousel';
import LatestNews from './sections/LatestNews';
import NoticeBoard from './sections/NoticeBoard';
import TopperSection from './sections/TopperSection';
import PhilosophySection from './sections/PhilosophySection';
import CampusLifeSection from './sections/CampusLifeSection';

interface TinaBlocksRendererProps {
  blocks?: any[];
}

const TinaBlocksRenderer: React.FC<TinaBlocksRendererProps> = ({ blocks }) => {
  if (!blocks) return null;

  return (
    <>
      {blocks.map((block, i) => {
        // Handle both GraphQL __typename and manual _template (if strictly used in dev without GraphQL)
        let templateName = '';
        if (block.__typename) {
             templateName = block.__typename;
        } else if (block._template) {
             templateName = `PageFlexible_pageBlocks${block._template.charAt(0).toUpperCase() + block._template.slice(1)}`;
        }

        let Component = null;

        switch (templateName) {
          case 'PageFlexible_pageBlocksHeroCarousel':
            Component = ParallaxCarousel;
            break;
          case 'PageFlexible_pageBlocksLatestNews':
            Component = LatestNews;
            break;
          case 'PageFlexible_pageBlocksNoticeBoard':
            Component = NoticeBoard;
            break;
          case 'PageFlexible_pageBlocksTopperSection':
            Component = TopperSection;
            break;
          case 'PageFlexible_pageBlocksPhilosophySection':
            Component = PhilosophySection;
            break;
          case 'PageFlexible_pageBlocksCampusLifeSection':
            Component = CampusLifeSection;
            break;
          default:
            console.warn(`Unrecognized block type: ${templateName}`, block);
            return (
              <div className="p-4 border border-red-500 text-red-500 bg-red-50 my-4" key={i}>
                <strong>Unrecognized block type:</strong> {templateName}
                <pre className="text-xs mt-2 overflow-auto max-h-32">{JSON.stringify(block, null, 2)}</pre>
              </div>
            );
        }

        // We wrap the block to enable "Click to Edit" (Contextual Editing) for the block itself.
        // We also pass the 'block' object down so components can implement field-level editing.
        return (
          <div key={i} data-tina-field={tinaField(block)}>
            <Component {...block} block={block} />
          </div>
        );
      })}
    </>
  );
};

export default TinaBlocksRenderer;
