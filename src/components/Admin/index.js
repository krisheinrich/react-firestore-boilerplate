import React, { Component } from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';
import * as ROLES from '../../constants/roles';

class AdminPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    this.props.firebase.users().on('value', snapshot => {
      const usersObject = snapshot.val();

      const usersList = Object.keys(usersObject).map(key => ({
        ...usersObject[key],
        uid: key
      }));

      this.setState({
        loading: false,
        users: usersList
      });
    });
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <h1>Admin</h1>
        <p>
          The Admin Page is accessible by every signed in admin user.
        </p>
        { loading && <div>Loading ...</div> }
        <UserList users={users} />
      </div>
    );
  }
}

const UserList = ({ users }) => (
  <ul>
    { users.map(user => (
      <li key={user.uid}>
        <span>
          <strong>ID:</strong> { user.uid }
        </span>
        <span>
          <strong>Email:</strong> { user.email }
        </span>
        <span>
          <strong>Username:</strong> { user.username }
        </span>
        <span>
          <strong>Role(s):</strong>
          { !!user.roles
            ? Object.keys(user.roles).join(', ')
            : 'None'
          }
        </span>
      </li>
    )) }
  </ul>
);

const condition = authUser => authUser && !!authUser.roles[ROLES.ADMIN];

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AdminPage);
