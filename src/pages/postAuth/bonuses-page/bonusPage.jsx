import React, { useContext, useEffect, useState } from 'react'
import BonusPageCard from './card'
import { Row, Col, Spin } from 'antd'
import GeneralContext from '../../../context/generalContext/GeneralContext'
import CourseContext from '../../../context/course-context/CourseContext'
import './styles.scss'
import BonusVideoModal from '../../../components/modals/bonus-video-modal/BonusVideoModal'

const BonusPage = () => {
  const mockBonusArray = [
    {
      bonusImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
      bonusTitle: "Building a portfolio website",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.ytimg.com/vi/OBVVXgA-dhQ/maxresdefault.jpg",
      bonusTitle: "Building a Facebook UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://madewithreact.com/content/images/2016/12/react-linkedin-clone.png",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
    {
      bonusImage: "https://i.graphicmama.com/blog/wp-content/uploads/2020/07/23143645/17-Inspiring-Ui-Ux-Designer-Portfolios-That-Take-Design-to-the-Next-Level.jpg",
      bonusTitle: "Building a LinkedIn UI clone",
      bonusDescription: "In this tutorial, let's build a clone for the homepage of linkedin"
    },
  ]

  const { generalState: { user }, setPaymentModalOpened, paymentModalOpened } = useContext(GeneralContext)
  const { getAllTheBonuses } = useContext(CourseContext)

  const [isLoading, setIsLoading] = useState(true)
  const [allBonuses, setAllBonuses] = useState([])
  const [bonusVideoModalOpened, setBonusVideoModalOpened] = useState(false)
  const [currentBonusData, setCurrentBonusData] = useState(null)

  const onGetAllBonuses = async () => {
    const allBonuses = await getAllTheBonuses()

    setAllBonuses(allBonuses?.data)
  }

  const togglePaymentModal = () => {
    setPaymentModalOpened(!paymentModalOpened)
  }

  useEffect(() => {
    onGetAllBonuses().finally(() => {
      setIsLoading(false)
    })
  }, [])

  return (
    <div className="bonuses-page">
      <h1>Bonus Crash Courses</h1>
      <BonusVideoModal
        bonusVideoModalOpened={bonusVideoModalOpened}
        setBonusVideoModalOpened={setBonusVideoModalOpened}
        currentBonusData={currentBonusData}
      />
      {
        isLoading ? (
          <Spin tip="  Loading bonuses..." style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20%"}} />
        ) : (
          <div>
            {
              user?.paid? (
                <Row justify="space-between">
                  {
                    allBonuses.map(bonus => (
                      <Col sm={24} md={12} lg={7}>
                        <BonusPageCard
                          title={bonus.bonusTitle}
                          image={bonus.bonusImage}
                          description={bonus.bonusDescription}
                          onClick={() => {
                            setCurrentBonusData(bonus)
                            setBonusVideoModalOpened(true)
                          }}
                        />
                      </Col>
                    ))
                  }
                </Row>
              ) : (
                <Row justify="space-between">
                  {
                    mockBonusArray.map(bonus => (
                      <Col sm={24} lg={7}>
                        <BonusPageCard
                          title={bonus.bonusTitle}
                          image={bonus.bonusImage}
                          description={bonus.bonusDescription}
                          onClick={togglePaymentModal}
                        />
                      </Col>
                    ))
                  }
                </Row>
              )
            }
          </div>
        )
      }
    </div>
  )
}

export default BonusPage
