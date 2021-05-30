import moment from 'moment';

export function buildDailySteps(steps) {
  const results = {}
  for (const step of steps) {
    if (step == undefined) {
      continue
    }

    const dateFormatted = getFormattedDate(new Date(step.endDate))

    if (!(dateFormatted in results)) {
      results[dateFormatted] = 0
    }

    results[dateFormatted] += step.steps
  }

  const dateMap = []
  for (const index in results) {
    dateMap.push({ date: index, value: results[index] })
  }
  return dateMap
}

export function lbsAndOzToK(imperial) {
  const pounds = imperial.pounds + imperial.ounces / 16
  return pounds * 0.45359237
}

export function isNil(value) {
  return value == null
}

// kullanıcı girişine göre varsayılan yapılandırmayı ayrıştır
export function prepareInput(options) {
  const startDate = !isNil(options.startDate)
  ? Date.parse(options.startDate)
  : new Date().setHours(0, 0, 0, 0)
  const endDate = !isNil(options.endDate)
    ? Date.parse(options.endDate)
    : new Date().valueOf();
  const bucketInterval = options.bucketInterval || 1;
  const bucketUnit = options.bucketUnit || "DAY";

  return { startDate, endDate, bucketInterval, bucketUnit };
}

export function prepareResponse(response, byKey = 'value') {
  return response
    .map(el => {
      if (!isNil(el[byKey])) {
        el.startDate = moment(el.startDate).toISOString()
        el.endDate = moment(el.endDate).toISOString()
        return el
      }
    })
    .filter(day => !isNil(day))
}

export function prepareDailyResponse(response) {
  return response.map(el => {
    el.date = getFormattedDate(new Date(el.date))
    return el
  })
}

export function prepareHydrationResponse(response) {
  return response.map(el => {
    el.date = new Date(el.date).toISOString()
    el.waterConsumed = Number(el.waterConsumed).toFixed(3)
    return el
  })
}


function getFormattedDate(date) {
  const day = ('0' + date.getDate()).slice(-2)
  const month = ('0' + (date.getMonth() + 1)).slice(-2)
  const year = date.getFullYear()
  return year + '-' + month + '-' + day
}


export function getWeekBoundary(date, adjustment) {
  const startDate = moment(date).startOf('week').add(adjustment, 'days');
  const endDate = moment(date).endOf('week').add(adjustment, 'days');
  return [startDate, endDate];
}

export function prepareDeleteOptions(options) {
  return {
    ...options,
    startDate: typeof options.startDate !== 'number' ? Date.parse(options.startDate) : options.startDate,
    endDate: typeof options.endDate !== 'number' ? Date.parse(options.endDate) : options.endDate,
  }
}































/* import GoogleFit, { Scopes } from 'react-native-google-fit'

const opt = {
    startDate: "2021-05-20T00:00:17.971Z", // required ISO8601Timestamp
    endDate: new Date().toISOString(), // required ISO8601Timestamp
    bucketUnit: "DAY", // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
    bucketInterval: 1, // optional - default 1. 
  };
  
  GoogleFit.getDailyStepCountSamples(opt)
   .then((res) => {
       console.log('Daily steps >>> ', res)
   })
   .catch((err) => {console.warn(err)});
  
  
  // shortcut functions, 
  // return weekly or daily steps of given date
  // all params are optional, using new Date() without given date, 
  // adjustment is 0 by default, determine the first day of week, 0 == Sunday, 1==Monday, etc.
  GoogleFit.getDailySteps(date).then().catch()
  GoogleFit.getWeeklySteps(date, adjustment).then().catch()
   */