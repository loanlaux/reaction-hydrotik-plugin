import { Packages, Shops } from "/lib/collections";
import { Hooks, Reaction, Logger } from "/server/api";
import { check } from "meteor/check";

function modifyCheckoutWorkflow() {
  // Replace checkoutReview with our custom Template

  Logger.info("::: Modifying checkout workflow");

  Packages.update({
    name: "reaction-checkout",
    layout: {
      $elemMatch: {
        template: "checkoutReview"
      }
    }
  }, {
    $set: {
      "layout.$.template": "checkoutReviewBeesknees",
      "layout.$.label": "Review Order"
    }
  });
}

function addRolesToVisitors() {
  // Add the about permission to all default roles since it's available to all
  Logger.info("::: Adding about route permissions to default roles");

  Reaction.addRolesToGroups({
    allShops: true,
    groups: ["guest", "customer"],
    roles: ["about"]
  });
}

function changeLayouts(shopId, newLayout) {
  check(shopId, String);
  check(newLayout, String);

  Logger.info(`::: changing all layouts to ${newLayout}`);

  const shop = Shops.findOne(shopId);

  shop.layout.forEach((currentLayout) => {
    currentLayout.layout = newLayout;
  });

  return Shops.update(shopId, {
    $set: { layout: shop.layout }
  });
}

/**
 * Hook to make additional configuration changes
 */
Hooks.Events.add("afterCoreInit", () => {
  modifyCheckoutWorkflow();
  addRolesToVisitors();
  changeLayouts(Reaction.getShopId(), "coreLayout");
});
