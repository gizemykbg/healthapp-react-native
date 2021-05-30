import GoogleFit, { Scopes } from 'react-native-google-fit'

GoogleFit.checkIsAuthorized().then(() => {
    console.log(GoogleFit.isAuthorized) // Then you can simply refer to `GoogleFit.isAuthorized` boolean.
})

const options = {
    Scopes: [
      Scopes.FITNESS_ACTIVITY_READ,
      Scopes.FITNESS_ACTIVITY_WRITE,
      Scopes.FITNESS_BODY_READ,
      Scopes.FITNESS_BODY_WRITE,
      Scopes.FITNESS_NUTRİTİON_READ,
      Scopes.FITNESS_NUTRİTİON_WRİTE,
      Scopes.FITNESS_SLEEP_READ,
      Scopes.FITNESS_SLEEP_WRİTE,
    ],
  }
  GoogleFit.authorize(options)
    .then(authResult => {
      if (authResult.success) {
        dispatch("AUTH_SUCCESS");
      } else {
        dispatch("AUTH_DENIED", authResult.message);
      }
    })
    .catch(() => {
      dispatch("AUTH_ERROR");
    })
  
  // ...
  // Yetkili olduğunda arayın
  GoogleFit.startRecording((callback) => {
    // Google Fit Kayıt API'sinden gelen verileri işleyin 
  });
