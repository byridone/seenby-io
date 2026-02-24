"use strict";
exports.__esModule = true;
var Navbar_1 = require("@/components/Navbar");
var Hero_1 = require("@/components/Hero");
var HowItWorks_1 = require("@/components/HowItWorks");
var AIEcosystem_1 = require("@/components/AIEcosystem");
var Niches_1 = require("@/components/Niches");
var Testimonials_1 = require("@/components/Testimonials");
var PricingCards_1 = require("@/components/PricingCards");
var FAQ_1 = require("@/components/FAQ");
var SectionSeparator_1 = require("@/components/SectionSeparator");
var AIDictionaryDrawer_1 = require("@/components/AIDictionaryDrawer");
var SeoVsGeoDrawer_1 = require("@/components/SeoVsGeoDrawer");
var Footer_1 = require("@/components/Footer");
function Home() {
    return (React.createElement("main", { className: "min-h-screen bg-black text-white selection:bg-blue-500/30" },
        React.createElement(Navbar_1["default"], null),
        React.createElement(Hero_1["default"], null),
        React.createElement(AIDictionaryDrawer_1["default"], null),
        React.createElement(SeoVsGeoDrawer_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(HowItWorks_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(AIEcosystem_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(Niches_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(Testimonials_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(PricingCards_1["default"], null),
        React.createElement(SectionSeparator_1["default"], null),
        React.createElement(FAQ_1["default"], null),
        React.createElement(Footer_1["default"], null)));
}
exports["default"] = Home;
