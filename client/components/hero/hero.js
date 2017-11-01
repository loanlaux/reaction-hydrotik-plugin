import { Template } from "meteor/templating";
import { HeroContainer } from "./index";

Template.CustomHero.helpers({
  HeroContainer() {
    return HeroContainer;
  }
});
