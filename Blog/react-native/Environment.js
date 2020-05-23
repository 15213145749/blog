const ENV = {
  dev: {
    apiUrl: 'http://localhost:44319',
    oAuthConfig: {
      issuer: 'http://localhost:44319',
      clientId: 'Blog_App',
      clientSecret: '1q2w3e*',
      scope: 'Blog',
    },
    localization: {
      defaultResourceName: 'Blog',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44319',
    oAuthConfig: {
      issuer: 'http://localhost:44319',
      clientId: 'Blog_App',
      clientSecret: '1q2w3e*',
      scope: 'Blog',
    },
    localization: {
      defaultResourceName: 'Blog',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
