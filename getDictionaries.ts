interface Dictionaries {
  [key: string]: () => Promise<Record<string, string>>;
}

const dictionaries: Dictionaries = {
  en: () => import("@/dictionaries/en.json").then((r) => r.default),
  bn: () => import("@/dictionaries/bn.json").then((r) => r.default),
};

export const getDictionaries = (lang: string) => {
  return dictionaries[lang]();
};
