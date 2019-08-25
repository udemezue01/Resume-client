import gql from 'graphql-tag'





export const USER_PROFILE = gql`
			{
  account {
    id
    fullName
    email
    profile {
      id
      username
      avatar
      country
      status
      location
      coverPhoto
    }
  }
  education {
    id
    school
    yearStarted
    yearEnded
  }
  skills {
    id
    skill
    level
  }
  certifications {
    id
    organization
    yearObtained
  }
  job {
    id
    position
    description
  }
  post {
    id
    text
    video
    createdAt
  }
}


`;