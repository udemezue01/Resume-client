import gql from 'graphql-tag';





export const USER_PROFILE = gql`
query {
  account {
    id
    fullName
    email
    verified
    profile {
      id
      coverPhoto
      username
      avatar
      country
      status
    }
  }
  educations {
    id
    school
    yearStarted
    yearEnded
  }
  certifications {
    id
    organization
    yearObtained
  }
  skills {
    id
    skill
    level
  }
  jobs {
    id
    position
    description
    employmentType
    tags
    image
    location
    createdAt
  }
  posts {
    id
    text
    photo
    createdAt
  }
}

`;