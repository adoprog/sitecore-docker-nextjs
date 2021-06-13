import { Text, RichText, Field } from '@sitecore-jss/sitecore-jss-nextjs';
import { StyleguideComponentProps } from 'lib/component-props';
import { usePersonalization } from "@jsonstorage/personalize-react";
import { ExperimentConfig } from '@jsonstorage/personalize-react/lib/interfaces';

const config = {
  id: "fa0f4907-6c9a-4ba4-82ac-3658ff5ed760"
} as ExperimentConfig;

type ContentBlockProps = StyleguideComponentProps & {
  fields: {
    heading: Field<string>;
    content: Field<string>;
  };
};

/**
 * A simple Content Block component, with a heading and rich text block.
 * This is the most basic building block of a content site, and the most basic
 * JSS component that's useful.
 */
const ContentBlock = ({ fields }: ContentBlockProps): JSX.Element => {
  const variant = usePersonalization(config);

  return(
  <div className={variant?.data.style}>
    <Text tag="h2" className="display-4" field={fields.heading}  />
    <img src={variant?.data.image} width="500px"></img>

    <RichText className="contentDescription" field={fields.content} />
  </div>)
};

export default ContentBlock;