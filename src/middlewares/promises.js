const middleware = store => next => action => {
  if (action.type !== 'PROMISE') {
    return next(action);
  }
  const [startAction, successAction, failureAction] = action.actions;
  
  // return dispatch => {
  //   dispatch({
  //     type: startAction,
  //   })

  //   return action.promise.then(
  //     payload => dispatch({
  //       type: successAction,
  //       payload,
  //     }),
  //     error => dispatch({
  //       type: failureAction,
  //       error, 
  //     })
  //   );
  // }

  store.dispatch({
    type: startAction,
  });
  action.promise.then((payload) => {
    console.log('successAction', payload)
    store.dispatch({
      type: successAction,
      payload,
    })
  }, (error) => {
    console.log("failureAction", error)
    store.dispatch({
      type: failureAction,
      error,
    })
  });

  return Promise.resolve(action.promise);

};

export default middleware;