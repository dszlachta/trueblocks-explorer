import { useContext } from "react";
import GlobalContext from "store";

//----------------------------------------------------------------------
export const menusDefault = {
  items: [
    { label: "Dashboard", path: "/", exact: true },
    {
      label: "Projects",
      items: [
        {
          label: "View...",
          enableFunc: page => {
            return page === "view";
          }
        },
        { label: "Edit..." },
        { label: "Save" },
        { label: "Export" }
      ]
    },
    {
      label: "Monitors",
      items: [
        { label: "Your Monitors", path: "yours" },
        { label: "Shared Monitors", path: "shared" }
      ]
    },
    {
      label: "Explorer",
      items: [
        { label: "Accounts" },
        { label: "Blocks" },
        { label: "Transactions" },
        { label: "Receipts" },
        { label: "Logs" },
        { label: "Traces" }
      ]
    },
    { label: "Separator" },
    { label: "Names" },
    {
      label: "Signatures",
      items: [{ label: "Known" }, { label: "Monitored" }, { label: "Both" }]
    },
    {
      label: "Digests",
      items: [
        { label: "Finalized" },
        { label: "Finalized" },
        { label: "Staged" },
        { label: "Unripe" },
        { label: "Columns" }
      ]
    },
    {
      label: "Caches",
      items: [
        { label: "Blocks" },
        { label: "Txs" },
        { label: "Traces" },
        { label: "Slurps" },
        { label: "Prices" },
        { label: "Abis" }
      ]
    },
    { label: "Separator" },
    {
      label: "Settings",
      items: [
        { label: "API Config", path: "api" },
        { label: "Node Config", path: "node" },
        { label: "Scraper Config", path: "scraper" },
        { label: "Sharing Config", path: "sharing" },
        { label: "Skins" },
        { label: "Schemas" }
      ]
    },
    {
      label: "Support",
      items: [
        { label: "Hot Keys", path: "keys" },
        { label: "Free Support", path: "free" },
        { label: "Per Incident", path: "incident" },
        { label: "Documentation" },
        { label: "Licensing" },
        { label: "Contact Us", path: "contact" },
        { label: "About Us", path: "about" }
      ]
    }
  ]
};

//----------------------------------------------------------------------
export const menusReducer = (state, action) => {
  // users cannot change the menus
  return state;
};

//----------------------------------------------------------------------
export const useMenus = () => {
  return useContext(GlobalContext).menus;
};
