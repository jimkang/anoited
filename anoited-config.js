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
    <a href="https://smidgeo.com/anoited/rss/index.rss">RSS feed</a> |
    <a href="https://smidgeo.com/notes/deathmtn/">Main microblog</a>
    </div>
    `,
    generateRSS: true,
    archiveBaseURL: "https://smidgeo.com/anoited",
    mediaDir: "https://smidgeo.com/notes/deathmtn/media",
    rssFeedOpts: {
      feed_url: "https://smidgeo.com/anoited/rss/index.rss",
      site_url: "https://smidgeo.com/anoited/",
    },
  },
};
