Hooks.once('init', () => {
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: 'pf2e-season-of-ghosts-pg-pl', // Identyfikator twojego modułu
      lang: 'pl', // Język
      dir: 'lang/pl', // Katalog z tłumaczeniami
    });
  }
});