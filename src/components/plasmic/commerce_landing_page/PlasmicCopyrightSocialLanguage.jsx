// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajhCivTh5EqndHPuriRTWz
// Component: ado45SbVfEqi
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: 4qAucjeu1cAD/component
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: ajhCivTh5EqndHPuriRTWz/projectcss
import sty from "./PlasmicCopyrightSocialLanguage.module.css"; // plasmic-import: ado45SbVfEqi/css
import TwitterIcon from "./icons/PlasmicIcon__Twitter"; // plasmic-import: oUdbwmsZUmM9/icon
import YoutubeIcon from "./icons/PlasmicIcon__Youtube"; // plasmic-import: 8ICEw6I79DsC/icon
import PintrestIcon from "./icons/PlasmicIcon__Pintrest"; // plasmic-import: 6FED3e7agg1r/icon
import Icon15Icon from "./icons/PlasmicIcon__Icon15"; // plasmic-import: nWMK8my1ND9g/icon

export const PlasmicCopyrightSocialLanguage__VariantProps = new Array();

export const PlasmicCopyrightSocialLanguage__ArgProps = new Array();

function PlasmicCopyrightSocialLanguage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___7KHe0)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___8BAp5)}
        >
          <div
            data-plasmic-name={"text"}
            data-plasmic-override={overrides.text}
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text
            )}
          >
            {"?? 2021 ShoeShop, Inc. All Rights Reserved."}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__qo9V)}>
            <Button
              iconOnly={true}
              link={"http://twitter.com"}
              startIcon={
                <TwitterIcon
                  className={classNames(projectcss.all, sty.svg__bnac5)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__nolTy)}
              iconOnly={true}
              link={"http://youtube.com"}
              startIcon={
                <YoutubeIcon
                  className={classNames(projectcss.all, sty.svg__lY31R)}
                  role={"img"}
                />
              }
            />

            <Button
              className={classNames("__wab_instance", sty.button__a6NdT)}
              iconOnly={true}
              link={"http://pinterest.com"}
              startIcon={
                <PintrestIcon
                  className={classNames(projectcss.all, sty.svg__bqB8M)}
                  role={"img"}
                />
              }
            />
          </div>
        </p.Stack>

        <Button
          className={classNames("__wab_instance", sty.button__bWsiw)}
          endIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__eAxkf)}
              role={"img"}
            />
          }
          showEndIcon={true}
          startIcon={
            <Icon15Icon
              className={classNames(projectcss.all, sty.svg__jz1L)}
              role={"img"}
            />
          }
        >
          {"English"}
        </Button>
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCopyrightSocialLanguage__ArgProps,
      internalVariantPropNames: PlasmicCopyrightSocialLanguage__VariantProps
    });

    return PlasmicCopyrightSocialLanguage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCopyrightSocialLanguage";
  } else {
    func.displayName = `PlasmicCopyrightSocialLanguage.${nodeName}`;
  }
  return func;
}

export const PlasmicCopyrightSocialLanguage = Object.assign(
  // Top-level PlasmicCopyrightSocialLanguage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicCopyrightSocialLanguage
    internalVariantProps: PlasmicCopyrightSocialLanguage__VariantProps,
    internalArgProps: PlasmicCopyrightSocialLanguage__ArgProps
  }
);

export default PlasmicCopyrightSocialLanguage;
/* prettier-ignore-end */
