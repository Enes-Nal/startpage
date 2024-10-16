let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Matão, São Paulo',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#ea6962",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      p: ["https://www.pinterest.es/search/pins/?q=", "Pinterest"],
      r: ["https://www.roblox.com/discover/?Keyword=", "Roblox"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  localIcons: false,
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "main",
      background_url: "src/img/banners/cbg-12.gif",
      categories: [{
        name: "Social Media",
        links: [
          {
            name: "",
            url: "https://www.youtube.com/",
            icon: "brand-youtube-filled",
            icon_color: "#ea6962",
          },
          {
            name: "",
            url: "https://www.roblox.com",
            icon: "assembly",
            icon_color: "#d3869b",
          },
          {
            name: "",
            url: "https://twitter.com/home",
            icon: "brand-twitter-filled",
            icon_color: "#7daea3",
          },
          {
            name: "",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#a9b665",
          },

          {
            name: "",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#e78a4e",
          },

          {
            name: "",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
          {
            name: "",
            url: "https://discord.com/app",
            icon: "brand-discord",
            icon_color: "#7289DA",
          },
        ],
      }, {
        name: "School",
        links: [
          {
            name: "myasu",
            url: "https://webapp4.asu.edu/myasu/student",
            icon: "school",
            icon_color: "#811a3f",
          },
          {
            name: "canvas",
            url: "https://canvas.asu.edu/",
            icon: "assembly",
            icon_color: "#e78a4e",
          },
          {
            name: "docs",
            url: "https://docs.google.com/document/u/0/",
            icon: "file",
            icon_color: "#4484f4",
          },
        ],
      }, {
        
      
        name: "vids",
        links: [
          {
            name: "hianime",
            url: "https://hianime.to/home",
            icon: "brand-funimation",
            icon_color: "#f4b5d6",
          },
          {
            name: "netflix",
            url: "https://www.netflix.com",
            icon: "brand-netflix",
            icon_color: "#e60414",
          },
          {
            name: "anilist",
            url: "https://anilist.co/home",
            icon: "air-balloon",
            icon_color: "#4450f9",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#ea6962",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#7daea3",
            },
            {
              name: "leonardo ai",
              url: "https://app.leonardo.ai/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "dribble",
              url: "https://dribbble.com/following",
              icon: "brand-dribbble-filled",
              icon_color: "#d3869b",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "picker",
              url: "https://imagecolorpicker.com/",
              icon: "color-picker",
              icon_color: "#de0633",
            },
            {
              name: "pallate",
              url: "https://colorhunt.co/",
              icon: "color-filter",
              icon_color: "#ea6962",
            },
            {
              name: "cobalt",
              url: "https://cobalt.tools/",
              icon: "arrow-big-right-line",
              icon_color: "#060408",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources 3d",
          links: [
            {
              name: "thingiverse",
              url: "https://www.thingiverse.com/",
              icon: "circle-letter-t",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "repositories",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#7daea3",
            },
            {
              name: "gitlab",
              url: "https://gitlab.com/",
              icon: "brand-gitlab",
              icon_color: "#e78a4e",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "brand-openai",
              icon_color: "#89b482",
            },
            {
              name: "flutter",
              url: "https://docs.flutter.dev/ui",
              icon: "brand-flutter",
              icon_color: "#7daea3",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#ea6962",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#7daea3",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#a9b665",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#e78a4e",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#ea6962",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#a9b665",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#e78a4e",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#7daea3",
            },
            {
              name: "fotos",
              url: "https://photos.google.com/u/1",
              icon: "photo-filled",
              icon_color: "#ea6962",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
    {
      name: "START",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mine",
          links: [
            {
              name: "m.e.n",
              url: "https://github.com/Enes-Nal/startpage",
              icon: "hexagon-letter-m",
              icon_color: "#fefffe",
            },
          ],
        },
        {
          name: "others",
          links: [
            {
              name: "tressley",
              url: "https://tressley.github.io/_traichu/index.html",
              icon: "flame",
              icon_color: "#e78a4e",
            },
            {
              name: "list",
              url: "https://github.com/jnmcfly/awesome-startpage?tab=readme-ov-file",
              icon: "list",
              icon_color: "#7daea3",
            },
            {
              name: "dawn",
              url: "https://github.com/b-coimbra/dawn",
              icon: "sunset-2",
              icon_color: "#ea6962",
            },
            {
              name: "tartarus",
              url: "https://alljavi.github.io/tartarus-startpage/",
              icon: "bat",
              icon_color: "#ea6962",
            },
            {
              name: "lo-fi",
              url: "https://nainish-startpage.netlify.app/",
              icon: "ice-cream",
              icon_color: "#7daee2",
            },
            {
              name: "dashy",
              url: "https://github.com/Lissy93/dashy",
              icon: "dashboard",
              icon_color: "#ea6962",
            },
            {
              name: "excalith",
              url: "https://github.com/excalith/excalith-start-page",
              icon: "terminal",
              icon_color: "#7daee2",
            },
            {
              name: "2-list",
              url: "https://startpages.github.io/",
              icon: "list",
              icon_color: "#7daee2",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#7daea3",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);

(function() {
  var css = document.createElement('link');
  css.href = 'src/css/tabler-icons.min.css';
  css.rel = 'stylesheet';
  css.type = 'text/css';
  if (!CONFIG.config.localIcons)
    document.getElementsByTagName('head')[0].appendChild(css);
})();
