export default {
  column: '2',
  owner: '',
  demos: [
    {
      demoId: 'basic-usage',
      name: {
        'zh-CN': '基本用法',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p><p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['basic-usage.vue']
    },
    {
      demoId: 'placement',
      name: {
        'zh-CN': '抽屉方向',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>添加 <code>placement</code> 属性设置抽屉的方向，可选值有 <code>left|right|top|bottom</code>，默认值为 <code>right</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['placement.vue']
    },
    {
      demoId: 'width',
      name: {
        'zh-CN': '抽屉宽度',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 <code>width</code> 属性设置抽屉的宽度，默认值为 <code>300px</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['width.vue']
    },
    {
      demoId: 'dragable',
      name: {
        'zh-CN': '拖拽功能',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 <code>dragable</code> 属性开启抽屉宽度拖拽功能，默认值为 <code>false</code>。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['dragable.vue']
    },
    {
      demoId: 'mask',
      name: {
        'zh-CN': '遮罩层1',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>添加 <code>mask</code> 属性可以关闭遮罩层，默认值为 <code>true</code> 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask.vue']
    },
    {
      demoId: 'mask-event',
      name: {
        'zh-CN': '遮罩层2',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>默认弹窗打开后，可以单击遮罩层关闭弹窗，设置 <code>mask-closable</code> 为 <code>false</code> 后将禁用该功能，默认值为 <code>true</code> 。<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['mask-event.vue']
    },
    {
      demoId: 'show',
      name: {
        'zh-CN': '显示隐藏',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>- show-header: 显示头部，默认值为 true；<br>- show-footer: 显示底部，默认值为 false；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['show.vue']
    },
    {
      demoId: 'slot',
      name: {
        'zh-CN': '插槽',
        'en-US': 'events'
      },
      desc: {
        'zh-CN':
          '<p>- header: 头部插槽，默认显示头部，设置 :show-header="true" 时有效；<br>- header-right: 头部右侧插槽，默认显示关闭功能；<br>- footer: 底部插槽，默认隐藏底部，设置 :show-footer="true" 时有效；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['slot.vue']
    },
    {
      demoId: 'event',
      name: {
        'zh-CN': '事件',
        'en-US': 'events'
      },
      desc: {
        'zh-CN': '<p>- hide: 关闭抽屉事件；<br>- confirm: 确认事件，设置 :show-footer="true" 时有效；<p>',
        'en-US': '<p>bbutton click</p>'
      },
      codeFiles: ['event.vue']
    }
  ],
  apis: []
}
