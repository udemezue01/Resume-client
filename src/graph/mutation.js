import gql from 'graphql-tag'



export const SIGNIN_USER_MUTATION = gql`

mutation ($email:String!,$password:String!){
	tokenAuth(email:$email, password:$password){
		token
		user{
			id
		}
	}
}
`;


// export const REGISTER_USER_MUTATION  = gql`

// mutation ($full_name:String!, $email:String, $account_type:String!, $password:String!){

// 	postCreate(text:$text, photo:$photo, video:$String ){
// 		text
// 		photo
// 		video
// 	}
// }
// `;
// export const PROFILE_CREATE_MUTATION  = gql`

// mutation ($text:String!, $photo:String, $video:String){

// 	postCreate(text:$text, photo:$photo, video:$String ){
// 		text
// 		photo
// 		video
// 	}
// }
// `;

//POST MUTATION

// export const POST_CREATE_MUTATION  = gql`

// mutation ($text:String!, $photo:String, $video:String){

// 	postCreate(text:$text, photo:$photo, video:$String ){
// 		text
// 		photo
// 		video
// 	}
// }
// `;
//JOB MUTATION
// export const JOB_CREATE_MUTATION = gql`



// `;

//APPLICATION MUTATION

// export const APPLICATION_CREATE_MUTATION = gql`

// `
//