import gql from 'graph-tag';




const create_account  =  gql`
	

`,

const login   = gql`

`
,
	//profile


const profilecreate = gql`

`,
const profileupdate = gql`

`,
const profiledelete = gql`

`,
	//education

const educationcreate = gql`

`,

const educationupdate = gql`

`,

const educationdelete = gql`

`,
	//certification
const certificationcreate = gql`

`,

const certificationupdate = gql`

`,

const certificationdelete = gql`
`,

	//skill
const skillcreate = gql`

`,
const skillupdate = gql`

`,
const skilldelete = gql`

`,



	//  post
const postcreate = gql`
	mutation{
		postCreate(user:String!, content:String!, media:String!){
			user
			content
			media
		}
	}

`,

const postupdate =gql`

`,
const postdelete = gql`

`,
	// job

const jobcreate = gql`

`,

const jobupdate = gql`

`,

const jobdelete = gql`


`,
	//work history

const workhistorycreate = gql`

`,

const workhistoryupdate = gql`

`,
const workhistorydelete = gql`
`,

	//application

const applicationcreate = gql`

`,

const applicationupdate = gql`
`,

const applicationdelete = gql`

`
