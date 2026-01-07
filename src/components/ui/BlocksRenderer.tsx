import React from 'react';

interface TextNode {
    type: 'text';
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    strikethrough?: boolean;
    code?: boolean;
}

interface BlockNode {
    type: string;
    children: (TextNode | BlockNode)[];
    level?: number;
    format?: 'unordered' | 'ordered';
}

const renderText = (node: TextNode, index: number) => {
    let content: React.ReactNode = node.text;

    if (node.bold) content = <strong key={index}>{content}</strong>;
    if (node.italic) content = <em key={index}>{content}</em>;
    if (node.underline) content = <u key={index}>{content}</u>;
    if (node.strikethrough) content = <del key={index}>{content}</del>;
    if (node.code) content = <code key={index} className="bg-gray-100 dark:bg-gray-700 px-1 rounded">{content}</code>;

    return content;
};

const renderBlock = (block: any, index: number): React.ReactNode => {
    switch (block.type) {
        case 'paragraph':
            return (
                <p key={index} className="mb-4 leading-relaxed">
                    {block.children.map((child: any, i: number) =>
                        child.type === 'text' ? renderText(child, i) : renderBlock(child, i)
                    )}
                </p>
            );
        case 'heading':
            const HeadingTag = `h${block.level || 1}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
            const headingClasses = [
                '',
                'text-3xl font-bold mt-8 mb-4',
                'text-2xl font-bold mt-6 mb-3',
                'text-xl font-bold mt-4 mb-2',
                'text-lg font-bold mt-3 mb-1',
                'text-base font-bold mt-2',
                'text-sm font-bold'
            ][block.level || 1];
            return (
                <HeadingTag key={index} className={headingClasses}>
                    {block.children.map((child: any, i: number) =>
                        child.type === 'text' ? renderText(child, i) : renderBlock(child, i)
                    )}
                </HeadingTag>
            );
        case 'list':
            const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
            const listClasses = block.format === 'ordered' ? 'list-decimal ml-6 mb-4' : 'list-disc ml-6 mb-4';
            return (
                <ListTag key={index} className={listClasses}>
                    {block.children.map((child: any, i: number) => renderBlock(child, i))}
                </ListTag>
            );
        case 'list-item':
            return (
                <li key={index} className="mb-1">
                    {block.children.map((child: any, i: number) =>
                        child.type === 'text' ? renderText(child, i) : renderBlock(child, i)
                    )}
                </li>
            );
        case 'quote':
            return (
                <blockquote key={index} className="border-l-4 border-af-blue pl-4 italic my-6 text-gray-700 dark:text-gray-300">
                    {block.children.map((child: any, i: number) =>
                        child.type === 'text' ? renderText(child, i) : renderBlock(child, i)
                    )}
                </blockquote>
            );
        case 'image':
            return (
                <div key={index} className="my-8">
                    <img
                        src={block.image.url}
                        alt={block.image.alternativeText || ''}
                        className="rounded-xl w-full"
                    />
                    {block.image.caption && (
                        <p className="text-center text-sm text-gray-500 mt-2">{block.image.caption}</p>
                    )}
                </div>
            );
        default:
            return null;
    }
};

interface BlocksRendererProps {
    content: any[];
}

const BlocksRenderer: React.FC<BlocksRendererProps> = ({ content }) => {
    if (!content || !Array.isArray(content)) return null;

    return (
        <div className="strapi-blocks">
            {content.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default BlocksRenderer;
