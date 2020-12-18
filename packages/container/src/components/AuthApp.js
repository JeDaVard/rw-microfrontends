import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default (props) => {
  const ref = useRef(null);
  const history = useHistory()

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (location) => {
        const nextPathname = location.pathname;
        const pathname = history.location.pathname;

        if (pathname !== nextPathname) {
          history.push(nextPathname)
        }
      },
      onSignIn: ({ email }) => {
        props.onSignIn({
          isSignIn: true,
          currentUser: {
            email
          }
        })
      }
    });

    history.listen(onParentNavigate)
  }, []);

  return <div ref={ref} />;
};
