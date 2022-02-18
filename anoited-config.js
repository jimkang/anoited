const rootPath = "/usr/share/nginx/html/smidgeo.com/anoited";

module.exports = {
  name: "anoited",
  archiveOpts: {
    title: "Anoited",
    homeLink: "https://smidgeo.com/anoited",
    rootPath,
    maxEntriesPerPage: 25,
    fileAbstractionType: "fs",
    footerHTML: `<div class="important-info">
    <a href="https://smidgeo.com/anoited/">Anoited index page</a> |
    <a href="https://smidgeo.com/anoited/rss/index.rss">Anoited RSS feed</a> |
    <a href="https://smidgeo.com/notes/deathmtn/">deathmtn</a>
    </div>
    `,
    headerExtraHTML: `<div class="intro">These are posts about my tourist-style expeditions into <a href="https://noitagame.com/">Noita</a>. I'm not good at the game, but I really enjoy seeing weird things and dying in wacky and varied ways.`,
    generateRSS: true,
    archiveBaseURL: "https://smidgeo.com/anoited",
    mediaDir: "https://smidgeo.com/notes/deathmtn/media",
    rssFeedOpts: {
      feed_url: "https://smidgeo.com/anoited/rss/index.rss",
      site_url: "https://smidgeo.com/anoited/",
    },
    rssPostingDelay: 1000
  },
};
