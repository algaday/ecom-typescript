import React, { useState } from 'react'
import { useGetFeedbackApiQuery } from '../../RtkQuery/feedbackApi'
import UserFeedback from '../UserFeedback/UserFeedback'
import {
  FeedbackWrapper,
  FeedbackContainer,
  FeedbackTitle,
  FeedbackText,
  FeedbackFeed,
  LeftArrow,
  RightArrow,
} from './Feedback.styles'

export type UserFeedbacks = {
  login: { uuid: string }
  picture: { medium: string }
  name: {
    first: string
    last: string
  }
  email: string
  registered: { date: string }
}

function Feedback() {
  const [currentPage, setCurrentPage] = useState(1)
  const [feedPerPage] = useState(3)

  const { data } = useGetFeedbackApiQuery(9)

  const user = data?.results

  const indexOfLastPost = currentPage * feedPerPage
  const indexOfFirstPost = indexOfLastPost - feedPerPage
  const currentFeed = user?.slice(indexOfFirstPost, indexOfLastPost)

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const nextPage = () => {
    if (currentPage !== Math.ceil(user.length / feedPerPage)) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <FeedbackWrapper>
      <FeedbackContainer>
        <FeedbackTitle>Food lovers feedback</FeedbackTitle>
        <FeedbackText>
          It is a long established fact that a reader will distracted by the
          readable content of a page when looking at its layout
        </FeedbackText>
        <FeedbackFeed>
          {currentFeed?.map((item: UserFeedbacks) => (
            <UserFeedback key={item.login.uuid} {...item} />
          ))}
          <LeftArrow onClick={previousPage} />
          <RightArrow onClick={nextPage} />
        </FeedbackFeed>
      </FeedbackContainer>
    </FeedbackWrapper>
  )
}

export default Feedback
