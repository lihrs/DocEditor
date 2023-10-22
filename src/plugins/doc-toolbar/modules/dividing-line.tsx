import { DocToolbarPlugin } from "../types";
import { getWrappedSignalMenu } from "../utils/wrapper";
import { exec } from "../utils/exec";
import { DIVIDING_LINE_KEY } from "src/plugins/dividing-line/types";
import { DividingLine } from "../icons/dividing-line";

export const DividingLineDocToolBarPlugin: DocToolbarPlugin = {
  renderIcon: () => null,
  renderMenu: state => {
    if (state.status.isBlock) return null;
    const onClick = () => {
      exec(state, DIVIDING_LINE_KEY);
      state.close();
    };
    return getWrappedSignalMenu(DividingLine, onClick);
  },
  renderBanner: () => null,
};
