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
  posts {
    id
    text
    photo
    createdAt
  }
}


`;