import React from 'react'
import { Tabs } from 'antd'
import './styles.scss'


const { TabPane } = Tabs
const TabsComponent = ({ tabItems, tabBarColor, }) => {

  const callback = () => {
    console.log("Hello World")
  }
  return (
    <div>
      <Tabs tabBarStyle={{ backgroundColor: `${tabBarColor}`, padding: '4%' }} defaultActiveKey="1" onChange={callback}>
        {
          tabItems.map( tabItem => (
            <TabPane tab={tabItem.tabName} key={tabItem.tabIndex}>
              {tabItem.tabContent}
            </TabPane>
          ))
        }
      </Tabs>
    </div>
  )
}

export default TabsComponent
