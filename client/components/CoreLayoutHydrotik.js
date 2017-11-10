import React from "react";
import classnames from "classnames";
import { Components, replaceComponent } from "/imports/plugins/core/components/lib";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

import PromoContainer from "../containers/PromoContainer";

const CoreLayoutHydrotik = ({ actionViewIsOpen, structure }) => {
  const { layoutFooter, template } = structure || {};

  const pageClassName = classnames({
    "page": true,
    "show-settings": actionViewIsOpen
  });

  return (
    <div className={pageClassName} id="reactionAppContainer">
      <PromoContainer />

      <Components.NavBar />

      <Blaze template="cartDrawer" className="reaction-cart-drawer" />

      { Template[template] &&
      <main>
        <Blaze template={template} />
      </main>
      }

      { Template[layoutFooter] &&
      <Blaze template={layoutFooter} />
      }
    </div>
  );
};

replaceComponent("coreLayout", CoreLayoutHydrotik);
