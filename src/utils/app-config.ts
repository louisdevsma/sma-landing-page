type LocalePrefixMode = "as-needed" | "always" | "never";

const localePrefix: LocalePrefixMode = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "SMA Solutions",
  description:
    "SMA Solutions is a company that provides solutions to businesses.",
  locales: ["en", "vi"],
  defaultLocale: "en",
  localePrefix,
};
