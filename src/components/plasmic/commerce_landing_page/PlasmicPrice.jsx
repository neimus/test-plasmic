// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajhCivTh5EqndHPuriRTWz
// Component: MFstalk2SF4-
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: ajhCivTh5EqndHPuriRTWz/projectcss
import sty from "./PlasmicPrice.module.css"; // plasmic-import: MFstalk2SF4-/css

export const PlasmicPrice__VariantProps = new Array();

export const PlasmicPrice__ArgProps = new Array("dollars", "cents");

function PlasmicPrice__RenderFunc(props) {
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
      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__v6L5H
        )}
      >
        {"$"}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: "88",
        value: args.dollars,
        className: classNames(sty.slotTargetDollars)
      })}

      <div
        className={classNames(
          projectcss.all,
          projectcss.__wab_text,
          sty.text__sdJ1G
        )}
      >
        {"."}
      </div>

      {p.renderPlasmicSlot({
        defaultContents: "99",
        value: args.cents,
        className: classNames(sty.slotTargetCents)
      })}
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPrice__ArgProps,
      internalVariantPropNames: PlasmicPrice__VariantProps
    });

    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */
