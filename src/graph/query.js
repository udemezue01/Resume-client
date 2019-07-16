import gql from 'graph-tag';




const profile = gql`
			profile(username:!string){
				user{
					id
					fullName
					email
				}
				status
				country
				job{
					id
					position
				}


			}

`