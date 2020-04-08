import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const CREATE_USER_MUTATION = gql`
    mutation CREATE_USER_MUTATION($email: String!, $password: String!) {
        createUser(email: $email, password: $password) {
            id
            email
        }
    }
`

class SignUp extends React.Component {
    state = {
        email: '',
        password: '',
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        return (
            <Mutation mutation={CREATE_USER_MUTATION} variables={this.state}>
                {(createUser, { loading, error }) => (
                    <form
                        onSubmit={async (e) => {
                            e.preventDefault()
                            const res = await createUser()
                            console.log(res)
                        }}
                    >
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                        <input type="submit" value="Create Account" />
                    </form>
                )}
            </Mutation>
        )
    }
}

export default SignUp
