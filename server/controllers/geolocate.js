/* eslint-disable no-console */
import ipInfo from 'ipinfo';
import * as Updater from '../updaters/updateUsers.js';
import * as User from '../tools/usersTools.js';

const geolocate = (req, res) => {
  const { latitude, longitude } = req.body;
  const login = User.getLoggedUser(req);
  if (latitude && longitude) {
    Updater.geolocate({ login, latitude, longitude });
    return res.send({ success: true, message: 'Your location has been updated!' });
  }
  ipInfo((err, cLoc) => {
    console.log(err || cLoc);
    if (err) {
      res.send({ success: false, message: 'We are unable to locate you...' });
    }
    const loc = cLoc.loc.split(',');
    const lat = parseFloat(loc[0]);
    const long = parseFloat(loc[1]);
    Updater.geolocate({ login, latitude: lat, longitude: long });
  });
  return res.send({ success: true, message: 'Your location has been updated' });
};

export default geolocate;
