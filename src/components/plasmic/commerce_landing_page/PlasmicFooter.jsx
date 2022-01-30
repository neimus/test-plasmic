// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ajhCivTh5EqndHPuriRTWz
// Component: oHwEuPjwJkpq
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: VTX27BUXzAtl/component
import Button from "../../Button"; // plasmic-import: 4qAucjeu1cAD/component
import CopyrightSocialLanguage from "../../CopyrightSocialLanguage"; // plasmic-import: ado45SbVfEqi/component
import { useScreenVariants as useScreenVariants_3E952DoCYh3 } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: 3_e952DoCYh3/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_commerce_landing_page.module.css"; // plasmic-import: ajhCivTh5EqndHPuriRTWz/projectcss
import sty from "./PlasmicFooter.module.css"; // plasmic-import: oHwEuPjwJkpq/css
import EmailIcon from "./icons/PlasmicIcon__Email"; // plasmic-import: vpctran7_757/icon
import DeliveryIcon from "./icons/PlasmicIcon__Delivery"; // plasmic-import: LL1ZtCvPvH0c/icon
import EnterIcon from "./icons/PlasmicIcon__Enter"; // plasmic-import: iZDnzE_kylV4/icon
import QuestionIcon from "./icons/PlasmicIcon__Question"; // plasmic-import: x_vmS0It_J0g/icon

export const PlasmicFooter__VariantProps = new Array();

export const PlasmicFooter__ArgProps = new Array();

function PlasmicFooter__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants_3E952DoCYh3()
  });

  return (
    <section
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__rwwmn)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__jo7PI)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__i8Ayh
            )}
          >
            {"Subscribe"}
          </div>

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text___1Gfse
            )}
          >
            {
              "Sign up for exclusive offers, original stories, activism, events and more."
            }
          </div>

          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            placeholder={"Email address..."}
            showStartIcon={true}
            startIcon={
              <EmailIcon
                className={classNames(projectcss.all, sty.svg__fuBhu)}
                role={"img"}
              />
            }
          />

          <Button
            className={classNames("__wab_instance", sty.button__kaETl)}
            colors={"black"}
          >
            {"Sign me up"}
          </Button>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___1SjlZ)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__ciqln
            )}
          >
            {"Help"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___9UIvm)}
          >
            <Button
              showStartIcon={true}
              startIcon={
                <DeliveryIcon
                  className={classNames(projectcss.all, sty.svg__zLcLv)}
                  role={"img"}
                />
              }
            >
              {"Order status"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__zxYv)}
              showStartIcon={true}
              startIcon={
                <EnterIcon
                  className={classNames(projectcss.all, sty.svg__lKhmr)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oeIr0
                )}
              >
                {"Returns and exchanges"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__wuLeX)}
              showStartIcon={true}
              startIcon={
                <QuestionIcon
                  className={classNames(projectcss.all, sty.svg__ps01A)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__bJnv6
                )}
              >
                {"Help center"}
              </div>
            </Button>
          </p.Stack>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___2CwqU)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__yfg1J
            )}
          >
            {"More info"}
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__mR57R)}>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__dzYm)}
            >
              <Button>{"Gift cards"}</Button>

              <Button
                className={classNames("__wab_instance", sty.button__y6Wi)}
              >
                {"Find a store"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__nkra)}
              >
                {"Careers"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__qrmqx)}
              >
                {"Sitemap"}
              </Button>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__u6NQ)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__sPduN)}
              >
                {"Group sales"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button___5ERYx)}
              >
                {"Privacy policy"}
              </Button>

              <Button
                className={classNames("__wab_instance", sty.button__fEdL)}
              >
                {"Contact us"}
              </Button>
            </p.Stack>
          </div>
        </p.Stack>
      </p.Stack>

      <CopyrightSocialLanguage
        data-plasmic-name={"copyrightSocialLanguage"}
        data-plasmic-override={overrides.copyrightSocialLanguage}
        className={classNames("__wab_instance", sty.copyrightSocialLanguage)}
      />
    </section>
  );
}

const PlasmicDescendants = {
  root: ["root", "textInput", "textbox", "copyrightSocialLanguage"],
  textInput: ["textInput", "textbox"],
  copyrightSocialLanguage: ["copyrightSocialLanguage"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textInput: makeNodeComponent("textInput"),
    copyrightSocialLanguage: makeNodeComponent("copyrightSocialLanguage"),
    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */
