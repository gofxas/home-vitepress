export default {
  "/数码/": {
    base: "/数码/",
    items: [
      { text: "小屏幕收集收录", link: "compactphone" },
      { text: "各品牌型号命名规则（或规律）", link: "name-rule" },
      { text: "Android 手机 Bootloader解锁、内核开源、保修",link:"bl-unlock"},
      { text: "小米笔记本内部编号汇总",link:"xiaomiboot-internal-names"},
      {
        text: "Switch",
        collapsed:true,
        items:[
          { text: "Switch软解与硬解",link:"Switch软解与硬解"},
          { text: "Switch破解应用列表",link:"xxxxx520"},
        ]
      },
      {
        text: "Sony XZ1C",
        collapsed: true,
        items: [
          { text: "优化", link: "xz1c" },
          { text: "解锁后刷机", link: "xz1c刷机" },
        ],
      }
    ],
  },
};
