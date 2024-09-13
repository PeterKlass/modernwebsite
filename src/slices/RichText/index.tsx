import Bounded from "@/components/Bounded";
import type { Content } from "@prismicio/client";
import {
  PrismicRichText,
  SliceComponentProps,
  JSXMapSerializer,
} from "@prismicio/react";

const components: JSXMapSerializer = {
  label: ({ node, children }) => {
    if (node.data.label == "codespan") {
      return <code>{children}</code>;
    }
  },
};

type RichTextProps = SliceComponentProps<Content.RichTextSlice>;

export default function Richtext({ slice }: RichTextProps) {
  return (
    <Bounded>
      <div className="mt-4 prose prose-invert prose-lg prose-slate">
        <PrismicRichText field={slice.primary.content} components={components} />
      </div>
    </Bounded>
  );
};
