import React from 'react';
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
        // Expected __typename format: PageFlexible_pageBlocks<BlockTemplateName>

        let templateName = '';
        if (block.__typename) {
             templateName = block.__typename;
        } else if (block._template) {
             // Fallback for manual _template, though we should prefer __typename
             // If manual, we construct what we expect the switch case to be, or handle it directly
             // For simplicity, let's map _template to the expected typename format if possible,
             // or just let the switch handle the raw _template if we added cases for it.
             // But actually, let's just use the _template name capitalized as a suffix check if we wanted to be generic.
             // For now, let's stick to the generated typenames we saw in the error.
             templateName = `PageFlexible_pageBlocks${block._template.charAt(0).toUpperCase() + block._template.slice(1)}`;
        }

        switch (templateName) {
          case 'PageFlexible_pageBlocksHeroCarousel':
            return <ParallaxCarousel key={i} {...block} />;
          case 'PageFlexible_pageBlocksLatestNews':
            return <LatestNews key={i} {...block} />;
          case 'PageFlexible_pageBlocksNoticeBoard':
            return <NoticeBoard key={i} {...block} />;
          case 'PageFlexible_pageBlocksTopperSection':
            return <TopperSection key={i} {...block} />;
          case 'PageFlexible_pageBlocksPhilosophySection':
            return <PhilosophySection key={i} {...block} />;
          case 'PageFlexible_pageBlocksCampusLifeSection':
            return <CampusLifeSection key={i} {...block} />;
          default:
            console.warn(`Unrecognized block type: ${templateName}`, block);
            return (
              <div className="p-4 border border-red-500 text-red-500 bg-red-50 my-4" key={i}>
                <strong>Unrecognized block type:</strong> {templateName}
                <pre className="text-xs mt-2 overflow-auto max-h-32">{JSON.stringify(block, null, 2)}</pre>
              </div>
            );
        }
      })}
    </>
  );
};

export default TinaBlocksRenderer;
