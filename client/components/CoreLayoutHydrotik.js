import React from "react";
import classnames from "classnames";
import { Components, replaceComponent } from "@reactioncommerce/reaction-components";
import Blaze from "meteor/gadicc:blaze-react-component";
import { Template } from "meteor/templating";

const CoreLayoutHydrotik = ({ actionViewIsOpen, structure }) => {
  const { layoutFooter, template } = structure || {};

  const pageClassName = classnames({
    "page": true,
    "show-settings": actionViewIsOpen
  });

  return (
    <div className={pageClassName} id="reactionAppContainer">
      <Blaze template={"CustomPromo"} />

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
