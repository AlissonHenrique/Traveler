interface IAuthConfig {
  jwt: {
    secret: string;
    expiresIn: string;
  };
}
export default {
  jwt: {
    secret: 'b6ef032e8b8354f7271fca1090413948',
    expiresIn: '1d',
  },
} as IAuthConfig;
