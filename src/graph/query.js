import gql from 'graphql-tag';





export const USER_PROFILE = gql`
{
  account {
    id
    fullName
    profile {
      id
      avatar
      coverPhoto
      status
      location
    }
    skillSet {
      id
      skill
      level
    }
    educationSet {
      id
      school
      yearStarted
      yearEnded
    }
    jobSet {
      id
      position
      description
      employmentType
    }
    postSet {
      id
      text
      video
    }
  }
}

`;