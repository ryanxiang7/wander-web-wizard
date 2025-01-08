// HACK : this file is for mock data
export type Node = {
  id: number
  name: string
  arrive_time: string
  leave_time: string
  profile: string
  images: string[]
}
//todo 节点之间的连线应该要有出行方式与时间
export const nodeData: Node[] = [
  {
    id: 1,
    name: '北京',
    arrive_time: '早上9点',
    leave_time: '早上10点',
    profile: '这里是北京天坛，它有着悠久的历史和独特的建筑。',
    images: [
      'https://picsum.photos/id/1011/800/600',
      'https://picsum.photos/id/1012/800/600',
      'https://picsum.photos/id/1013/800/600',
    ],
  },
  {
    id: 2,
    name: 'B',
    arrive_time: '中午11点',
    leave_time: '中午12点',
    profile: '北京故宫是明清两代的皇家宫殿，规模宏大，建筑精美。',
    images: [
      'https://pic1.zhimg.com/v2-7d8c6d8d9d6688898c6789c655675a66_r.jpg',
      'https://pic4.zhimg.com/v2-9c8d8d9d668888898c6789c655675a66_r.jpg ',
    ],
  },
  {
    id: 3,
    name: 'C',
    arrive_time: '下午1点',
    leave_time: '下午2点',
    profile: '四合院体现了老北京的传统居住文化充满生活气息。',
    images: [
      'https://pic2.zhimg.com/v2-9c8d8d9d668888898c6789c655675a66_r.jpg ',
      'https://pic3.zhimg.com/v2-8d9d6688898c6789c655675a66_r.jpg',
    ],
  },
  {
    id: 4,
    name: 'D',
    arrive_time: '下午3点',
    leave_time: '下午4点',
    profile: '这里是一处很有特色的地方，有着别样的景致等待你去发现哦。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/301'],
  },
  {
    id: 5,
    name: 'E',
    arrive_time: '下午5点',
    leave_time: '下午6点',
    profile: '北京22这个地方有着独特的韵味，值得细细品味一番',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: 6,
    name: 'F',
    arrive_time: '晚上8点',
    leave_time: '晚上10点',
    profile: '北京33有着让人眼前一亮的特色，去了肯定会有收获呀。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: 7,
    name: 'H',
    arrive_time: '晚上8点',
    leave_time: '晚上10点',
    profile: '北京33有着让人眼前一亮的特色，去了肯定会有收获呀。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: 8,
    name: 'D',
    arrive_time: '下午3点',
    leave_time: '下午4点',
    profile: '这里是一处很有特色的地方，有着别样的景致等待你去发现哦。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/301'],
  },
  {
    id: 9,
    name: 'E',
    arrive_time: '下午5点',
    leave_time: '下午6点',
    profile: '北京22这个地方有着独特的韵味，值得细细品味一番',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: 10,
    name: 'F',
    arrive_time: '晚上8点',
    leave_time: '晚上10点',
    profile: '北京33有着让人眼前一亮的特色，去了肯定会有收获呀。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
  {
    id: 11,
    name: 'H',
    arrive_time: '晚上8点',
    leave_time: '晚上10点',
    profile: '北京33有着让人眼前一亮的特色，去了肯定会有收获呀。',
    images: ['https://picsum.photos/200/300', 'https://picsum.photos/200/300'],
  },
]
