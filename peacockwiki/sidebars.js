/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  sidebar: [
    {
      type: 'doc',
      label: 'Home',
      id: 'home',
    },
    {
      type: "category",
      label: "Bugs and Features",
      items: [
        "bugs",
        "features",
      ]
    },
    {
      type: 'doc',
      id: 'intel',
    },
  ],
}
