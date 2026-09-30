// Single source of truth for business facts. Every page imports from here so
// the entity details, phone numbers, and hours can never drift apart again.
export const ENTITY = {
  legalName: "Coralstone Services Group Pty Ltd",
  tradingName: "Coralstone Services Group",
  acn: "690 335 034",
  abn: "13 080 859 721",
  suburb: "Box Hill NSW 2765",
  region: "Sydney, NSW, Australia",
  email: "hello@coralstonegroup.com.au",
  hours: "Mon-Fri 8am-6pm AEST",
  url: "https://www.coralstonegroup.com.au",
} as const;

export const CALENDLY = "https://calendly.com/abhishek-sinha-coralstonegroup/30min";
