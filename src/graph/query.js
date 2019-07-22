import gql from 'graphql-tag';




export const USER_PROFILE = gql`
			query{
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
				  skill {
				    id
				    skill
				    level
				  }
				  certification {
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
				    photo
				    file
				    createdAt
				  }
}


`