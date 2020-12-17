<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-header>
        <div>
          <a-menu @click="menuClick" v-model="current" mode="horizontal">
           <template v-for="item in list">
             <a-menu-item v-if="item.children.length===0" :key="item.key">
               <span>{{item.title}}</span>
             </a-menu-item>
             <sub-menu v-else :key="item.key" :menu-info="item" />
           </template>
          </a-menu>
        </div>
      </a-layout-header>
      <a-layout-content>
        <router-view/>
      </a-layout-content>
      <a-layout-footer>Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script>
  import {Menu} from 'ant-design-vue'
  const SubMenu = {
    template:`
      <a-sub-menu :key="menuInfo.key" v-bind="$props" v-on="$listeners">
        <span slot="title">
          <span>{{ menuInfo.title}}</span>
        </span>
        <template v-for="it in menuInfo.children">
          <a-menu-item v-if="it.children.length===0" :key="it.key">
            <span>{{it.title}}</span>
          </a-menu-item>
          <sub-menu v-else :key="it.key" :menu-info="it" />
        </template>
      </a-sub-menu>
    `,
    name: 'SubMenu',
    isSubMenu: true,
    props: {
      ...Menu.SubMenu.props,
      // Cannot overlap with properties within Menu.SubMenu.props
      menuInfo: {
        type: Object,
        default: () => ({}),
      },
    },
  }
  export default {
    components: {
      'sub-menu': SubMenu,
    },
    data() {
      return {
        current: ['mail'],
        collapsed: false,
        list:[
          {
            key: '1',
            title: '主页',
            children: []
          },
          {
            key: '2',
            title: '画廊',
            children:[{
              key: '2.1',
              title: '素描',
              children: []
            },{
              key: '2.2',
              title: '速写',
              children: []
            },{
              key: '2.3',
              title: '插画',
              children: [{
                key: '2.3.1',
                title: '手绘',
                children:[]
              },{
                key: '2.3.2',
                title: '板绘',
                children:[]
              }]
            },{
              key: '2.4',
              title: '动漫卡通',
              children: []
            }]
          }
        ]
      }
    },
    methods:{
      menuClick(item){
        if(item.key==='1'){
          this.$router.push({path:'/test1'})
        }else if(item.key==='2'){
          this.$router.push({path:'/test2'})
        }
      }
    }
  }
</script>

<style scoped>
  #components-layout-demo-basic {
    text-align: left;
  }
  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    background: #FFFFFF;
    color: #131212;
  }
  #components-layout-demo-basic .ant-layout-footer {
    /*line-height: 1.5;*/
  }
  #components-layout-demo-basic .ant-layout-sider {
    /*background: #3ba0e9;*/
    color: #181717;
    /*line-height: 120px;*/
  }
  #components-layout-demo-basic .ant-layout-content {
    background: #FFFFFF;
    color: #100f0f;
    /*min-height: 120px;
    line-height: 120px;*/
  }
  #components-layout-demo-basic > .ant-layout {
    margin-bottom: 48px;
  }
  #components-layout-demo-basic > .ant-layout:last-child {
    margin: 0;
  }
  /*.ant-layout-header{
    height: 64px;
    padding: 0 50px;
    line-height: 64px;
    background: #FFFFFF;
  }*/
</style>
