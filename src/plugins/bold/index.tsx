import { EDITOR_ELEMENT_TYPE, Plugin } from "../../utils/slate-plugins";
import { setTextNode, setUnTextNode } from "../../utils/slate-set";

declare module "slate" {
  interface TextElement {
    bold?: boolean;
  }
}

export const boldPluginKey = "bold";

export const BoldPlugin = (): Plugin => {
  return {
    key: boldPluginKey,
    type: EDITOR_ELEMENT_TYPE.INLINE,
    match: props => !!props.leaf[boldPluginKey],
    command: (editor, key, data) => {
      const marks = data.marks;
      if (marks && marks[key]) {
        setUnTextNode(editor, [key]);
      } else {
        setTextNode(editor, { [key]: true });
      }
    },
    render: context => <strong>{context.children}</strong>,
  };
};
