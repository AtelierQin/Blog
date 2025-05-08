interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '逸刻AI应用创新大赛指南',
    description: `欢迎参加逸刻AI应用创新赛。这是一个展示创意、学习新技能、共同成长的绝佳机会。让我们用AI点燃创新火花!`,
    imgSrc: '/static/images/逸刻AI应用创新大赛指南.png',
    href: 'https://atelierqin.cn',
  },
  {
    title: '逸刻拓店GSA计划',
    description: `运用GSA（Goal-Strategy-Action）战略规划逸刻便利店拓展目标。`,
    imgSrc: '/static/images/逸刻拓店GSA计划.png',
    href: 'https://atelierqin.io',
  },
]

export default projectsData
