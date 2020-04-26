import React, { useEffect } from 'react';

// REDUX
import { connect } from 'react-redux';
import { increment, decrement, reset } from './actions/counter';
import { login, logout } from './actions/auth';
import { getUsers } from './actions/users';

const App = ({
  count,
  isAuthenticated,
  increment,
  decrement,
  reset,
  login,
  logout,
  getUsers,
  isLoading,
  error,
  users,
}) => {
  useEffect(() => {
    if (isAuthenticated) {
      getUsers();
    }
  }, [isAuthenticated, getUsers]);

  return (
    <div className='counter'>
      <h2>Counter</h2>
      <div>
        <button onClick={() => decrement(5)}>-</button>
        <span className='count'>{count}</span>
        <button onClick={() => increment(5)}>+</button>
      </div>
      <button onClick={() => reset()}>Reset</button>
      <div>
        {!isAuthenticated ? (
          <button onClick={() => login()}>Login</button>
        ) : (
          <button onClick={() => logout()}>Logout</button>
        )}
      </div>
      {error && <div>{error}</div>}
      {isLoading && <div>LOADING...</div>}
      {!isLoading && users.map(user => <div key={user.id}>{user.name}</div>)}
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter.count,
  isAuthenticated: state.auth.isAuthenticated,
  isLoading: state.users.isLoading,
  error: state.users.error,
  users: state.users.users,
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset,
  login,
  logout,
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
