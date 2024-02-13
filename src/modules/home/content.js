import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return function WithLogger(props) {
    useEffect(() => {
      /* eslint-disable no-console */
      console.log(
        `Component ${WrappedComponent.displayName || WrappedComponent.name} mounted`
      );
      return () => {
        console.log(
          `Component ${WrappedComponent.displayName || WrappedComponent.name} will unmount`
        );
      };
    }, []);

    useEffect(() => {
      console.log(
        `Component ${WrappedComponent.displayName || WrappedComponent.name} updated`
      );
    });

    return <WrappedComponent {...props} />;
  };
};

function MyComponent() {
  return <div>High Order Component(HOC)</div>;
}

const MyComponentWithLogger = withLogger(MyComponent);

export default MyComponentWithLogger;
