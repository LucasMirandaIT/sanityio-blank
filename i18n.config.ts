// Here we set Indonesian to be the default
const languages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'pt', title: 'Portuguese (Brazil)' },
  ];
  
  const i18n = {
    languages,
    base: languages.find((item) => item.isDefault)?.id,
  };
  
  export { i18n };