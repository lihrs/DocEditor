import { EDITOR_ELEMENT_TYPE, Plugin } from "../../utils/create-plugins";
import { Transforms, Text } from "slate";

export const boldPluginKey = "bold";

export const BoldPlugin = (): Plugin => {
  return {
    key: boldPluginKey,
    type: EDITOR_ELEMENT_TYPE.INLINE,
    match: props => !!props.leaf[boldPluginKey],
    command: (editor, key) => {
      Transforms.setNodes(
        editor,
        { [key]: true },
        { match: node => Text.isText(node), split: true }
      );
    },
    render: context => <strong>{context.children}</strong>,
  };
};
